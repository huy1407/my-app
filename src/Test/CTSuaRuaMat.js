import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import {Button,Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import TopBar from "./TopBar";
import Botton from "./Botton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
const style={
    root:{
        maxWidth:'1200px',
        paddingTop:'120px',
        margin:'auto',
    },
    p:{
        color:'red'
    },
};
function Transition(props) {
    return <Slide direction={"down"} {...props}/>;

};
function CTSuaRuaMat(props) {
    const [open,setOpen]=useState(false)
    const{classes}=props;
    return(
        <div>
        <div className={classes.root}>
            <TopBar/>
            <div>
                <Grid style={{border:'1px solid red',height:'180px',padding:'30px'}} container spacing={16}>
                    <Grid item sx={4}>
                        <Typography>
                            Loai sap pham:<span className={classes.p}>SUA RUA MAT</span>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div style={{padding:'10px'}}>
                <img style={{width:'100%'}} src={"/img/2.jpg"}
                     alt=""/>
            </div>
            <div style={{padding:'30px',marginLeft:'490px'}}>
                <div>
                    <Button style={{margin:'50px',backgroundColor:'red'}} variant="outlined"
                            onClick={()=>setOpen(true)}>
                        Mua Ngay
                    </Button>
                </div>
            </div>
        </div>
            <Botton/>
            <Dialog open={open}
                    transitionComponent={Transition}
                    onClose={()=>setOpen(false)}>
                <DialogTitle>
                    {"Xac nhan mua san pham"}
                </DialogTitle>
                <DialogContent>
                    <div style={{width:350,height:100,}}>
                        <Grid container spacing={24}>
                            <Grid item sx={6}>
                                <Typography>
                                    Ten san pham:
                                </Typography>
                                <Typography>
                                    Gia tien:
                                </Typography>
                            </Grid>
                            <Grid item sx={6}>
                                <Typography>
                                    <span className={classes.p}>Sua Rua Mat</span>
                                </Typography>
                                <Typography>
                                    <span className={classes.p}>100,000</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)} color="primary">
                        Xac Nhan
                    </Button>
                    <Button onClick={()=>setOpen(false)} color="primary">
                        Tu Choi
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}
    export default withStyles(style)(CTSuaRuaMat)