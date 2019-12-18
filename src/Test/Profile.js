import React, {useState, useEffect} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import TopBar from "./TopBar";
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom"
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import {getGlobal, setGlobal, useGlobal} from 'reactn'

const borderBoxProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 2,
    padding: 2
    // style: { width: '5rem', height: '5rem' },
};
const styles = {
    root: {
        maxWidth: '1200px',
        margin: 'auto',
        padding: 100
    },
    background: {
        textAlign: 'center',
        padding: '50px'
    },
    text: {
        padding: 10,
        color: 'blue'
    },
};

function Profile(props) {
    const {classes} = props
    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useGlobal('user')
    const db = firebase.firestore();
    useEffect(() => {
        const unsub = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                db.collection("users")
                    .doc(user.uid)
                    .get()
                    .then(function (doc) {
                        if (doc.exists) {
                            setName(doc.data().name);
                            setSex(doc.data().sex);
                            setDate(doc.data().date);
                            setphoneNumber(doc.data().phoneNumber);
                        } else {
                            console.log("no")
                        }

                    }).catch(e => {
                    console.log(e);
                    setLoading(false)
                })
            } else {
                // No user is signed in.
            }
        });
        return () => {
            unsub()
        }
    }, [])
    return (
        <div>
            <TopBar/>
            <div style={{paddingTop:100,width:800,margin:'auto'}} >
                <React.Fragment>
                <Box borderRadius={16} {...borderBoxProps} >
                    <Grid container spacing={24}>
                        <Grid style={{marginLeft: '150px', justifyContent: 'center'}} item sx={7}>
                            <Typography>
                                <h1 style={{color: 'Green'}}>Thông Tin Người Dùng</h1>

                            </Typography>
                            <Typography className={classes.text}>
                                Tên:<span style={{color: 'red'}}>{name}</span>
                            </Typography>
                            <Typography className={classes.text}>
                               Giới tính:<span style={{color: 'red'}}>{sex}</span>
                            </Typography>

                                <Typography className={classes.text}>
                                  Ngày sinh:<span style={{color: 'red'}}>{date}</span>

                                </Typography>
                            <Typography className={classes.text}>
                               Số điện thoại:<span style={{color: 'red'}}>{phoneNumber}</span>
                            </Typography>
                        </Grid>
                    </Grid>

                </Box>
                </React.Fragment>
            </div>
        </div>
    )
}

export default withStyles(styles)(Profile)