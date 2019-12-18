import React, {useEffect, useState} from "react";
import Slider from 'react-animated-slider';
import {withStyles} from "@material-ui/core/styles";
import {Link, withRouter} from "react-router-dom";
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import 'react-animated-slider/build/horizontal.css';
import Button from "@material-ui/core/Button";
import {useGlobal, setGlobal} from "reactn";
import firebase  from "firebase";

const styles = {
    root: {
        maxWidth: '1200px',
        margin: 'auto',
        padding: 100,
        // backgroundColor:'#F7A4D2',
    },
    img: {
        width: '200px',
        height: '200px',
        padding: 10,
        margin: 'auto'
    },
    background: {
        padding: 20,
        margin: 'auto'
    },
    h1: {
        color: 'red',
        textAlign: 'center',
        padding: 30,
        lineHeight: 'unset'
    },
    card: {
        width: '280px',
        height: '350px',
        boxShadow: '10px 10px 5px grey'
    },
};

function Home(props) {
    const anh = process.env.PUBLIC_URL + '/img/9.bmp'
    const {classes} = props;
    const [user, setUser] = useGlobal('user')
    console.log(user)

    const onProfile = () => {
        if (user.username) {
            props.history.push('/Profile')
        } else {
            props.history.push('/Login')
        }

    }

    return (
        <div className={classes.root}>
            <div className={classes.background}>
                <Slider autoplay='1000' position="fixed">
                    <img src={anh} alt={""}/>
                    <img src={anh} alt={""}/>
                    <img src={anh} alt={""}/>
                    <img src={anh} alt={""}/>
                </Slider>
            </div>
            <div>
                <div>
                    <Typography className={classes.h1}>
                        <h1>DỊCH VỤ NỔI BẬT</h1>
                    </Typography>
                    <div>
                        <button onClick={onProfile}>
                            <img className={classes.img}
                                 src='/img/10.jpg'/>
                        </button>
                        {/*<link to={'/muathe'}>*/}
                        {/*</link>*/}
                        <button>
                            <img className={classes.img}
                                 src='/img/10.jpg'/>
                        </button>
                        <button>
                            <img className={classes.img}
                                 src='/img/10.jpg'/>
                        </button>
                        <button>
                            <img className={classes.img}
                                 src='/img/10.jpg'/>
                        </button>
                        <button>
                            <img className={classes.img}
                                 src='/img/10.jpg'/>
                        </button>
                    </div>
                    <Typography className={classes.h1}>
                        <h1>DANH MỤC SẢN PHẨM</h1>
                    </Typography>
                    <div>
                        <div>
                            <Grid container spacing={24}>
                                <Grid item xs={6} sm={3}>
                                    <Card className={classes.card}>
                                        {/*<img src='/img/2.jpg' alt=""/>*/}
                                        <Typography style={{textAlign: 'center'}}>
                                            <h3>Sua rua mat</h3>
                                            <Link to='SuaRuaMat'>
                                                <button variant="outlined" color="inherit">
                                                    xem tat ca
                                                </button>
                                            </Link>
                                        </Typography>


                                    </Card>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Card className={classes.card}>
                                        {/*<link to={}>*/}
                                        {/*<img src='/img/3.jpg' alt=""/>*/}
                                        <Typography style={{textAlign: 'center'}}>
                                            {/*<h3>Ngoc Rong</h3>*/}
                                            {/*<p>So tk:432432</p>*/}
                                            {/*<p>Da ban:879878</p>*/}
                                            <button variant="outlined" color="inherit">
                                                xem tat ca
                                            </button>
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Card className={classes.card}>
                                        {/*<link to={}>*/}
                                        {/*<img src='/img/4.jpg' alt=""/>*/}
                                        <Typography style={{textAlign: 'center'}}>
                                            {/*<h3>Ngoc Rong</h3>*/}
                                            {/*<p>So tk:432432</p>*/}
                                            {/*<p>Da ban:879878</p>*/}
                                            <button variant="outlined" color="inherit">
                                                xem tat ca
                                            </button>
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Card className={classes.card}>
                                        {/*<link to={}>*/}
                                        {/*<img src='/img/5.jpg' alt=""/>*/}
                                        <Typography style={{textAlign: 'center'}}>
                                            {/*<h3>Ngoc Rong</h3>*/}
                                            {/*<p>So tk:432432</p>*/}
                                            {/*<p>Da ban:879878</p>*/}
                                            <button variant="outlined" color="inherit">
                                                xem tat ca
                                            </button>
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Card className={classes.card}>
                                        {/*<link to={}>*/}
                                        {/*<img src='/img/6.jpg' alt=""/>*/}
                                        <Typography style={{textAlign: 'center'}}>
                                            {/*<h3>Ngoc Rong</h3>*/}
                                            {/*<p>So tk:432432</p>*/}
                                            {/*<p>Da ban:879878</p>*/}
                                            <button variant="outlined" color="inherit">
                                                xem tat ca
                                            </button>
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Card className={classes.card}>
                                        {/*<link to={}>*/}
                                        {/*<img src='/img/7.jpg' alt=""/>*/}
                                        <Typography style={{textAlign: 'center'}}>
                                            {/*<h3>Ngoc Rong</h3>*/}
                                            {/*<p>So tk:432432</p>*/}
                                            {/*<p>Da ban:879878</p>*/}
                                            <button variant="outlined" color="inherit">
                                                xem tat ca
                                            </button>
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Card className={classes.card}>
                                        {/*<link to={}>*/}
                                        {/*<img src='/img/8.jpg' alt=""/>*/}
                                        <Typography style={{textAlign: 'center'}}>
                                            {/*<h3>Ngoc Rong</h3>*/}
                                            {/*<p>So tk:432432</p>*/}
                                            {/*<p>Da ban:879878</p>*/}
                                            <button variant="outlined" color="inherit">
                                                xem tat ca
                                            </button>
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Card className={classes.card}>
                                        {/*<link to={}>*/}
                                        {/*<img src='/img/anh1.jpg' alt=""/>*/}
                                        <Typography style={{textAlign: 'center'}}>
                                            {/*<h3>Ngoc Rong</h3>*/}
                                            {/*<p>So tk:432432</p>*/}
                                            {/*<p>Da ban:879878</p>*/}
                                            <button variant="outlined" color="inherit">
                                                xem tat ca
                                            </button>
                                        </Typography>
                                    </Card>
                                </Grid>
                            </Grid>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default withRouter(withStyles(styles)(Home))