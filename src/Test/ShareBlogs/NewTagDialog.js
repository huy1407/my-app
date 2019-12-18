import React, {useState} from "react";
import firebase from "firebase";
import {toast} from "react-toastify";
import {Dialog} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import uuid from "uuid"
function NewTagDialog(props) {
    const {openNewTag,setOpenNewTag}=props
    const auth=firebase.auth()
    const firestore=firebase.firestore()
    const [name,setName]=useState('')
    const onSave=()=>{
        if (auth.currentUser){
            setOpenNewTag(false)
            firestore.collection("tags").add({
                uuid:uuid(),
                name:name
            }).then(function () {
                toast.success("add tags successfully")
            }).catch(function (e){
                console.error("error",e)
            })
                }}
                return(
                    <div>
                        <Dialog open={openNewTag}
                                onClose={()=>setOpenNewTag(false)}
                                >
                            <DialogTitle>Blog</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Them moi tag cho blog
                                </DialogContentText>
                                <TextField
                                    margin={"dense"}
                                    label={"name"}
                                    type={"email"}
                                    fullWidth
                                    value={name}
                                    onChange={e=>setName(e.target.value)}
                                    />

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => setOpenNewTag(false)} color="primary">
                                    Hủy
                                </Button>
                                <Button onClick={onSave} color="primary">
                                    Thêm
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                )
}

export default NewTagDialog
