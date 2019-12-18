import React, {Component} from 'react';
import './Test';
import TopBar from './Test/TopBar';
import {withStyles} from "@material-ui/core/styles";
import Botton from "./Test/Botton";
import  Home from "./Test/Home";



const style = {};

function Test(props) {
    const {classes} = props;
    return (
        <div>
            <TopBar/>
            <Home/>
            <Botton/>

        </div>

    );
}

export default withStyles(style)(Test);