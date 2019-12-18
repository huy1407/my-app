import React, {useState, useEffect} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Button, TextField} from '@material-ui/core'
import {convertToRaw, EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import FormControl from '@material-ui/core/FormControl'
import {toast} from 'react-toastify'
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {withRouter} from 'react-router-dom'
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {getGlobal, setGlobal, useGlobal} from "reactn";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'
// import firebase from "firebase";
import firebase from "firebase"
// import TopBar from "./TopBar";
import FileUploader from "react-firebase-file-uploader";
import moment from "moment";
import NewTagDialog from "./NewTagDialog";
import ChipInput from "material-ui-chip-input";
import TopBar from "../TopBar";
import PreviewBlogContent from "./PreviewBlogContent";
import {index} from "../../Algolia";
import content from "react-animated-slider/src/pages/content";

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    padding: {
        padding: 20,
    },
    descr: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: 50,
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    editor: {
        minHeight: '300px',
        border: '1px solid #ddd2d2',
        padding: "5px"
    },
    image: {
        marginTop: '10px',
        height: '140px',
        width: '140px',
        border: '1px dashed black',
    },
    content: {
        paddingTop: 40,
        paddingRight: 100,
        paddingLeft: 100,
        [theme.breakpoints.down('sm')]: {
            paddingRight: 50,
            paddingLeft: 50,
        },
        [theme.breakpoints.down('xs')]: {
            paddingRight: 20,
            paddingLeft: 20,
        },
    },
    button: {
        marginTop: '20px',
        marginLeft: '20px'
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing.unit / 2,
        minHeight: '50px',
        alignItems: 'center'
    },
    chip: {
        margin: theme.spacing.unit / 2,
    },
})

