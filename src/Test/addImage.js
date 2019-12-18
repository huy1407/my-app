import React, {useState} from "react";
import {storage} from "firebase";
import withStyles from "@material-ui/core/styles/withStyles";
import firebase from "firebase";
import { withRouter } from 'react-router-dom'
import TopBar from "./TopBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import {storagePhotoURLPath} from "./firebase/ProfileImg";

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
})
function AddImage({classes}) {
    const [uploadProgress, setUploadProgress] = useState(0)
    const [photoURL, setPhotoURL] = useState('')
    const [displayName, setDisplayName] = useState('')
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
        firebase.auth().currentUser.updateProfile({photoURL})
    }
  return(

            <div>
                <TopBar/>
                <div style={{paddingTop:100,width:800,margin:'auto'}} >
                            <Grid container spacing={24}>
                                <Grid item>
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
                            </Grid>
                </div>
            </div>
    )


}
export default withRouter(withStyles(styles)(AddImage))