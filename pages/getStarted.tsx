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

import { MAINBUTTON_PRE_HOVER} from '../components/componentConstants/textColors';



//components for this page
import ProgressMobileStepper from '../components/getStartedPage/progressStepper';
import RoleSelection from "../components/getStartedPage/roleSelection";

import SignUp from "../components/getStartedPage/signUp";






//state of this component
import {STATE,reducer} from "../components/getStartedPage/state"
import { ROLE,CURRENT_STEP,UPDATE_USER_ROLE,ADD_GENERATED_WORKER_TAGS,ADD_SELECTED_WORKER_TAGS,REMOVE_SELECTED_WORKER_TAGS,REMOVE_GENERATED_WORKER_TAG,UPDATE_SIGNUP_DATA} from "../components/getStartedPage/DispatchTypeConstants";
import WorkerTagSelection from "../components/getStartedPage/workerTagSelection";





export default function GetStarted(){
    const [state,dispatch] = useReducer(reducer,STATE);

    const workerStepperSteps = 3;
    const employerStepperStep = 2;

    const InformationTobeGathered = [
        "What are you Looking For?",
        "Tell us the type of jobs you would like us to match you with and we will generate you some job tags,you can write a normal sentence"

    ]

    //function updating signup data,start

    const handleSignUpDataState = (event:any):void =>{
        const {name,value} = event.target;
        dispatch({type:UPDATE_SIGNUP_DATA,payload:{name,value}})
    }

    //function updating signup data end

    const handleSteps = (num:number):void =>{

        dispatch({type:CURRENT_STEP,payload:num})
        
    }


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




    const handleEmployerClick = ():void =>{
        
        if(state.role !== true && state.userInfo.role !== "employer"){
          

            dispatch({type:UPDATE_USER_ROLE,payload:"employer"})
            dispatch({type:ROLE,payload:true})
            
        }else if (state.role == true && state.userInfo.role !== "employer"){
           
            dispatch({type:UPDATE_USER_ROLE,payload:"employer"})
        } else if (state.role == true && state.userInfo.role == "employer"){
            
            dispatch({type:UPDATE_USER_ROLE,payload:""})

            dispatch({type:ROLE,payload:false})
           
        }
        
        

        
    }

    const handleWorkerClick = ():void =>{
        
        if(state.role !== true && state.userInfo.role !== "worker"){
           
            dispatch({type:UPDATE_USER_ROLE,payload:"worker"})

            dispatch({type:ROLE,payload:true})
            
        }else if (state.role == true && state.userInfo.role !== "worker"){
            
            dispatch({type:UPDATE_USER_ROLE,payload:"worker"})
        }else if(state.role === true &&  state.userInfo.role === "worker" ){
            

            dispatch({type:UPDATE_USER_ROLE,payload:""})

            dispatch({type:ROLE,payload:false})
            
        }

        
       
    }

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
                
                {(state.currentStep === 1 && state.userInfo.role === "worker") && <WorkerTagSelection removeGeneratedWorkerTag={removeGeneratedWorkerTag} userInfo={state.userInfo} addGeneratedWorkerTags={addGeneratedWorkerTags} updateSelectedWorkerTags={updateSelectedWorkerTags}/>}
                
                {   (state.currentStep === 1 && state.userInfo.role ==="employer" ) && <SignUp handleSignUpDataState={handleSignUpDataState} signUpData={state.userInfo}/> }
                {   (state.currentStep === 2 && state.userInfo.role ==="worker" ) && <SignUp handleSignUpDataState={handleSignUpDataState} signUpData={state.userInfo}/> }

                
                <ProgressMobileStepper next={state.role} steps={state.userInfo.role === "worker"?workerStepperSteps:employerStepperStep} handleSteps={handleSteps}/>

                   
                
            
            </Paper> 

            {(state.currentStep === 1 && state.userInfo.role === "employer") || (state.currentStep === 2 && state.userInfo.role ==="worker")
            
            ? <div style={{marginTop:"20px",textAlign:"center"}}>Already Have an account? <Link href="/signIn" style={{cursor:"pointer", color:"green"}}>Sign in here</Link> </div>

            :null
            
            
            }
        </Container>
        </Slide>
    )
}