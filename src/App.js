import React, { Component ,useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';
import Test from "./Test";
import {GetUserData} from "./action/user";
import SuaRuaMat from "./Test/SuaRuaMat";
import CTSuaRuaMat from "./Test/CTSuaRuaMat";
import Blog from "./Test/Blog";
import Post1 from "./Test/Post1";
import Login from "./Test/Login"
import SignUp from "./Test/SignUp";
import Profile from "./Test/Profile";
import FirebaseConfig from "./FirebaseConfig";
import CgProfile from "./Test/cgProfile";
import AddImage from "./Test/addImage"
import BlogShare from "./Test/ShareBlogs/BlogShare"
import AddBlog from "./Test/ShareBlogs/AddBlog2";
import ViewBlogContent from "./Test/ShareBlogs/ViewBlogContent";
import LeftBlogView from "./Test/ShareBlogs/LeftBlogView";
FirebaseConfig()
function App(props) {
    const {classes}=props
    return(
        <div>
            <switch>
                <Route exact path={'/'} component={Test}/>
                <Route exact path={'/Home'} component={Test}/>
                <Route exact path={'/BlogShare/blogs'} component={BlogShare}/>
                <Route exact path={'/BlogShare/AllBlogs'} component={LeftBlogView}/>
                <Route exact path={'/Login'} component={Login}/>
                <Route exact path={'/cgProfile'} component={CgProfile}/>
                <Route exact path={'/Profile'} component={Profile}/>
                <Route exact path={'/TopBar'} component={Test}/>
                <Route exact path={'/SuaRuaMat'} component={SuaRuaMat}/>
                <Route exact path={'/CTSuaRuaMat'} component={CTSuaRuaMat}/>
                <Route exact path={'/Blog'} component={Blog}/>
                <Route exact path={'/Post1'} component={Post1}/>
                <Route exact path={'/AddImage'} component={AddImage}/>
                <Route exact path={'/BlogShare'} component={BlogShare}/>
                <Route exact path={"/AddBlog"} component={AddBlog}/>
                <Route exact path={'/SignUp'} component={SignUp}/>
                {/*<Route component={()=>(<div>Not Found</div>)}/>*/}
            </switch>
        </div>
    )


}
export default (App);