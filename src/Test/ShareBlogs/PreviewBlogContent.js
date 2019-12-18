import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Popover from "@material-ui/core/Popover";
import ViewBlogContent from "./ViewBlogContent";
const styles=theme=>(
    {
        root:{
            width:"100%",
            maxWidth:"1200px",
            height:'auto',
            margin:"auto",

        }
    }
)
function PreviewBlogContent(props) {
    const {classes}= props
    const {selPosts,setSelPosts,showSelPosts,setShowSelPosts,setOk}= props
    function handleClose() {
        setShowSelPosts(false)
        setSelPosts(null)
    }
    return(
        <Popover
            className={classes.root}
            id={selPosts.id}
            open={showSelPosts}
            onClose={handleClose}
            >
            <ViewBlogContent
                data={selPosts}
                setSelPosts={setSelPosts}
                setOk={setOk}
                setShowSelPosts={setShowSelPosts}
                />
        </Popover>
    )

}
export default withStyles(styles)(PreviewBlogContent)