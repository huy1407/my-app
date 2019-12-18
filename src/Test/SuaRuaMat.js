import React from "react";
import {Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import TopBar from "./TopBar";
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import {Link} from "react-router-dom"
import Button from "@material-ui/core/Button"
import CTSuaRuaMat from "./CTSuaRuaMat";
const style= {
    root: {
        maxWidth: '1200px',
        margin: 'auto',
        padding: 100,
    },
    card: {
        width: '300px',
        height: '340px',
        padding: '20px',

    },
    img: {
        width: '100%',
        height: '230px',
        margin: 'auto',
    },
};
function SuaRuaMat(props){
    const {classes}= props
    return(
        <div className={classes.root}>
            <TopBar/>
            <div>
                <Typography style={{color:'green'}}>
                    <h3>SUA RUA MAT</h3>
                    Du moi mat hanng tren thi truong <br/>
                    nhieu mau ma chung loai<br/>
                </Typography>
            </div>
            <div>
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <div>
                                    <img className={classes.img}
                                         src='/img/2.jpg' alt=''/>
                                         <Typography style={{textAlign:''}}>
                                             Loai 1:
                                         </Typography>
                                    <Link to={"/CTSuaRuaMat"}>
                                    <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                            variant={"outlined"}>
                                        Chi Tiet
                                    </Button>
                                    </Link>
                                    <Typography style={{float:"left",width:'80px',border:'3px solid red'}}>
                                        <h3>100.000</h3>
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <div>
                                    <img className={classes.img}
                                         src='/img/1.jpg' alt=""/>
                                    <Typography style={{textAlign: ' '}}>
                                        Loai 1:
                                    </Typography>
                                </div>
                                <div>
                                    <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                            variant={"outlined"}>
                                        Chi Tiet
                                    </Button>
                                </div>
                                <div>
                                    <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                        <h3>100,000</h3>
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <div>
                                    <img className={classes.img}
                                         src='/img/1.jpg' alt=""/>
                                    <Typography style={{textAlign: ' '}}>
                                        Loai 1:
                                    </Typography>
                                </div>
                                <div>
                                    <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                            variant={"outlined"}>
                                        Chi Tiet
                                    </Button>
                                </div>
                                <div>
                                    <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                        <h3>100.000</h3>
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <div>
                                    <img className={classes.img}
                                         src='/img/1.jpg' alt=''/>
                                    <Typography style={{textAlign:''}}>
                                        Loai 1:
                                    </Typography>
                                </div>
                                <div>
                                    <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                            variant={"outlined"}>
                                        Chi Tiet
                                    </Button>
                                    <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                        <h3>100.000</h3>
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <div>
                                    <img className={classes.img}
                                         src='/img/1.jpg' alt=''/>
                                    <Typography style={{textAlign:''}}>
                                        Loai 1:
                                    </Typography>
                                    <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                            variant={"outlined"}>
                                        Chi Tiet
                                    </Button>
                                    <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                        <h3>100.000</h3>
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <div>
                                    <img className={classes.img}
                                         src='/img/1.jpg' alt=''/>
                                    <Typography style={{textAlign:''}}>
                                        Loai 1:
                                    </Typography>
                                    <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                            variant={"outlined"}>
                                        Chi Tiet
                                    </Button>
                                    <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                        <h3>100.000</h3>
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <div>
                                    <img className={classes.img}
                                         src='/img/1.jpg' alt=''/>
                                    <Typography style={{textAlign:''}}>
                                        Loai 1:
                                    </Typography>
                                    <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                            variant={"outlined"}>
                                        Chi Tiet
                                    </Button>
                                    <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                        <h3>100.000</h3>
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        <Card className={classes.card}>
                            <div>
                                <img className={classes.img}
                                     src='/img/1.jpg' alt=''/>
                                <Typography style={{textAlign:''}}>
                                    Loai 1:
                                </Typography>
                                <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                        variant={"outlined"}>
                                    Chi Tiet
                                </Button>
                                <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                    <h3>100.000</h3>
                                </Typography>
                            </div>
                        </Card>
                    </Grid><Grid item xs={6} sm={3}>
                        <Card className={classes.card}>
                            <div>
                                <img className={classes.img}
                                     src='/img/1.jpg' alt=''/>
                                <Typography style={{textAlign:''}}>
                                    Loai 1:
                                </Typography>
                                <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                        variant={"outlined"}>
                                    Chi Tiet
                                </Button>
                                <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                    <h3>100.000</h3>
                                </Typography>
                            </div>
                        </Card>
                    </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <div>
                                    <img className={classes.img}
                                         src='/img/1.jpg' alt=''/>
                                    <Typography style={{textAlign:''}}>
                                        Loai 1:
                                    </Typography>
                                    <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                            variant={"outlined"}>
                                        Chi Tiet
                                    </Button>
                                    <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                        <h3>100.000</h3>
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <div>
                                    <img className={classes.img}
                                         src='/img/1.jpg' alt=''/>
                                    <Typography style={{textAlign:''}}>
                                        Loai 1:
                                    </Typography>
                                    <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                            variant={"outlined"}>
                                        Chi Tiet
                                    </Button>
                                    <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                        <h3>100.000</h3>
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <div>
                                    <img className={classes.img}
                                         src='/img/1.jpg' alt=''/>
                                    <Typography style={{textAlign:''}}>
                                        Loai 1:
                                    </Typography>
                                    <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                            variant={"outlined"}>
                                        Chi Tiet
                                    </Button>
                                    <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                        <h3>100.000</h3>
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <div>
                                    <img className={classes.img}
                                         src='/img/1.jpg' alt=''/>
                                    <Typography style={{textAlign:''}}>
                                        Loai 1:
                                    </Typography>
                                    <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                            variant={"outlined"}>
                                        Chi Tiet
                                    </Button>
                                    <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                        <h3>100.000</h3>
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <div>
                                    <img className={classes.img}
                                         src='/img/1.jpg' alt=''/>
                                    <Typography style={{textAlign:''}}>
                                        Loai 1:
                                    </Typography>
                                    <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                            variant={"outlined"}>
                                        Chi Tiet
                                    </Button>
                                    <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                        <h3>100.000</h3>
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        <Card className={classes.card}>
                            <div>
                                <img className={classes.img}
                                     src='/img/1.jpg' alt=''/>
                                <Typography style={{textAlign:''}}>
                                    Loai 1:
                                </Typography>
                                <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                        variant={"outlined"}>
                                    Chi Tiet
                                </Button>
                                <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                    <h3>100.000</h3>
                                </Typography>
                            </div>
                        </Card>
                    </Grid>
                        <Grid item xs={6} sm={3}>
                        <Card className={classes.card}>
                            <div>
                                <img className={classes.img}
                                     src='/img/1.jpg' alt=''/>
                                <Typography style={{textAlign:''}}>
                                    Loai 1:
                                </Typography>
                                <Button style={{float:"right",height:'60px',backgroundColor:'green'}}
                                        variant={"outlined"}>
                                    Chi Tiet
                                </Button>
                                <Typography style={{float:"left",width:'90px',border:'3px solid red'}}>
                                    <h3>100.000</h3>
                                </Typography>
                            </div>
                        </Card>
                    </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );

}

export default withStyles(style)(SuaRuaMat)