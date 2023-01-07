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

    const {firstName,lastName,emailAddress,password,repeatPassword} = signUpData;


    const [showPassword,setShowPassword] = useState(false);

    

    
    const handlePasswordVisibility = ():void =>{
        setShowPassword(!showPassword);
    }

    

    //controls the empty error visibility for each of the fields
    const [fieldsEmptyError,setFieldsEmptyError] = useState({
       "firstName":false,
        "lastName":false,
        "emailAddress":false,
        "password":false,
        "repeatPassword":false,

    })


    //empty input error texts
    const emptyErrors = {
        "firstName":"first name cannot be empty",
        "lastName":"last Name cannot be empty",
        "emailAddress":"email address cannot be empty",
        "password":"you need to choose a password",
        "repeatPassword":"you need to repeat your password"
    }


    //errors for checking emoji and number and other data that is not letters in both first name and last name
    const [nameFieldsError,setNameFieldsError] = useState({
        "firstName":false,
        "lastName":false
    })

    const nameCheckErrors = {
        "firstName":"first name cannot have space or emojis or numbers,please provide a valid name using only letters",
        "lastName":"last name cannot have space or emojis or numbers,please provide a valid name using only letters"
    }


    //password field error

    const [passwordFieldError,setPasswordFieldError] = useState(false)

    const passwordCheckErrors = {
        "matchError":"passwords don't match try again",
        "length":"password length should be atleast 11 chars and must contain atleast 1 uppercase,1 number and 1 symbol"
    }



    


    const handle_SignUpData_Submit = ():void =>{

        //on every submit set the original state to remove errors and redo all checks
        setFieldsEmptyError({
            "firstName":false,
            "lastName":false,
            "emailAddress":false,
            "password":false,
            "repeatPassword":false,
    
        })
       

        //check the specific field that is empty and return an array containing all empty fields and set it's error to true if it is empty
       

        const fieldObject = {firstName:firstName.trim(),lastName:lastName.trim(),emailAddress:emailAddress.trim(),password:password.trim(),repeatPassword:repeatPassword.trim()};



        

        const check_And_Return_Empty_Field = (obj:{

            //The index signature [key: string]: string specifies that the object has properties with string keys and string values. This allows TypeScript to infer the types of the object's properties and avoid error.
            [key:string]:string

        }):string[] => {

            let emptyFields:string[] = [];

            for (const key in obj){

                if(obj[key] === ""){
                    emptyFields.push(key)
                }
                
            }

            return emptyFields;
        }


        const emptyFields = check_And_Return_Empty_Field(fieldObject);

        

        if(emptyFields.length > 0){
            emptyFields.forEach((field)=>{

                setFieldsEmptyError((prev) => 
                
                    ({
                        ...prev,
                        [field]:true,

                    })

                
                
                
                )

            })
        }

        




        //check if password checks are passed,password length atleast 11 chars,1 cap,1 number and 1 symbol and passwords should match
        setPasswordFieldError(false)
        if(fieldObject.password !== fieldObject.repeatPassword){
            setPasswordFieldError(true)
        }


        //check if first name and last name contain numbers or emojis but first check if firstname and lastname are empty 
        const letterRegex = /^[a-zA-Z]+$/;

        
        if(fieldObject.firstName.length > 0 || fieldObject.lastName.length > 0){

            if(letterRegex.test(fieldObject.firstName) && letterRegex.test(fieldObject.lastName)){

                setNameFieldsError({"firstName":false,"lastName":false})
                

            }else if(!letterRegex.test(fieldObject.firstName) && !letterRegex.test(fieldObject.lastName)){

                setNameFieldsError({"firstName":true,"lastName":true})
                

            }else if (!letterRegex.test(fieldObject.firstName)) {

                setNameFieldsError({"firstName":true,"lastName":false})
                

            }else if(!letterRegex.test(fieldObject.lastName)){

                setNameFieldsError({"firstName":false,"lastName":true})
                
            }

        }

        


        

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
                <TextField error={(fieldsEmptyError.firstName || nameFieldsError.firstName )?true:false} helperText={fieldsEmptyError.firstName ? emptyErrors.firstName : `${nameFieldsError.firstName ? nameCheckErrors.firstName:""}`} autoComplete="off" value={signUpData.firstName} onChange={handleSignUpDataState} name="firstName" fullWidth label="First Name*" variant="outlined"  margin="dense" color="success"/>  
                </Grid>

                <Grid item xs={6}>
                <TextField error={(fieldsEmptyError.lastName || nameFieldsError.lastName )?true:false} helperText={fieldsEmptyError.lastName ? emptyErrors.lastName : `${nameFieldsError.lastName ? nameCheckErrors.lastName:""}`} autoComplete="off" value={signUpData.lastName} onChange={handleSignUpDataState} name="lastName" fullWidth label="Last Name*" variant="outlined"  margin="dense" color="success"/>  
                </Grid>
            </Grid>


            <TextField error={fieldsEmptyError.emailAddress} helperText={fieldsEmptyError.emailAddress && emptyErrors.emailAddress} autoComplete="off" value={signUpData.emailAddress} onChange={handleSignUpDataState} name="emailAddress" fullWidth label="Email Address*" variant="outlined"  margin="dense" color="success"/>

            <div className={getStartedPageCss.password}>
             <TextField error={(fieldsEmptyError.password || passwordFieldError)?true:false} helperText={fieldsEmptyError.password?emptyErrors.password:`${passwordFieldError?passwordCheckErrors.matchError:""}`} label="Password*" autoComplete="off" value={signUpData.password} onChange={handleSignUpDataState} type={showPassword?"text":"password"} name="password"  fullWidth variant="outlined"  margin="dense" color="success"/>

             <IconButton onClick={handlePasswordVisibility} sx={{position:"absolute",top:"15px",right:"10px"}}>
               {showPassword?<VisibilityIcon/>:<VisibilityOffIcon/>}
             </IconButton>

            </div>



            <div className={getStartedPageCss.password}>
             <TextField error={(fieldsEmptyError.password || passwordFieldError)?true:false} helperText={fieldsEmptyError.password?emptyErrors.password:`${passwordFieldError?passwordCheckErrors.matchError:""}`} autoComplete="off" name="repeatPassword" value={signUpData.repeatPassword} onChange={handleSignUpDataState} type={showPassword?"text":"password"} fullWidth label="Repeat Password*" variant="outlined"   margin="dense" color="success"/>

             <IconButton onClick={handlePasswordVisibility} sx={{position:"absolute",top:"15px",right:"10px"}}>
                {showPassword?<VisibilityIcon/>:<VisibilityOffIcon/>}
             </IconButton>

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