function AddBlog(props) {
    const {classes} = props
    const [title, setTitle] = useState([])
    const [loading, setLoading] = useState(false)
    const [goback, setGoback] = useState(false)
    const [anchorE1, setAnchorE1] = useState(0)
    const [tags] = useState('')
    const [selPosts, setSelPosts] = useState('')
    const [showSelPosts, setShowSelPosts] = useState('')
    const [tagName, setTagName] = useState([])
    const [progress, setProgress] = useState(0)
    const [isUploading, setIsUploading] = useState(false)
    const [avataUrl, setAvataUrl] = useState('')
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [openNewTag, setOpenNewTag] = useState(false)
    const [myTags, setMyTags] = useState('')
    const [ok, setOk] = useState(false)
    const auth=firebase.auth()
    const firestore=firebase.firestore()
    const storage=firebase.storage()
    useEffect(() => {
        if (ok === true) {
            onSave()
        }
    }, [ok])

    const onSave = () => {
        // const user = auth.currentUser
        if (checkDataNull(true)) {
            if (auth.currentUser) {
                try {
                    let docData = {
                        author: auth.currentUser.email,
                        title: title,
                        image: avataUrl,
                        content: convertToRaw(editorState.getCurrentContent()),
                        tags: myTags,
                        created_at: moment().utc().format(),
                        updated_at: moment().utc().format(),
                        is_delete: false,
                        is_draff: false
                    };
                    firestore.collection("blog").add(docData).then(function (doc) {
                        toast.success('Add Blog Successfully')
                        props.history.push(`BlogShare/blogs?id=${doc.id}`)
                    }).catch(function (error) {
                        console.error("Error adding document: ", error);
                    });
                    index.addObject(docData,(err,content)=>{
                        if(err)
                        {
                            console.log("error",err);
                        }
                    })
                    index.setSettings({
                        'title':['desc']
                    },(err,content)=>{
                        console.log(content)
                    })
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
    const onSaveDraff = () => {
        if (auth.currentUser) {
            try {
                let docData = {
                    author: auth.currentUser.email,
                    title: title,
                    image: avataUrl,
                    content: convertToRaw(editorState.getCurrentContent()),
                    tags: myTags,
                    created_at: moment().utc().format(),
                    updated_at: moment().utc().format(),
                    is_delete: false,
                    is_draff: true
                };
                firestore.collection("blog").add(docData).then(function (doc) {
                    toast.success('Draff Blog Successfully')
                    props.history.push(`/BlogShare`)
                }).catch(function (error) {
                    console.error("Error adding document: ", error);
                });
            } catch (e) {
                console.log(e)
            }
        }
    }

    // const onTagSelect = (event) => {
    //     if (event.target.value === 'other') {
    //         setOpenNewTag(true)
    //     }
    //     setValue(event.target.value)
    //     let tag = _.find(tags, { 'uuid': event.target.value })
    //     setTagName(tag)
    // }

    const handleUploadStart = () => {
        setIsUploading(true)
        setProgress(0)
    };

    const handleProgress = progress => setProgress({progress});

    const handleUploadError = error => {
        setIsUploading({isUploading: false});
        console.error(error);
    };

    const handleUploadSuccess = filename => {
        setProgress(100)
        setIsUploading(false)
        storage
            .ref(`blogs/imagesBlogs/${auth.currentUser.email}/`)
            .child(filename)
            .getDownloadURL()
            .then(url => setAvataUrl(url));
    };
    const goBack = () => {
        setGoback(true)
        // props.history.push('/share')
    }
    // const handleAddChip = (chip) => {
    //     setMyTags([...chip])
    //     console.log(myTags)
    // }
    const handleChange = (chips) => {
        console.log(chips)
        setMyTags(chips)
    }

    const checkDataNull = () => {
        if (!title || !myTags || !editorState) {
            toast.error('Kiểm tra lại thông tin nhập vào bị Trống')
            return false
        } else return true
    }
    const onPreView = (event) => {
        setSelPosts({
            author: auth.currentUser.email,
            content: convertToRaw(editorState.getCurrentContent()),
            created_at: moment().utc().format(),
            id: 'preview',
            image: avataUrl ? avataUrl : 'https://img-classfunc.s3-ap-northeast-1.amazonaws.com/public/ClassFuncLogo/logo-new/Classfunc-logo.png',
            is_delete: false,
            is_draff: false,
            tags: myTags,
            title: title,
            updated_at: moment().utc().format(),
        })
        setShowSelPosts(true)
    }


    // if (!auth.currentUser) return window.location.assign(process.env.REACT_APP_URL_LOGIN + '?redirect_url=' + window.location.href + '/share/addblog')
    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div className={classes.content} style={{paddingTop:150,width:1300,margin:'auto'}}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Tiêu đề"
                    multiline
                    rows="2"
                    value={title}
                    className={classes.textField}
                    onChange={e => setTitle([e.target.value])}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    // InputLabelProps={{ shrink: true }}
                />
                <FormControl className={classes.formControl}>
                    {/*{isUploading && <Typography>Progress: {progress}</Typography>}*/}
                    <label style={{
                        backgroundColor: 'steelblue',
                        color: 'white',
                        padding: 10,
                        marginTop: "-10px",
                        borderRadius: 4,
                        pointer: 'cursor'
                    }}>
                        <CustomUploadButton
                            accept="image/*"
                            name="avatar"
                            randomizeFilename
                            storageRef={storage.ref(`blogs/imagesBlogs/${auth.currentUser ? auth.currentUser.email : 'otherAuthor'}/`)}
                            onUploadStart={handleUploadStart}
                            onUploadError={handleUploadError}
                            onUploadSuccess={handleUploadSuccess}
                            onProgress={handleProgress}
                        >
                            Select Your Image
                        </CustomUploadButton>
                    </label>
                    <div className={classes.image}>
                        {avataUrl && <img src={avataUrl} style={{width: '100%', height: '100%'}} alt={''}/>}
                    </div>
                </FormControl>
                <ChipInput
                    defaultValue={['Blog Share']}
                    onChange={(chips) => handleChange(chips)}
                />
                <div className={classes.editor}>
                <Editor
                    initialEditorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={(editor) => setEditorState(editor)}
                    toolbar={{
                        image: {
                            urlEnabled: true,
                            uploadEnabled: true,
                            alignmentEnabled: true,
                            uploadCallback: true,
                            previewImage: true,
                            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                            defaultSize: {
                                height: 'auto',
                                width: 'auto',
                            },
                        },
                    }}
                />
                </div>
                <Button variant={'contained'} color={"inherit"}
                        className={classes.button}
                        disabled={loading}
                        onClick={goBack}
                >Quay lại </Button>
                <Button variant={'contained'} color={'primary'}
                        className={classes.button}
                        disabled={loading}
                        onClick={onSave}
                >Lưu </Button>
                <Button variant={'contained'} color={"secondary"}
                        className={classes.button}
                        disabled={loading}
                        onClick={(event) => onPreView(event)}
                >Xem trước </Button>
                {
                    selPosts && showSelPosts === true &&
                    <PreviewBlogContent
                        selPosts={selPosts}
                        setSelPosts={setSelPosts}
                        setShowSelPosts={setShowSelPosts}
                        showSelPosts={showSelPosts}
                        anchorE1={anchorE1}
                        setAnchorE1={setAnchorE1}
                        setOk={setOk}
                    />
                }
            </div>
            <Dialog
                open={goback}
                TransitionComponent={Transition}
                onClose={() => setGoback(false)}
            >
                <DialogTitle>
                    {"Thêm Bài Viết"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Bài viết chưa được lưu . Bạn có muốn lưu lại bản Nháp không?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setGoback(false)} color="inherit">
                        Hủy
                    </Button>
                    <Button onClick={() => {
                        setGoback(false)
                        onSaveDraff()
                    }} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
            <NewTagDialog openNewTag={openNewTag} setOpenNewTag={setOpenNewTag}/>
        </div>
    )
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export default withRouter((withStyles(styles)(AddBlog)))

