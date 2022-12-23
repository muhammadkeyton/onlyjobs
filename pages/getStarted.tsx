
//react
import {useState} from "react";

//material ui 
import Container from '@mui/material/Container';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import Slide from '@mui/material/Slide';

//custom page css
import getStartedPageCss from "../styles/getStartedPage.module.css";

import { PARAGRAPH_HEXCOLOR,MAINBUTTON_PRE_HOVER} from '../components/componentConstants/textColors';




import ProgressMobileStepper from '../components/getStartedPage/progressStepper';

export default function GetStarted(){

    const [role,setRole] = useState(false);


    const [userInfo,setUserInfo] = useState({
        role:"",

    })

    

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

                <p style={{color:PARAGRAPH_HEXCOLOR,textAlign:"center"}}> What are you Looking For?</p>
                

                <div className={getStartedPageCss.cardAnswer}>
                   <div className={getStartedPageCss.card} onClick={handleWorkerClick} style={userInfo.role === "worker" ? { borderColor:MAINBUTTON_PRE_HOVER,borderStyle:"solid" } : {}}>
                        <h4>Job</h4>

                        <div className={getStartedPageCss.iconContainer}>
                          {(userInfo.role === "worker") &&<CheckIcon fontSize="large" sx={{color:"#285430"}}/>}
                        </div>


                   </div>

                   <div className={getStartedPageCss.card} onClick={handleEmployerClick} style={userInfo.role === "employer" ? { borderColor:MAINBUTTON_PRE_HOVER,borderStyle:"solid" } : {}}>
                        <h4>Worker</h4>
                        <div className={getStartedPageCss.iconContainer}>
                          {(userInfo.role === "employer") && <CheckIcon fontSize="large" sx={{color:"#285430"}}/>}
                        </div>
                   </div>


                 
                </div>

                <ProgressMobileStepper next={role}/>
                
            
            </Paper> 
         

        </Container>
        </Slide>
    )
}