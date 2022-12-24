
//react
import {useState} from "react";

//material ui 
import Container from '@mui/material/Container';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';

//custom page css
import getStartedPageCss from "../styles/getStartedPage.module.css";

import { PARAGRAPH_HEXCOLOR,MAINBUTTON_PRE_HOVER} from '../components/componentConstants/textColors';



//components for this page
import ProgressMobileStepper from '../components/getStartedPage/progressStepper';
import RoleSelection from "../components/getStartedPage/roleSelection";

export default function GetStarted(){

    const [currentStep,setCurrentStep] = useState(0);

    const [role,setRole] = useState(false);


    const [userInfo,setUserInfo] = useState({
        role:"",

    })
    
    const InformationTobeGathered = [
        "What are you Looking For?",
        "What Type of Jobs would you want us to match you with?"

    ]

    

   
    const handleSteps = (num:number):void =>{
        console.log(num)
        setCurrentStep(num)
    }



    const handleEmployerClick = ():void =>{
        
        if(role !== true && userInfo.role !== "employer"){
            setUserInfo({...userInfo,role:"employer"})
            setRole(true)
        }else if (role == true && userInfo.role !== "employer"){
            setUserInfo({...userInfo,role:"employer"})
        } else if (role == true && userInfo.role == "employer"){
            setUserInfo({...userInfo,role:""})
            setRole(false)
        }
        
        

        
    }

    const handleWorkerClick = ():void =>{
        
        if(role !== true && userInfo.role !== "worker"){
            setUserInfo({...userInfo,role:"worker"})
            setRole(true)
        }else if (role == true && userInfo.role !== "worker"){
            setUserInfo({...userInfo,role:"worker"})
        }else if(role === true &&  userInfo.role === "worker" ){
            setUserInfo({...userInfo,role:""})
            setRole(false)
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

                <p style={{color:PARAGRAPH_HEXCOLOR,textAlign:"center"}}>

                    {   
                    
                    (currentStep === 0)?InformationTobeGathered[currentStep]:null 
                    
                    }

                    
                    {   
                    
                    (currentStep === 1 && userInfo.role ==="worker" ) && InformationTobeGathered[currentStep]
                    
                    }


                    {   
                    
                    (currentStep === 1 && userInfo.role ==="employer" ) && "employer signup(under development)" 
                    
                    }


                   

                    
                </p>
                

                
                {(currentStep === 0) && <RoleSelection userInfo={userInfo} handleEmployerClick={handleEmployerClick} handleWorkerClick={handleWorkerClick}/>}
                
                
                <ProgressMobileStepper next={role} steps={InformationTobeGathered.length + 1} handleSteps={handleSteps}/>

                   
                
            
            </Paper> 
         

        </Container>
        </Slide>
    )
}