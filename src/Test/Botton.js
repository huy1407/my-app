import React from "react";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Place from '@material-ui/icons/Web';
import Mail from '@material-ui/icons/Mail';
import LocalPhone from '@material-ui/icons/LocalPhone';
const styles={
    root:{
        backgroundColor:'#222211',
        width:'100%',

    },
    background:{
        padding:'20px',
        paddingLeft:'150px',
        maxWidth:'980px',
        margin:'auto',
    },
    icon:{
        fontsize:17,
        color:'#66bb6a',
    },
    a:{
        color:'white',
    },
};
function Botton(props) {
    const {classes}=props;
    return(
        <div className={classes.root}>
            <div className={classes.background}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Grid container justify={"center"}>
                            <Grid item >
                                <ListItem style={{marginTop:20}}>
                                    <ListItemAvatar>
                                        <a href={'https://facebook.com/huy1407'} style={{color:'white'}}>
                                            {/*<img width='4000' height='800'*/}
                                            {/*src={'/img/9.bmp'}*/}
                                            {/*alt={'Click Me'}>*/}
                                            {/*</img>*/}
                                        </a>
                                    </ListItemAvatar>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div>
                            <ListItem>
                                <ListItemAvatar>
                                    <Place className={classes.icon}/>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography variant='h6' style={{color:'#e0f2f1'}}>
                                        Vinh Tuy,Ha Noi
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <LocalPhone className={classes.icon}/>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography variant='h6' style={{color:'#e0f2f1'}}>
                                        <a href='tel:0123456789' style={{color:'white'}}>
                                            0123456789</a>
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );

}
export default withStyles(styles)(Botton)