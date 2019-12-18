import React, {useEffect, useState} from "react";
import firebase from "firebase";
import TopBar from "../ShareBlogs/TopBar";
import withStyles from "@material-ui/core/styles/withStyles";
import Botton from "../Botton";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import draftToHtml from "draftjs-to-html";
import _ from 'lodash'
import {Typography} from "@material-ui/core";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Popover from "@material-ui/core/Popover";
import {toast} from "react-toastify";
const styles=theme=>(
    {
        card: {
            maxWidth:"90%",
            width: "100%",
            float: "left",
            marginLeft: 10,
            marginBottom: 10,
            height:"auto",
            minHeight:"auto",
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: '#404040',
        },
        appBar: {
            top: 'auto',
            bottom: 0,
        },
        topbar: {
            width: "100%",
            height: "65px",
            position: "fixed",
            zIndex: 2,
            overflowY: "hidden",
            top: 0,
            left: 0,
            right: 0
        },
        root: {
            backgroundColor: '#404040',
            width: '100%',
            paddingBottom: '30px',
            paddingTop: "100px",
            bottom: 0,
        },
    });
function LeftBlogVIew(props) {
    const {classes}=props
    const [blogs,setBlogs]=useState('')
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState('')
    const [deleteBlog, setDeleteBlog] = useState({})
    const auth=firebase.auth()
    const firestore=firebase.firestore()
    useEffect(()=>{
        firebase.firestore().collection("blog")
            // .orderBy("updated_at", "desc")
            .where("is_delete", "==", false)
            .where("is_draff", "==", false)
            .get()
            .then(function (querySnapshot) {
                let Blogs = []
                querySnapshot.forEach(function (doc) {
                    Blogs.push({...doc.data(), id: doc.id})
                });
                setBlogs(Blogs)
            })
            .then(()=>{})
            .catch(function (error) {});
    },[])
    const deleteBlogPopup=()=>{
        if(auth.currentUser){
            try{
                firestore.collection("blog").doc(deleteBlog.id).update({is_delete:true}).then(function (doc) {
                    firestore.collection("blog")
                        .where("is_delete", "==", false)
                        .where("is_draff", "==", false)
                        .get()
                        .then(function (querySnapshot) {
                            let blogs = []
                            querySnapshot.forEach(function (doc) {
                                blogs.push({...doc.data(), id: doc.id})
                            });
                           setBlogs(blogs)
                        })
                        .catch(function (error) {
                            console.log("Error getting documents: ", error);
                        });
                    setOpen(false)
                    setAnchorEl(null)
                    setDeleteBlog(null)
                    props.history.push('/BlogShare/AllBlogs')
                    toast.success('delete success')

                }).catch(function (e) {
                    console.error("error",e)

                })
            } catch (e) {
                console.log(e)
            }
        }
    }
    return (
        <div>
           <TopBar/>
            <div style={{height: "auto", marginTop: 80, marginBottom: 20}}>
                <Grid container>
                    <Grid style={{backgroundColor: "#ffffff", marginTop: 60}} item xs={12} sm={12}>
                        <Container>
                            <div>
                                <h1> ALL BLOGS </h1>
                            </div>
                            {
                                blogs && blogs.length!== 0 && blogs.map(blog => {
                                    let content = draftToHtml(blog.content)
                                    return (
                                        <div>
                                            <Card className={classes.card}>
                                                <CardContent>
                                                    <Typography
                                                        style={{fontSize: 12, fontStyle: "italic"}}
                                                        className={classes.title}
                                                        color="textSecondary"
                                                        gutterBottom
                                                    >
                                                        {moment(blog.updated_at).utc().format('llll')} by {blog.author}
                                                    </Typography>
                                                    <Link to={`/BlogShare/blogs?id=${blog.id}`}>
                                                        <Typography style={{fontWeight: 400,}}>
                                                            {blog.title}
                                                        </Typography>
                                                    </Link>
                                                    <Typography
                                                        style={{fontSize: 12, fontStyle: "italic"}}
                                                        className={classes.pos}
                                                        color="textSecondary"
                                                    >
                                                        {_.join(blog.tags, ' | ')}
                                                    </Typography>
                                                    <img src={blog.image} alt={blog.author} style={{maxHeight:"80",maxWidth:"80"}}/>
                                                    <Typography variant="body2" component="p">
                                                        <div
                                                            dangerouslySetInnerHTML={{__html: content.length > 70 ? content.substr(0, 70) + '...' : content}}/>
                                                    </Typography>
                                                </CardContent>
                                                <CardActions style={{bottom: 0}}>
                                                    <Button
                                                        style={{bottom: 0}}
                                                        size="medium"
                                                        onClick={() => {
                                                            props.history.push(`/BlogShare/blogs?id=${blog.id}`)
                                                        }
                                                        }
                                                    >
                                                        Đọc Blog
                                                    </Button>
                                                </CardActions>
                                                <CardActions disableSpacing>
                                                    {

                                                        auth.currentUser && auth.currentUser.email === blog.author ?
                                                            <div style={{float: "right"}}>
                                                                <IconButton aria-label="Edit Blogs">
                                                                    {/*<Link to={`/share/edit?id=${blog.id}`}>*/}
                                                                    {/*    <Edit/>*/}
                                                                    {/*</Link>*/}
                                                                </IconButton>
                                                                <IconButton onClick={(event) => {
                                                                    setOpen(true)
                                                                    setAnchorEl(event.currentTarget)
                                                                    setDeleteBlog(blog)
                                                                }} aria-label="Delete Blog">
                                                                    <DeleteForeverIcon/>
                                                                </IconButton>
                                                                <div>
                                                                    <Popover
                                                                        id={blog.id}
                                                                        open={open}
                                                                        anchorEl={anchorEl}
                                                                        onClose={() => setOpen(false)}
                                                                        anchorOrigin={{
                                                                            vertical: 'bottom',
                                                                            horizontal: 'center',
                                                                        }}
                                                                        transformOrigin={{
                                                                            vertical: 'top',
                                                                            horizontal: 'center',
                                                                        }}
                                                                    >
                                                                        <Typography className={classes.typography}>Delete Blog
                                                                            Now?</Typography>
                                                                        <Button onClick={deleteBlogPopup}>OK</Button>
                                                                        <Button onClick={() => {
                                                                            setOpen(false)
                                                                            setAnchorEl(null)
                                                                            setDeleteBlog(null)
                                                                        }}>Cancel</Button>

                                                                    </Popover>
                                                                </div>
                                                            </div>
                                                            :
                                                            ''
                                                    }
                                                </CardActions>
                                            </Card>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Grid>
                </Grid>
            </div>
            <Botton/>
        </div>
    );
}
export default withStyles(styles)(LeftBlogVIew)