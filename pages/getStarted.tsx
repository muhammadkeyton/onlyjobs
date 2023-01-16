//next js
import Link from 'next/link'
//react
import {useReducer} from "react";

//material ui 
import Container from '@mui/material/Container';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';

//custom page css
import getStartedPageCss from "../styles/getStartedPage.module.css";

import { MAINBUTTON_PRE_HOVER} from '../components/componentConstants/greenButtonColors';



//components for this page
import ProgressMobileStepper from '../components/getStartedPage/progressStepper';
import RoleSelection from "../components/getStartedPage/roleSelection";

import SignUp from "../components/getStartedPage/signUp";



//emoji detection in signUp data
import emojiRegex from "emoji-regex";

//email validator
import * as EmailValidator from 'email-validator';


//scroll to errors
import scrollTo  from 'scroll-to-element';








//state of this component
import {STATE,reducer} from "../components/getStartedPage/state"
import {NEXTSTEP,CURRENT_STEP,UPDATE_USER_ROLE,ADD_GENERATED_WORKER_TAGS,ADD_SELECTED_WORKER_TAGS,REMOVE_SELECTED_WORKER_TAGS,REMOVE_GENERATED_WORKER_TAG,UPDATE_SIGNUP_DATA,FIELDS_CHECK} from "../components/getStartedPage/DispatchTypeConstants";
import WorkerTagSelection from "../components/getStartedPage/workerTagSelection";





