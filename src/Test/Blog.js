import React from "react";
import {withStyles} from "@material-ui/core";
import {Card,CardActions,Button,Typography,Grid} from "@material-ui/core";
import {Link} from 'react-router-dom';
import TopBar from "./TopBar";
const style={
    root:{
        maxWidth:1200,
        margin:'120px auto',
    },
    card:{
        width:'100%',
        marginBottom:20
    },
    cardMedia:{},
    img:{
        width: '100%',
        maxHeight:'280px',
    },
    grid:{
        padding:20,
    }
};
const content=[
    "Wellcome to Thanh Hoa"
]
function Blog(props) {
    const {classes}=props;
    return(
        <div>
            <TopBar/>
            <div className={classes.root}>
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={6}>
                        <Card  className={classes.card}>
                         <Grid container xs={12}>
                             <Grid item xs={7}>
                                 <Link to={"/Post1"}><img src={"/img/2.jpg"} alt={""} className={classes.img}/></Link>
                             </Grid>
                             <Grid item xs={5} className={classes.grid}>
                                 <Typography gutterBottom variant={"h5"} component={"h2"}>
                                     Sua Rua Mat
                                 </Typography>
                                 <Typography component={"p"}>
                                     {content[0].substr(0,200)}
                                 </Typography>
                             </Grid>
                         </Grid>
                        </Card>
                        <Card  className={classes.card}>
                            <Grid container xs={12}>
                                <Grid item xs={7}>
                                    <img src={"/img/2.jpg"} alt={""} className={classes.img}/>
                                </Grid>
                                <Grid item xs={5} className={classes.grid}>
                                    <Typography gutterBottom variant={"h5"} component={"h2"}>
                                        Sua Rua Mat
                                    </Typography>
                                    <Typography component={"p"}>
                                        {content[0].substr(0,200)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                        <Card  className={classes.card}>
                            <Grid container xs={12}>
                                <Grid item xs={7}>
                                    <img src={"/img/2.jpg"} alt={""} className={classes.img}/>
                                </Grid>
                                <Grid item xs={5} className={classes.grid}>
                                    <Typography gutterBottom variant={"h5"} component={"h2"}>
                                        Sua Rua Mat
                                    </Typography>
                                    <Typography component={"p"}>
                                        {content[0].substr(0,200)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                        <Card  className={classes.card}>
                            <Grid container xs={12}>
                                <Grid item xs={7}>
                                    <img src={"/img/2.jpg"} alt={""} className={classes.img}/>
                                </Grid>
                                <Grid item xs={5} className={classes.grid}>
                                    <Typography gutterBottom variant={"h5"} component={"h2"}>
                                        Sua Rua Mat
                                    </Typography>
                                    <Typography component={"p"}>
                                        {content[0].substr(0,200)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                        <Card  className={classes.card}>
                            <Grid container xs={12}>
                                <Grid item xs={7}>
                                    <img src={"/img/2.jpg"} alt={""} className={classes.img}/>
                                </Grid>
                                <Grid item xs={5} className={classes.grid}>
                                    <Typography gutterBottom variant={"h5"} component={"h2"}>
                                        Sua Rua Mat
                                    </Typography>
                                    <Typography component={"p"}>
                                        {content[0].substr(0,200)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} spacing={30}>
                        <Card elevation={2} className={classes.card}>
                            <Grid container xs={12}>
                                <Grid item xs={7}>
                                    <img src={"/img/2.jpg"} alt={""} className={classes.img}/>
                                </Grid>
                                <Grid item xs={5} className={classes.grid}>
                                    <Typography gutterBottom variant={"h5"} component={"h2"}>
                                        Sua Rua Mat
                                    </Typography>
                                    <Typography component={"p"}>
                                        {content[0].substr(0,200)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                        <Card elevation={2} className={classes.card}>
                            <Grid container xs={12}>
                                <Grid item xs={7}>
                                    <img src={"/img/2.jpg"} alt={""} className={classes.img}/>
                                </Grid>
                                <Grid item xs={5} className={classes.grid}>
                                    <Typography gutterBottom variant={"h5"} component={"h2"}>
                                        Sua Rua Mat
                                    </Typography>
                                    <Typography component={"p"}>
                                        {content[0].substr(0,200)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );

}
export default withStyles(style)(Blog);