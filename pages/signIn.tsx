//react
import {useReducer,useState} from "react";

//next js
import Link from 'next/link'


//material ui
import Slide from '@mui/material/Slide';

import Paper from '@mui/material/Paper';
import LockIcon from '@mui/icons-material/Lock';


import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';


import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Checkbox from '@mui/material/Checkbox';


//react icons
import { FcGoogle } from "react-icons/fc";

//custom page css
import getStartedPageCss from "../styles/getStartedPage.module.css";
import { Bbutton } from '../components/reUseableComponents/button';



//state for sign in page
import { UPDATE_SIGNIN_DATA } from "../components/signInPage/dispatchTypeConstants";
import {STATE,reducer} from "../components/signInPage/state"

export default function SignIn(){
    const [state,dispatch] = useReducer(reducer,STATE);
    const [showPassword,setShowPassword] = useState(false);


    const handlePasswordVisibility = ():void =>{
        setShowPassword(!showPassword)
    }


    const handleUpdateSignInData = (event:any):void =>{
        const {name,value} = event.target;

        dispatch({type:UPDATE_SIGNIN_DATA,payload:{name,value}})
    }

    return(
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>

             <Container maxWidth="sm" sx={{marginTop:"3rem",marginBottom:"3rem"}}>

                <Paper elevation={4} sx={{padding:"1.5rem 0"}}>
                    <div className={getStartedPageCss.moreAboutYou}>
                        <div className={getStartedPageCss.iconContainer} style={{ margin: "auto"}}><LockIcon color="success"/></div>
                        <h4>sign in with credentials</h4>
                    </div>


                    <Container>
                        
                        <TextField name="emailAddress" value={state.emailAddress} onChange={handleUpdateSignInData} autoComplete="off" fullWidth label="Email Address*" variant="outlined" margin="dense" color="success"/>

                        <div className={getStartedPageCss.password}>
                        <TextField type={showPassword?"text":"password"} name="password" value={state.password} onChange={handleUpdateSignInData} autoComplete="off" fullWidth label="Password*" variant="outlined"  margin="dense" color="success"/>

                        <IconButton onClick={handlePasswordVisibility} sx={{position:"absolute",top:"15px",right:"10px"}}>
                            {showPassword?<VisibilityIcon/>:<VisibilityOffIcon/>}
                        </IconButton>

                        </div>



                        
                        <Link href="/signIn" style={{cursor:"pointer", color:"green"}}>forgot password?</Link>
                        <Bbutton xTraStyling="" fullwidth={true} buttonType='contained' color1='#181D31' color2="#181D31" text="Sign In" pad="15px 30px" marg="15px 0"/>
                        

                        <div className={getStartedPageCss.signInRememberForgot}>

                        
                            <div className={getStartedPageCss.remember}>
                                <Checkbox color="success"/>
                                <p>Remember me for 7 days</p>
                            </div>

                            
                            

                        </div>


                        <Divider sx={{marginY:3}}>OR</Divider>

                        <div className={getStartedPageCss.socialIcons}>
                            
                            
                            <Paper elevation={2} sx={{display:"flex",alignItems:"center",padding:"10px 15px",cursor:"pointer"}}>

                             <FcGoogle style={{fontSize:"1.5rem",marginRight:"10px"}}/>
                              Continue with Google

                            </Paper>
                             


                            <Paper  elevation={2} sx={{display:"flex",alignItems:"center",padding:"10px 15px",margin:"15px 0",cursor:"pointer"}}>

                              <FacebookIcon  sx={{color:"#0165E1",fontSize:"1.5rem",marginRight:"10px"}}/>
                              Continue with Facebook

                            </Paper>
                            
                            
                            
                            <Paper  elevation={2} sx={{display:"flex",alignItems:"center",padding:"10px 15px",margin:"15px 0",cursor:"pointer"}}>

                              
                              <TwitterIcon  sx={{color:"#009EFF",fontSize:"1.5rem",marginRight:"10px"}}/>
                              Continue with Twitter

                            </Paper>
                            
                            
                            
                            
                        
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