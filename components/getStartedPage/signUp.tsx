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


interface signUpProps{
    handleSignUpDataState:(event:any)=>void;
    checkEmptyFieldsPassed:(obj:{[key:string]:string}) => boolean;
    passwordCheckPassed:(obj:{[key:string]:string}) => boolean;
    emailCheckPassed:(email:string) => boolean;
    checkNamePassed:(obj:{[key:string]:string}) => boolean;
    signUpData:{
        firstName:string;
        lastName:string;
        emailAddress:string;
        password:string,
        repeatPassword:string,
        role:string
    };
    signUpFields:{
        [key:string]:{
            errorStatus:boolean;
            errorMessage:string;
        }
    };
}



export default function SignUp({handleSignUpDataState,signUpData,checkEmptyFieldsPassed,signUpFields,passwordCheckPassed,checkNamePassed,emailCheckPassed}:signUpProps){


    const [showPassword,setShowPassword] = useState(false);

    

    
    const handlePasswordVisibility = ():void =>{
        setShowPassword(!showPassword);
    }

    

    const handle_SignUpData_Submit = ():void =>{
        
        //trimmed fields data,removes spaces
        const fieldObject = {firstName:signUpData.firstName.trim(),lastName:signUpData.lastName.trim(),emailAddress:signUpData.emailAddress.trim(),password:signUpData.password.trim(),repeatPassword:signUpData.repeatPassword.trim()};

        //check the specific field that is empty and return an array containing all empty fields and set it's error to true if it is empty
        if(!checkEmptyFieldsPassed(fieldObject)) return;
        

        //check if name is not letter
        if(!checkNamePassed(fieldObject)) return;


        //check email address
        if(!emailCheckPassed(fieldObject.emailAddress)) return;
        
        //check if these fields contain emojis
        if(!passwordCheckPassed({password:fieldObject.password,repeatPassword:fieldObject.repeatPassword})) return;

    
        

        
        

    }

    return (
        <>
        
        <div className={getStartedPageCss.moreAboutYou}>
            <div className={getStartedPageCss.iconContainer} style={{ margin: "auto"}}><LockIcon color="success"/></div>
            <h4>
                {signUpData.role === "worker"? 
                
                `Hey ${signUpData.firstName.length > 0 || signUpData.lastName.length > 0 ? `${signUpData.firstName.substring(0, 15)} ${signUpData.lastName.substring(0, 15)},welcome to onlyJobs` :"worker,We got your job selection,let's now create your account"}` 
                
                :

                `Hey ${signUpData.firstName.length > 0 || signUpData.lastName.length > 0 ? `${signUpData.firstName.substring(0, 15)} ${signUpData.lastName.substring(0, 15)},welcome to onlyJobs` :"there,let's now create your account"}`
                
                }
                
            </h4>
        </div>
        

        <Container>
            <div id="signUpContainer">
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                    <TextField error={signUpFields.firstName.errorStatus} helperText={signUpFields.firstName.errorMessage} autoComplete="off" value={signUpData.firstName} onChange={handleSignUpDataState} name="firstName" id="firstName" fullWidth label="First Name*" variant="outlined"  margin="dense" color="success"/>  
                    </Grid>

                    <Grid item xs={6}>
                    <TextField error={signUpFields.lastName.errorStatus} helperText={signUpFields.lastName.errorMessage} autoComplete="off" value={signUpData.lastName} onChange={handleSignUpDataState} name="lastName" id="lastName" fullWidth label="Last Name*" variant="outlined"  margin="dense" color="success"/>  
                    </Grid>
                </Grid>


                <TextField error={signUpFields.emailAddress.errorStatus} helperText={signUpFields.emailAddress.errorMessage} autoComplete="off" value={signUpData.emailAddress} onChange={handleSignUpDataState} name="emailAddress" id="emailAddress" fullWidth label="Email Address*" variant="outlined"  margin="dense" color="success"/>

                <div className={getStartedPageCss.password}>
                <TextField  error={signUpFields.password.errorStatus} helperText={signUpFields.password.errorMessage.length > 0?signUpFields.password.errorMessage:"we recommend you create a password that is atleast 8 characters long and has a combination of upperCase letters & numbers & symbols.this will make your password more secure." } label="Password*" autoComplete="off" value={signUpData.password} onChange={handleSignUpDataState} type={showPassword?"text":"password"} name="password" id="password" fullWidth variant="outlined"  margin="dense" color="success"/>

                <IconButton onClick={handlePasswordVisibility} sx={{position:"absolute",top:"15px",right:"10px"}}>
                {showPassword?<VisibilityIcon/>:<VisibilityOffIcon/>}
                </IconButton>

                </div>



                <div className={getStartedPageCss.password}>
                <TextField error={signUpFields.repeatPassword.errorStatus} helperText={signUpFields.repeatPassword.errorMessage} autoComplete="off" name="repeatPassword" id="repeatPassword" value={signUpData.repeatPassword} onChange={handleSignUpDataState} type={showPassword?"text":"password"}  fullWidth label="Repeat Password*" variant="outlined"   margin="dense" color="success"/>

                <IconButton onClick={handlePasswordVisibility} sx={{position:"absolute",top:"15px",right:"10px"}}>
                    {showPassword?<VisibilityIcon/>:<VisibilityOffIcon/>}
                </IconButton>

                </div>
            </div>
           
           

            <Bbutton onClick={handle_SignUpData_Submit} xTraStyling="" fullwidth={true} buttonType='contained' color1='#181D31' color2="#181D31" text="Sign Up" pad="15px 30px" marg="15px 0"/>

            
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