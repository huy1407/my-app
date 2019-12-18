import React, {useEffect, useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import {Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
// import {Menu} from "@material-ui/icons";
import Menu from "@material-ui/core/Menu";
// import UserAvatar from '../UserAvatar/index'
import MenuItem from '@material-ui/core/MenuItem'
import UserAvatar from "./UserAvatar";
// import MenuIcon from '@material-ui/icons/Menu'
import Cookies from 'js-cookie'
import {database} from "firebase";
import {useGlobal} from "reactn";
const firebase = require("firebase/app");


// import {useGlobal} from "reactn";



const styles = theme => ({
    root: {
        width: "100%"
    },
    grow: {
        flexGrow: 1
    },
    icon: {
        margin: theme.spacing.unit * 2
    },
});

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
    );

}

function TopBar(props) {
    const {classes} = props
    const [anchorE1, setAnchorE1] = React.useState(null);

    function handleClick(event) {
        setAnchorE1(event.currentTarget);
    }

    function handleClose() {
        setAnchorE1(null);
    }
    const [anchorAvatar, setAnChorAvatar] = useState(null)
    const isMenuOpen = Boolean(anchorAvatar)
    const [showLoginPopup, setShowLoginPoup] = useState(false)
    const [user, setUser] = useState(null)
    const [name, setName] = useState(null)
    const [loading, setLoading] = useState(false)
    const db = firebase.firestore();
    const handleProfileMenuOpen = event => {
        setAnChorAvatar(event.currentTarget)
    }
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => {
                // console.log(user)
                setUser(user)
            }
        );
        return () => {
            unregisterAuthObserver()
        }
    }, [])
    function onLogout () {
        firebase.auth().signOut()
            .then(()=>{props.history.push('/Home')})
            .catch(function (e) {
                console.log(e.toString())

            })



    }
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
        <div className={classes.root}>
            <AppBar style={{height: 100, justifyContent: 'center', backgroundColor: 'white', paddingLeft: '100'}}
                    position="fixed">
                <Toolbar>
                    {/*<div className={classes.top}/>*/}
                    <Link to={'/'}>
                        <Button color="">
                            <HomeIcon className={classes.icon}/>
                        </Button>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={"/Home"}>
                        <Button color="">
                            <h3>Trang chủ</h3>
                        </Button>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={"/Blog"}>
                        <Button color="">
                            <h3>Tin tức mĩ phẩm</h3>
                        </Button>
                    </Link>
                    <div className={classes.grow}/>
                    {user ?
                        <div>
                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                                // component={props => <Link to={'/Profile'} {...props}/>}
                                color="inherit"
                            >
                                {/*<Avatar className={classes.avatar} src={'/img/1.jpg'} alt={'user-avatar'}/>*/}
                                {firebase.auth().currentUser.photoURL?
                                    <Avatar src={firebase.auth().currentUser.photoURL}/>
                                    :
                                    <UserAvatar  text={name}/>
                                }
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorE1}
                                keepMounted
                                open={Boolean(anchorE1)}
                                onClose={handleClose}
                            >
                                <MenuItem component={props => <Link to={'/Profile'}{...props}/>}>Profile</MenuItem>
                                <MenuItem component={props => <Link to={'/cgProfile'}{...props}/>}>Change
                                    Profile</MenuItem>
                                <MenuItem onClick={onLogout} >Logout</MenuItem>
                            </Menu>
                        </div>
                        :
                        < Button
                            style={{color: 'black'}}
                            className={classes.button}
                            component={props => <Link to={'/Login'} {...props}/>}
                            to={'/Login'}
                        >
                            <h3>Đăng nhập</h3>
                        </Button>

                    }
                    {user ?
                        <div>

                        </div>
                        :
                        <Link style={{textDecoration: 'none'}} to={"/SignUp"}>

                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><h3>Đăng
                                Kí</h3>
                            </Button>


                        </Link>
                    }


                </Toolbar>
            </AppBar>
        </div>
    );

}

export default withStyles(styles)(TopBar);