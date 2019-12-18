import 'date-fns';
import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import TopBar from "./TopBar";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles'
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import MomentUtils from '@date-io/moment';
import {setGlobal,useGlobal} from 'reactn'
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import {withRouter} from"react-router-dom"
import "moment/locale/vi";

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {Typography} from "@material-ui/core";
import {auth, storage} from "firebase";
import * as firebase from "firebase";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {storagePhotoURLPath} from "./firebase/ProfileImg";
const borderBoxProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 2,
    padding: 2
    // style: { width: '5rem', height: '5rem' },
};

const styles = theme => ({

    formControl: {
        margin: theme.spacing(),
    },
    photoURL: {
        marginTop: '10px',
        height: '100px',
        width: '100px',
        border: "1px dashed black"
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    input: {
        display: 'none',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
});
function CgProfile(props) {
    const {classes}=props;
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [phoneNumber,setphoneNumber]=useState('')
    const [sex,setSex]=useState('')
    const [user,setUser]=useGlobal('user')
    const [date,setDate]=useState('')
    const [photoURL, setPhotoURL] = useState('')
    const [uploadProgress, setUploadProgress] = useState(0)
    const [loading, setLoading] = useState(false)
    const [updatedText, setUpdatedText] = useState('')
    const [displayName, setDisplayName] = useState('')
    const defaultProject = firebase;
    const storage = defaultProject.storage();
    function storagePhotoURLPath() {
        const now = new Date().toJSON()
        return `users/${firebase.auth().currentUser.email}/photoURLs/${now}`
        // return `users/${firebase.auth().currentUser.email}/${now}`
    }
    async function onChangeImg(event) {
        let file = event.target.files[0]
        const imageRef = storage.ref().child(storagePhotoURLPath());
        const uploadTask = imageRef.put(file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            function (snapshot) {
                const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setUploadProgress(progress)
            }, function (e) {
                switch (e.code) {
                    case 'storage/unauthorized':

                        setUploadProgress('storage/unauthorized')
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        setUploadProgress('storage/canceled')
                        break;
                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        setUploadProgress('storage/unknown')
                        break;
                }
            }, function () {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function (photoURL) {
                    console.log('File available at', photoURL);
                    setPhotoURL(photoURL)
                });
            });

    }
    function Transition(props) {
        return <Slide direction={"down"} {...props}/>;
    }

    const handlePassword=(e)=> {
       setPassword(e.target.value)
    }
    const handleSex=(e)=>{
        setSex(e.target.value)
    }

    function handlePhoneNumber(event) {
        setphoneNumber(event.target.value)
    }

    function handleName(event) {
        setName(event.target.value)
    }
    function onDateChange(e) {
        if(e && e.isValid()){
            setDate(e.format('YYYY-MM-DD'))
        }

    }
    const [open,setOpen]=useState(false)
    function onCgProfile() {
        const db=firebase.firestore();
        db.collection("users")
            .doc(firebase.auth().currentUser.uid)
            .update(
                {
                    name,
                    phoneNumber,
                    sex,
                    date,
                    photoURL
                }
            )

            .then(function() {
                firebase.auth().currentUser.updateProfile({displayName,photoURL})

                console.log("Document successfully updated!");
            });
        firebase.auth().currentUser.updatePassword(password).then(function () {  alert('Update Success')
        }).catch(function () {


        })


    }
    return (
        <div>
            <TopBar/>
                <div style={{paddingTop:75,width:800,margin:'auto'}} >
        <React.Fragment>
            <Typography variant="h6" gutterBottom style={{textAlign:'center',color:'green'}}>
                <h1>Change Profile</h1>
            </Typography>
            <Grid container spacing={3} >
                <Grid item xs={12} >
                    <TextField
                        required
                        id="FullName"
                        name="FullName"
                        label="Full Name"
                        fullWidth
                        autoComplete="fname"
                        onChange={handleName}
                        value={name}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Phonenumber"
                        fullWidth
                        autoComplete="pnumber"
                        onChange={handlePhoneNumber}
                        value={phoneNumber}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        fullWidth
                        autoComplete="password"
                        onChange={handlePassword}
                        value={password}
                    />
                </Grid>
                <Grid item  xs={12}>
                    <RadioGroup
                        aria-label={"position"}
                        name={"position"}
                        row
                        value={sex}
                        onChange={handleSex}
                    >
                        <FormControlLabel
                            value={'Nam'}
                            control={<Radio color={"primary"}/>}
                            label={"Nam"}
                            labelPlacement={"end"}

                        />
                        <FormControlLabel
                            value={'Nu'}
                            control={<Radio color={"primary"}/>}
                            label={"Nu"}
                            labelPlacement={"end"}
                        />
                    </RadioGroup>
                </Grid>
                <Grid itemxs={12} sm={6} style={{textAlign:'center'}}>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <KeyboardDatePicker

                            format="YYYY-MM-DD"
                            margin="normal"
                            id="date"
                            label="Ngày sinh"
                            value={date}
                            onChange={onDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}

                        />
                    </MuiPickersUtilsProvider>
                </Grid>

                <Grid item xs={12} sm={6} style={{textAlign:'center'}}>
                    <FormControl className={classes.formControl}>
                        <Grid container justify="center" alignItems="center" direction={"column"}>
                            {/*<input type={'file'} onChange={onChangeFile} accept="photoURL/png, photoURL/jpeg"/>*/}
                            <input
                                accept="photoURL/*"
                                className={classes.input}
                                id="text-button-file"
                                type="file"
                                onChange={onChangeImg}
                            />
                            <label htmlFor="text-button-file">
                                <Button component="span" className={classes.button} color={"primary"}>
                                    Upload Avatar
                                </Button>
                            </label>
                            <div
                                hidden={!uploadProgress || parseInt(uploadProgress) === 100}>uploading... {uploadProgress}%
                            </div>
                            {photoURL &&
                            <Avatar alt="photoURL" src={photoURL} className={classes.bigAvatar}/>
                            }

                        </Grid>
                    </FormControl>
                </Grid>
                <Grid item xs={12} style={{textAlign:'center'}}>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        style={{ width: 200 }}
                        onClick={onCgProfile}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
            </div>
        </div>
    );
}
export default withRouter(withStyles(styles)(CgProfile))