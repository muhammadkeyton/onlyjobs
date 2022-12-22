//next js
import Link from 'next/link';


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

import { PARAGRAPH_HEXCOLOR,MAINBUTTON_PRE_HOVER, MAINBUTTON_HOVER } from '../components/componentConstants/textColors';

//reusable component
import {Bbutton} from "../components/reUseableComponents/button";

export default function GetStarted(){

    const [role,setRole] = useState(false);

    const [employerRole,setEmployerRole] = useState(false)

    const [workerRole,setWorkerRole] = useState(false)


    const handleEmployerClick = ():void =>{
        setEmployerRole(!employerRole)

        if(role !== true && employerRole !== true){
            setRole(true)
        }else if (role == true && employerRole !== true){
            setRole(true)
        }else{
            setRole(false)
        }

        setWorkerRole(false)
    }

    const handleWorkerClick = ():void =>{
        setWorkerRole(!workerRole)

        if(role !== true && workerRole !== true){
            setRole(true)
        }else if (role == true && workerRole !== true){
            setRole(true)
        }else{
            setRole(false)
        }

        setEmployerRole(false)
       
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
                   <div className={getStartedPageCss.card} onClick={handleWorkerClick}>
                        <h4>Job</h4>

                        <div className={getStartedPageCss.iconContainer}>
                          {workerRole &&<CheckIcon fontSize="large" sx={{color:"#285430"}}/>}
                        </div>


                   </div>

                   <div className={getStartedPageCss.card} onClick={handleEmployerClick}>
                        <h4>Worker</h4>
                        <div className={getStartedPageCss.iconContainer}>
                          {employerRole && <CheckIcon fontSize="large" sx={{color:"#285430"}}/>}
                        </div>
                   </div>


                 
                </div>

                <div className={getStartedPageCss.buttons}>
                   <Link href="/" style={{ textDecoration: "none" }}>
                    <Bbutton buttonType='outlined' color1='#fff' color2="#fff" text="Back" pad="10px 30px" marg="0" xTraStyling="" />
                   </Link>
                    
                   <Bbutton buttonType='contained' color1={MAINBUTTON_PRE_HOVER} color2={MAINBUTTON_HOVER} text="Next" pad="10px 30px" marg="0" xTraStyling={role?"":getStartedPageCss.nextButton} />
                </div>
                
            
            </Paper> 
         

        </Container>
        </Slide>
    )
}