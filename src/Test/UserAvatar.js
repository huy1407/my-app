import React from "react";
import {deepOrange} from "@material-ui/core/colors";
import PropTypes from 'prop-types'
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
const styles={
    avatar: {
        width: 24,
        height: 24,
    },
    orangeAvatar:{
        width:24,
        height:24,
        color:'#fff',
        backgroundColor:deepOrange[500],

    },
}
function UserAvatar({classes,text,imgUrl}) {
    let avatarName
    if(text){
        avatarName=text.substr(0,1)
    }
    return(
        <div>
            {
                imgUrl?
                    <Avatar className={classes.avatar} src={imgUrl} alt={'user-avatar'}/>
                    :
                    <Avatar className={classes.orangeAvatar}>{avatarName}</Avatar>
            }
        </div>
    )

}
UserAvatar.prototype={
    classes:PropTypes.object.isRequired,
}
export default withStyles(styles)(UserAvatar)