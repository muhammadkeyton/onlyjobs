//react hook
import {useState} from "react";
//material ui
import LockIcon from '@mui/icons-material/Lock';

import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

//react icons
import { FcGoogle } from "react-icons/fc";

//reuseable component
import { Bbutton } from '../reUseableComponents/button';


//custom page css
import getStartedPageCss from "../../styles/getStartedPage.module.css";
import { sign } from "crypto";

interface signUpProps{
    handleSignUpDataState:(event:any)=>void;
    signUpData:{
        firstName:string;
        lastName:string;
        emailAddress:string;
        password:string,
        repeatPassword:string,
        role:string
    }
}



export default function SignUp({handleSignUpDataState,signUpData}:signUpProps){
    const [showPassword,setShowPassword] = useState(false);

    
    const handlePasswordVisibility = ():void =>{
        setShowPassword(!showPassword);
    }

    return (
        <>
        <div className={getStartedPageCss.moreAboutYou}>
            <div className={getStartedPageCss.iconContainer} style={{ margin: "auto"}}><LockIcon color="success"/></div>
            <h4>
                {signUpData.role === "worker"? 
                
                `Hey ${signUpData.firstName.length > 0 || signUpData.lastName.length > 0 ? `${signUpData.firstName} ${signUpData.lastName},welcome to onlyJobs` :"worker,We got your job selection,let's now create your account"}` 
                
                :

                `Hey ${signUpData.firstName.length > 0 || signUpData.lastName.length > 0 ? `${signUpData.firstName} ${signUpData.lastName},welcome to onlyJobs` :"there,let's now create your account"}`
                
                }
                
            </h4>
        </div>
        

        <Container>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                <TextField  autoComplete="off" value={signUpData.firstName} onChange={handleSignUpDataState} name="firstName" fullWidth label="First Name*" variant="outlined"  margin="dense" color="success"/>  
                </Grid>

                <Grid item xs={6}>
                <TextField autoComplete="off" value={signUpData.lastName} onChange={handleSignUpDataState} name="lastName" fullWidth label="Last Name*" variant="outlined"  margin="dense" color="success"/>  
                </Grid>
            </Grid>


            <TextField autoComplete="off" value={signUpData.emailAddress} onChange={handleSignUpDataState} name="emailAddress" fullWidth label="Email Address*" variant="outlined"  margin="dense" color="success"/>

            <div className={getStartedPageCss.password}>
             <TextField autoComplete="off" value={signUpData.password} onChange={handleSignUpDataState} type={showPassword?"text":"password"} name="password"  fullWidth label="Password*" variant="outlined"  margin="dense" color="success"/>

             <IconButton onClick={handlePasswordVisibility} sx={{position:"absolute",top:"15px",right:"10px"}}>
               {showPassword?<VisibilityIcon/>:<VisibilityOffIcon/>}
             </IconButton>

            </div>



            <div className={getStartedPageCss.password}>
             <TextField autoComplete="off" name="repeatPassword" value={signUpData.repeatPassword} onChange={handleSignUpDataState} type={showPassword?"text":"password"} fullWidth label="Repeat Password*" variant="outlined"   margin="dense" color="success"/>

             <IconButton onClick={handlePasswordVisibility} sx={{position:"absolute",top:"15px",right:"10px"}}>
                {showPassword?<VisibilityIcon/>:<VisibilityOffIcon/>}
             </IconButton>

            </div>
           
           

            <Bbutton xTraStyling="" fullwidth={true} buttonType='contained' color1='#181D31' color2="#181D31" text="Sign Up" pad="15px 30px" marg="15px 0"/>

            
            <Divider sx={{marginY:3}}>OR</Divider>

            <div className={getStartedPageCss.socialIcons}>

                <Paper elevation={2} className={getStartedPageCss.socialIconsAUth}>

                    <FcGoogle style={{fontSize:"1.5rem",marginRight:"10px"}}/>
                    Sign up with Google

                </Paper>



                <Paper elevation={2}   className={getStartedPageCss.socialIconsAUth} sx={{margin:"15px 0"}}>

                    <FacebookIcon  sx={{color:"#0165E1",fontSize:"1.5rem",marginRight:"10px"}}/>
                    Sign up with Facebook

                </Paper>



                <Paper  elevation={2}  className={getStartedPageCss.socialIconsAUth}>

                
                    <TwitterIcon  sx={{color:"#009EFF",fontSize:"1.5rem",marginRight:"10px"}}/>
                    Sign up with Twitter

                </Paper>
               
            </div>
        </Container>
            
      
       

        </>
    )
}