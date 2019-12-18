import React, {useEffect, useState} from "react";
import TopBar from "../TopBar";
import Container from "@material-ui/core/Container";
import ViewBlogContent from "./ViewBlogContent";
import Botton from "../Botton";
import Typography from "@material-ui/core/Typography";
import {Link,withRouter} from "react-router-dom"
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import firebase from "firebase";
import DeleteForeverIcon from "@material-ui/core/SvgIcon/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
const styles=theme=>(
    {
        root:{
            margin:'auto',
            width:'100vw',
            minHeight:'1000px',
            backgroundColor:'#2a9f9f36'
        },
        fabButton:{
            position:'absolute',
            zIndex:100,
            bottom:0,
            left:0,
            right:0,
            margin: '0 auto',
        },
        appBar:{
            top:'auto',
            bottom: 0
        },
        topbar:{
            width: "100%",
            height:"65px",
            position: 'fixed',
            zIndex: 2,
            overflowY:'hidden',
            top:0,
            left: 0,
            right: 0

        },
        link:{
            margin:theme.spacing(1),
        }
    }
)
function BlogShare(props) {
    const {classes}=props
    let Blogs=[]
    const [blogs,setBlogs]=useState('')
    useEffect(()=>{
            firebase.firestore().collection("blog")
                // .orderBy("updated_at","desc").limit(10)
                .where("is_delete","==",false)
                .where("is_draff","==",false)
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        Blogs.push({...doc.data(),id:doc.id})

                    });
                    setBlogs(Blogs)
                })
                .catch(function (e) {
                    console.log("error",e)
                })
    },[])
    return(
        <div>
            <TopBar/>
            <div className={classes.root} style={{paddingTop:'50'}}>
                <Grid container>
                    <Grid style={{backgroundColor: "blue",height: "auto"}} item xs={12} sm={8}>
                        <div style={{
                        backgroundColor:"#ffffff",height:"auto"
                        }}>
                            <Grid container style={{}}>
                                <Grid style={{backgroundColor: "#ffffff",marginTop:60}} item xs={12} sm={12}>
                                    <Container style={{width:"90%",float:"right"}}>
                                        <div>
                                            <ViewBlogContent/>
                                        </div>
                                    </Container>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{height:"auto"}}>
                            <Botton/>
                        </div>
                    </Grid>
                    <Grid style={{
                        backgroundColor: "#f7f7f7",
                        height: "100%",
                        position:"fixed",
                        width:"100%",
                        float:"right",
                        overflowX:"hidden",
                        zIndex:1,
                        top:0,
                        right:0,
                        paddingTop:'50'
                    }} item xs={12} sm={4}>
                        <Container style={{marginTop:100}}>
                            <div style={{display:"flex",marginRight:5,marginBottom:15}}>
                                <Typography style={{marginRight:10}}>LASTEST BLOGS</Typography>
                                <BookmarksIcon/>
                            </div>
                            <div>
                                {
                                    blogs && blogs.length !==0 && blogs.map(blog=>{
                                    return(
                                        <div style={{display:"flex",marginBottom:10}}>
                                            <DonutLargeIcon style={{marginTop:"12px",marginRight:"5px",marginLeft:"10px"}}/>
                                            <Link to={`/BlogShare/blogs?id=${blog.id}`}
                                                  onClick={() => { window.scrollTo(0, 0)}}>
                                                <Typography
                                                    style={{lineHeight:3}}>
                                                    {blog.title}</Typography>
                                            </Link>
                                        </div>
                                    )
                                })
                                }
                                <div style={{display:"flex",marginRight:5,marginTop:15}}>
                                    <Typography onClick={()=>{props.history.push('/BlogShare/AllBlogs')
                                        window.scrollTo(0, 0) }}
                                                style={{lineHeight:3}}>
                                        All Blogs</Typography>
                                    <WbSunnyOutlinedIcon style={{marginTop:"15px",marginLeft:"10px"}}/>
                                </div>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}
export default withRouter(withStyles(styles)(BlogShare))