export default function GetStarted(){
    const [state,dispatch] = useReducer(reducer,STATE);

    const workerStepperSteps = 3;
    const employerStepperStep = 2;

    const InformationTobeGathered = [
        "What are you Looking For?",
        "Tell us the type of jobs you would like us to match you with and we will generate you some job tags,you can write a normal sentence"

    ]

    //------------------------------------------------function updating signup data,start-----------------------------------------------
     

         //updating signup data in state
    const handleSignUpDataState = (event:any):void =>{
        const {name,value} = event.target;
        dispatch({type:UPDATE_SIGNUP_DATA,payload:{name,value}})
    }


        //updating signUp fields state,this is for showing error after the checks
    
    const checkEmptyFieldsPassed = (obj:{

        //The index signature [key: string]: string specifies that the object has properties with string keys and string values. This allows TypeScript to infer the types of the object's properties and avoid error.
        [key:string]:string

    }):boolean => {
        let allFields:string[] = ["firstName","lastName","emailAddress","password","repeatPassword"];
        let emptyFields:string[] = [];

        for (const key in obj){

            if(obj[key] === ""){
                emptyFields.push(key)

            }
            
        }


        //if a field is not in empty fields,dispatch the default state to remove any error status
        let fieldsNotEmpty = allFields.filter(field => !emptyFields.includes(field));

        if(fieldsNotEmpty.length > 0){
            fieldsNotEmpty.map((field)=>{
                dispatch({type:FIELDS_CHECK,payload:{ [field]:{errorStatus:false, errorMessage:""} } });
            })
        }

        

        
        if (emptyFields.length > 0){
            
            scrollTo("#signUpContainer")
            emptyFields.forEach( (emptyField)=> dispatch(

                {type:FIELDS_CHECK,payload:{ [emptyField]:{errorStatus:true, errorMessage:`${emptyField} is required!`} } }
                
                
                
            ));
           
            return false;
        }
        
        return true;
        
    }



    //password field check
    const regex = emojiRegex();
    const passwordCheckPassed = (obj:{[key:string]:string}):boolean =>{
        const {password,repeatPassword} = obj;
        let fieldsWithEmojis:string[] = [];
        let kaomojiRegex = /\(.*\)/g;

        for (const key in obj){
            let fieldData = obj[key];
            let match = fieldData.match(regex)
            let kaomoji = fieldData.match(kaomojiRegex);
            
            if(match !== null){
                fieldsWithEmojis.push(key)
            }

            if(kaomoji !== null){
                fieldsWithEmojis.push(key)
            }


        }


        if(fieldsWithEmojis.length > 0){
            scrollTo("#password")
            fieldsWithEmojis.forEach((emojiField)=>{ 

               dispatch({type:FIELDS_CHECK,payload:{ [emojiField]:{errorStatus:true, errorMessage:`${emojiField} has an emoji or kaomoji,please remove it!`} } })
               
            })

            return false;

            

        }


        //check passwords

        if (password.length > 0 && repeatPassword.length > 0){
            
            //regex checking for minimum 8 chars
            let passwordRegex = /^.{8,}$/;



            //check password match
            if (password !== repeatPassword){

                scrollTo("#password")
                dispatch({type:FIELDS_CHECK,payload:{ password:{errorStatus:true, errorMessage:`passwords don't match,try again`} } })
                dispatch({type:FIELDS_CHECK,payload:{ repeatPassword:{errorStatus:true, errorMessage:`passwords don't match,try again`} } })  
                return false
            } 

             //check password length and upper case and number and symbol
             if (!passwordRegex.test(password)){

                scrollTo("#password")
                dispatch({type:FIELDS_CHECK,payload:{ password:{errorStatus:true, errorMessage: `your password length is ${password.length} characters,passwords should be atleast 8 characters long` } } })
                dispatch({type:FIELDS_CHECK,payload:{ repeatPassword:{errorStatus:true, errorMessage: `your password length is ${password.length} characters,passwords should be atleast 8 characters long` } } })
                
                return false  
            }

            
            
           

            //check password length to avoid denial of service attack
            if(password.length > 100){

                scrollTo("#password")
                dispatch({type:FIELDS_CHECK,payload:{ password:{errorStatus:true, errorMessage:`this password is very long,we only allow a maximum number of 100 characters,your password is ${password.length} characters`} } })
                dispatch({type:FIELDS_CHECK,payload:{ repeatPassword:{errorStatus:true, errorMessage:`this password is very long,we only allow a maximum number of 100 characters,your password is ${password.length} characters`} } }) 
                return false;
            }
        }

        return true;


    }


    //first name and last name check to only have letters

    const checkNamePassed = (obj:{[key:string]:string}):boolean =>{

        const {firstName,lastName} = obj;
        const letterRegex = /^[A-Za-z]+$/;
        const firstNameAccepted = letterRegex.test(firstName)
        const lastNameAccepted = letterRegex.test(lastName)

        if(!firstNameAccepted && firstName.length > 0){
            scrollTo("#firstName")
            dispatch({type:FIELDS_CHECK,payload:{ firstName:{errorStatus:true, errorMessage:`this first name is not acceptable,please remove any spaces or symbols and make sure to use letters only`} } })
        }else if(firstNameAccepted && firstName.length > 0){
            dispatch({type:FIELDS_CHECK,payload:{ firstName:{errorStatus:false, errorMessage:""} } }) 
        }

        if(!lastNameAccepted && lastName.length > 0){
            scrollTo("#lastName")
            dispatch({type:FIELDS_CHECK,payload:{ lastName:{errorStatus:true, errorMessage:`this last name is not acceptable,please remove any spaces or symbols and make sure to use letters only`} } }) 
        }else if(lastNameAccepted && lastName.length > 0){
            dispatch({type:FIELDS_CHECK,payload:{ lastName:{errorStatus:false, errorMessage:""} } })
        }


        if (firstNameAccepted && lastNameAccepted && lastName.length > 0 && firstName.length > 0){
            return true
        }else{
            scrollTo("#signUpContainer")
            return false
        }
    }


    //email check

    const emailCheckPassed = (email:string):boolean =>{
        let email_is_ok = EmailValidator.validate(email);

        if(!email_is_ok) {
            scrollTo("#emailAddress")
            dispatch({type:FIELDS_CHECK,payload:{ emailAddress:{errorStatus:true, errorMessage:"hmmm🤔,something is wrong with this email,please provide a valid email address"} } })
            return false
        };

        return true
    }

    

    //--------------------------------------------------------function updating signup data end------------------------------------------

    


    //-------------------------------------------handling the steps and next button visibility,start--------------------------------------
    const handleNextStepButton = (proceed:boolean):void =>{
        dispatch({type:NEXTSTEP,payload:proceed})
    }

    const handleSteps = (num:number):void =>{

        dispatch({type:CURRENT_STEP,payload:num})
        
    }
    //-----------------------------------------------handling the steps and next button visibility,end----------------------------------




    //----------------------------------------handling worker tags,start--------------------------------------------------------------------
    const addGeneratedWorkerTags = (tags:string[]):void =>{
        dispatch({type:ADD_GENERATED_WORKER_TAGS,payload:tags})

    }

    const removeGeneratedWorkerTag = (tag:string):void =>{
        dispatch({type:REMOVE_GENERATED_WORKER_TAG,payload:tag})
    }


    const updateSelectedWorkerTags = (tag:string):void =>{
        //checking if state already has this tag so that it is not added more than once
        if(state.userInfo.selectedWorkerTags.includes(tag)){
            dispatch({type:REMOVE_SELECTED_WORKER_TAGS,payload:tag})
        }else{
            dispatch({type:ADD_SELECTED_WORKER_TAGS,payload:tag})
        }

        
    }
    //---------------------------------------------------------handling worker tags,end---------------------------------------------------------



    //------------------------------------------------------------handle role selection,start-------------------------------------------
    const handleEmployerClick = ():void =>{
        
        if(state.nextStep !== true && state.userInfo.role !== "employer"){
          

            dispatch({type:UPDATE_USER_ROLE,payload:"employer"})
            dispatch({type:NEXTSTEP,payload:true})
            
        }else if (state.nextStep === true && state.userInfo.role !== "employer"){
           
            dispatch({type:UPDATE_USER_ROLE,payload:"employer"})
        } else if (state.nextStep === true && state.userInfo.role === "employer"){
            
            dispatch({type:UPDATE_USER_ROLE,payload:""})

            dispatch({type:NEXTSTEP,payload:false})
           
        }
        
        

        
    }

    const handleWorkerClick = ():void =>{
        
        if(state.nextStep !== true && state.userInfo.role !== "worker"){
           
            dispatch({type:UPDATE_USER_ROLE,payload:"worker"})

            dispatch({type:NEXTSTEP,payload:true})
            
        }else if (state.nextStep === true && state.userInfo.role !== "worker"){
            
            dispatch({type:UPDATE_USER_ROLE,payload:"worker"})
        }else if(state.nextStep === true &&  state.userInfo.role === "worker" ){
            

            dispatch({type:UPDATE_USER_ROLE,payload:""})

            dispatch({type:NEXTSTEP,payload:false})
            
        }

        
       
    }

    //------------------------------------------------------handle role selection,end--------------------------------------------------

   
    

    return(
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Container maxWidth="sm" sx={{marginTop:"3rem",marginBottom:"3rem"}}>

            <Paper elevation={4} sx={{padding:"1.5rem 0"}}>
                
               
                
            {(state.userInfo.role === "worker" && state.currentStep === 2) || (state.userInfo.role === "employer" && state.currentStep === 1)?
            
            
            null:
            
            <div className={getStartedPageCss.moreAboutYou}>
                <PsychologyIcon sx={{ fontSize: 60,color:MAINBUTTON_PRE_HOVER }}/>
                <h2>Tell us about yourself</h2>
            </div>

            }

                

                <p className={getStartedPageCss.changingText}>

                    {   
                    
                    (state.currentStep === 0)?InformationTobeGathered[state.currentStep]:null 
                    
                    }

                    
                    {   
                    
                    (state.currentStep === 1 && state.userInfo.role ==="worker" ) && InformationTobeGathered[state.currentStep]
                    
                    }


                   


                   

                    
                </p>
                

                
                {(state.currentStep === 0) && <RoleSelection userInfo={state.userInfo} handleEmployerClick={handleEmployerClick} handleWorkerClick={handleWorkerClick}/>}
                
                {(state.currentStep === 1 && state.userInfo.role === "worker") && <WorkerTagSelection handleNextStep={handleNextStepButton} removeGeneratedWorkerTag={removeGeneratedWorkerTag} userInfo={state.userInfo} addGeneratedWorkerTags={addGeneratedWorkerTags} updateSelectedWorkerTags={updateSelectedWorkerTags}/>}
                
                {   (state.currentStep === 1 && state.userInfo.role ==="employer" ) && <SignUp checkEmptyFieldsPassed={checkEmptyFieldsPassed}  passwordCheckPassed={passwordCheckPassed} checkNamePassed={checkNamePassed} emailCheckPassed={emailCheckPassed} handleSignUpDataState={handleSignUpDataState} signUpData={state.userInfo} signUpFields={state.fields}/> }
                {   (state.currentStep === 2 && state.userInfo.role ==="worker" ) && <SignUp checkEmptyFieldsPassed={checkEmptyFieldsPassed} passwordCheckPassed={passwordCheckPassed} checkNamePassed={checkNamePassed} emailCheckPassed={emailCheckPassed} handleSignUpDataState={handleSignUpDataState} signUpData={state.userInfo} signUpFields={state.fields}/> }

                
                <ProgressMobileStepper next={state.nextStep} handleNextStep={handleNextStepButton} steps={state.userInfo.role === "worker"?workerStepperSteps:employerStepperStep} handleSteps={handleSteps}/>

                   
                
            
            </Paper> 

            {(state.currentStep === 1 && state.userInfo.role === "employer") || (state.currentStep === 2 && state.userInfo.role ==="worker")
            
            ? <div style={{marginTop:"20px",textAlign:"center"}}>Already Have an account? <Link href="/signIn" style={{cursor:"pointer", color:"green"}}>Sign in here</Link> </div>

            :null
            
            
            }
        </Container>
        </Slide>
    )
}