import React, {useEffect, useState} from "react";
import {func} from "prop-types";
import firebase from "firebase";
import moment from "moment";
import {toast} from "react-toastify";
import TopBar from "../TopBar";
import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import Botton from "../Botton";
import withStyles from "@material-ui/core/styles/withStyles";
import draftToHtml from "draftjs-to-html";
import Grid from "@material-ui/core/Grid";
import {convertFromRaw, convertToRaw, EditorState} from "draft-js";
import Button from "@material-ui/core/Button";
import _ from 'lodash'
const queryString=require('query-string')
const styles=theme=>(
    {
        root:{
            padding:theme.spacing(3,2),
            flexGrow:1
        },
        paper:{
            padding: theme.spacing(2),
            textAlign:'center',
            color:theme.palette.text.secondary,
        },
        BlogView:{
            width:"100%",
            maxWidth:1200,
            margin:"auto",
            paddingBottom:20,
            paddingTop:20
        },
        button:{
            margin:theme.spacing(1),
        }
    }
)
function ViewBlogContent(props) {
    const {classes}=props
    const {data,setOk,setShowSelPosts,setSelPosts}=props
    const [idBlog,setIdBlog]=useState('')
    const [open,setOpen]=useState('')
    const [anchorE1,setAnchorE1]=useState('')
    const firestore=firebase.firestore()
    const auth=firebase.auth()
    const storage=firebase.storage()
    let content=draftToHtml(idBlog.content)
    useEffect(()=>{
        if(data){
            setIdBlog(data)
        }
        if(!data)
        {
            firestore.collection("blog")
                .limit(1)
                .where("is_delete", "==", false)
                .where("is_draff", "==", false)
                // querry = querry.orderBy("is_delete", "desc").limit(10)
                .get()
                .then(function (querySnapshot) {
                    let blogs = []
                    querySnapshot.forEach(function (doc) {
                        blogs.push({...doc.data(), id: doc.id})
                    });
                    setIdBlog(blogs[0])
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
            let url=queryString.parse(window.location.search)
            firestore.collection("blog").doc(`${url.id}`)
                .get()
                .then(function (doc) {
                    if(doc.exists){
                        setIdBlog({...doc.data(),id:doc.id})
                    }
                }).catch(function (e) {
                    console.log("error",e)


            })
        }
    },[window.location.search])
    const deleteBlog=(blog)=>{
        const contentState=convertFromRaw(blog.content);
        if (auth.currentUser){
            try{
                let docData={
                    author:auth.currentUser.email,
                    title:blog.title,
                    image:blog.image,
                    content:convertToRaw((EditorState.createWithContent(contentState)).getCurrentContent()),
                    tags:blog.tags,
                    created_at:blog.created_at,
                    update_at: moment().utc().format(),
                    is_delete:true
                }
                firestore.collection("blog").doc(`${blog.id}`).set(docData).then(function (doc) {
                    props.history.push('/BlogShare')
                    toast.success('delete blog successfully')
                }).catch(function (e){
                    console.error("error",e)
                })
            }catch (e) {
                console.log(e)

            }

        }
    }
    return(
        <div>
            {/*{*/}
            {/*    !data?*/}
            {/*        <TopBar/>*/}
            {/*        :*/}
            {/*        <div>*/}
            {/*            <Typography>*/}
            {/*                Preview Blog*/}
            {/*            </Typography>*/}
            {/*        </div>*/}

            {/*}*/}
            <div className={classes.BlogView} style={{marginTop:"100"}}>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <Paper className={classes.paper}>
                            <h1 style={{textTransform: "uppercase"}}>
                                {idBlog.title}
                            </h1>
                            <h5 style={{fontWeight: "normal", fontStyle: "italic"}}>
                                {moment(idBlog.updated_at).utc().format('LLLL')} by {idBlog.author}
                            </h5>
                            <h4 style={{marginBottom: 20, fontWeight: "normal", textDecoration: "underline"}}>
                                {_.join(idBlog.tags, "   ||  ")}
                            </h4>
                            <Typography></Typography>
                            <div>
                                <img
                                     src={idBlog.image} alt={idBlog.title}/>
                            </div>
                            <div>
                                <div dangerouslySetInnerHTML={{__html: content}}/>
                            </div>
                        </Paper>
                    </Grid>
                    {
                    auth && auth.currentUser && !data && auth.currentUser.email===idBlog.author &&
                        <Grid style={{margin:"auto"}}>
                            <Button
                                variant={"contained"}
                                color={"secondary"}
                                className={classes.button}
                                onClick={()=>props.history.push(`/BlogShare/edit?id=${idBlog.id}`)}
                                >Fix Blog
                            </Button>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                className={classes.button}
                                onClick={(event)=>{
                                setOpen(true)
                                    setAnchorE1(event.currentTarget)
                                }}
                                >
                                Detete Blog
                            </Button>
                            <div>
                                <Popover
                                open={open}
                                anchorE1={anchorE1}
                                onClose={() => setOpen(false)}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                                >
                                <Typography className={classes.typography}>Delete Blog
                                    Now?</Typography>
                                <Button onClick={() => deleteBlog(idBlog)}>OK</Button>
                                <Button onClick={() => setOpen(false)}>Cancel</Button>

                            </Popover>
                        </div>
                    </Grid>
                    }
                    {
                     data && data.length!==0 &&
                         <Grid item xs={12} sm={12}>
                             <Button
                                 variant={"contained"}
                                 color={"secondary"}
                                 className={classes.button}
                                 onClick={()=>{
                                 setOk(false)
                                 setShowSelPosts(false)
                                 setSelPosts(null)
                                 }}
                                 >
                                 Fix Blog
                             </Button>
                             <Button
                                 vatiant={"contained"}
                                 color={"primary"}
                                 className={classes.button}
                                 onCLick={()=>{

                                 setOk(true)
                                     setShowSelPosts(false)
                                 }}
                                 >
                                 Save Blog
                             </Button>
                         </Grid>
                    }
                </Grid>
            </div>
            {
                    <Botton/>
            }
        </div>
    )
}
export default withStyles(styles)(ViewBlogContent)