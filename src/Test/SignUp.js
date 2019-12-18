import React, {useState, PureComponent, useEffect} from 'react';
import validator from 'validator'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import firebase from 'firebase';
import {setGlobal, useGlobal} from 'reactn'
import {index} from "../Algolia";
const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignUp(props) {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [user, setUser] = useGlobal('user')
    function handleEmail(event) {
        setEmail(event.target.value)
    }
    function handlePassword(event) {
        setPassword(event.target.value)
    }
    function handlePhoneNumber(event) {
        setPhoneNumber(event.target.value)
    }
    function handleName(event) {
        setName(event.target.value)
    }
    const EmailCheck = email => {
        return validator.isEmail(email)
    }
    const PhoneCheck = phoneNumber => {
        return validator.isNumeric(phoneNumber)

    }
    function onRegister()
    {

        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then(res=>{
                const db=firebase.firestore();
                db.collection("users")
                    .doc(res.user.uid)
                    .set({
                        name,
                        phoneNumber
                    })
                    .then(function (doc) {
                        console.log(doc)
                    }).catch( function (error) {
                    console.log(error)
                })
                    index.addObject({name},(err,content)=>{
                        if(err)
                        {
                            console.log("error",err);
                        }
                    })
                        index.setSettings({
                            'name':['desc'],
                            // 'phoneNumber':['desc']
                        },(err,content)=>{
                    console.log(content)
                        })
                db.collection("users")
                    .doc(res.user.uid)
                    .set({
                        name,
                        phoneNumber
                    })

                    .then(function (doc) {
                        console.log(doc)
                    }).catch( function (error) {
                    console.log(error)
                })

                // console.log(email,password,name,phoneNumber,(firebase.auth().currentUser.uid))
                props.history.push('/Home')
            })

    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="fullName"
                                variant="outlined"
                                required
                                fullWidth
                                id="fullName"
                                label="Full Name"
                                autoFocus
                                onChange={handleName}
                                // value={name}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="phoneNumber"
                                label="Phone Number"
                                name="phoneNumber"
                                autoComplete="pnumber"
                                onChange={handlePhoneNumber}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleEmail}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handlePassword}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onRegister}
                    >
                        Sign Up
                    </Button>
                    <Link style={{textDecoration:'none'}} to={"/Home"}>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Home
                    </Button>
                    </Link>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2" to ={"/Login"}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}
export default withRouter(SignUp)