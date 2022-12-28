
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




//state of this component
import {STATE,reducer} from "../components/getStartedPage/state"
import { ROLE,CURRENT_STEP,UPDATE_USER_ROLE,UPDATE_WORKER_TAGS } from "../components/getStartedPage/DispatchTypeConstants";
import WorkerTagSelection from "../components/getStartedPage/workerTagSelection";




export default function GetStarted(){
    const [state,dispatch] = useReducer(reducer,STATE);

    const InformationTobeGathered = [
        "What are you Looking For?",
        "Tell us the type of jobs you would like us to match you with"

    ]

    
   
    const handleSteps = (num:number):void =>{

        dispatch({type:CURRENT_STEP,payload:num})
        
    }


    const updateWorkerTags = (tags:string[]):void =>{
        dispatch({type:UPDATE_WORKER_TAGS,payload:tags})

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

            <Paper elevation={4} sx={{padding:"4rem 0"}}>
                
                <div className={getStartedPageCss.moreAboutYou}>
                    <PsychologyIcon sx={{ fontSize: 60,color:MAINBUTTON_PRE_HOVER }}/>
                    <h2>Tell us about yourself</h2>
                </div>

                <p className={getStartedPageCss.changingText}>

                    {   
                    
                    (state.currentStep === 0)?InformationTobeGathered[state.currentStep]:null 
                    
                    }

                    
                    {   
                    
                    (state.currentStep === 1 && state.userInfo.role ==="worker" ) && InformationTobeGathered[state.currentStep]
                    
                    }


                    {   
                    
                    (state.currentStep === 1 && state.userInfo.role ==="employer" ) && "employer signup(under development)" 
                    
                    }


                   

                    
                </p>
                

                
                {(state.currentStep === 0) && <RoleSelection userInfo={state.userInfo} handleEmployerClick={handleEmployerClick} handleWorkerClick={handleWorkerClick}/>}
                
                {(state.currentStep === 1 && state.userInfo.role === "worker") && <WorkerTagSelection workerTags={state.userInfo.workerTags} updateWorkerTags={updateWorkerTags}/>}
                
                <ProgressMobileStepper next={state.role} steps={InformationTobeGathered.length} handleSteps={handleSteps}/>

                   
                
            
            </Paper> 
         

        </Container>
        </Slide>
    )
}