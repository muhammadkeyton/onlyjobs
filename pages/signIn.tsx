//material ui
import Slide from '@mui/material/Slide';

import Paper from '@mui/material/Paper';
import LockIcon from '@mui/icons-material/Lock';


import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


//react icons
import { FcGoogle } from "react-icons/fc";

//custom page css
import getStartedPageCss from "../styles/getStartedPage.module.css";
import { Bbutton } from '../components/reUseableComponents/button';
import Link from 'next/link';

export default function SignIn(){
    return(
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>

             <Container maxWidth="sm" sx={{marginTop:"3rem",marginBottom:"3rem"}}>

                <Paper elevation={4} sx={{padding:"1.5rem 0"}}>
                    <div className={getStartedPageCss.moreAboutYou}>
                        <div className={getStartedPageCss.iconContainer} style={{ margin: "auto"}}><LockIcon color="success"/></div>
                        <h4>sign in with credentials</h4>
                    </div>


                    <Container>
                        
                        <TextField autoComplete="off" fullWidth label="Email Address*" variant="outlined" id="margin-dense" margin="dense" color="success"/>

                        <div className={getStartedPageCss.password}>
                        <TextField autoComplete="off" fullWidth label="Password*" variant="outlined"  id="margin-dense" margin="dense" color="success"/>

                        <IconButton sx={{position:"absolute",top:"15px",right:"10px"}}>
                            <VisibilityOffIcon/>
                        </IconButton>

                        </div>



                        
            

                        <Bbutton xTraStyling="" fullwidth={true} buttonType='contained' color1='#181D31' color2="#181D31" text="Sign In" pad="15px 30px" marg="15px 0"/>

                        
                        <Divider sx={{marginY:3}}>OR</Divider>

                        <div className={getStartedPageCss.socialIcons}>
                            
                            <Fab sx={{backgroundColor:"#fff"}}>
                             <FcGoogle style={{fontSize:"1.5rem"}}/> 
                            </Fab>
                            
                            
                            
                            <Fab sx={{backgroundColor:"#fff"}}>
                            <InstagramIcon sx={{color:"#E4405F"}}/>
                            </Fab>
                            
                            <Fab sx={{backgroundColor:"#fff"}}>
                            <TwitterIcon  sx={{color:"#009EFF"}}/>
                            </Fab>
                        
                        </div>

                    </Container>
                    <Divider/>
                    
                    <Link href="/" style={{ textDecoration: "none",cursor:"default" }}>
                     <Bbutton buttonType='outlined' color1='#fff' color2="#fff" text="Back" pad="10px 30px" marg="15px 0 0 10px" xTraStyling=""/>
                    </Link>
                   

                </Paper>
                <div style={{marginTop:"20px",textAlign:"center"}}>Don't Have an account? <Link href="/getStarted" style={{cursor:"pointer", color:"green"}}>create an account here</Link> </div>
             </Container>

             

        </Slide>
    )
}