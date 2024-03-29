import {useState} from "react";
import MobileStepper from '@mui/material/MobileStepper';


//next js
import Link from 'next/link';


import getStartedPageCss from "../../styles/getStartedPage.module.css";

//reuseableComponent
import { Bbutton } from "../reUseableComponents/button";


import { MAINBUTTON_PRE_HOVER, MAINBUTTON_HOVER } from "../componentConstants/greenButtonColors";



interface stepperProp {
    next:boolean;
    steps:number;
    handleSteps:(num: number)=> void;
    handleNextStep:(proceed:boolean) => void;
}


export default function ProgressMobileStepper({next,steps,handleSteps,handleNextStep}:stepperProp) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    handleSteps(activeStep + 1)


    handleNextStep(false)


    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    handleSteps(activeStep - 1)

    handleNextStep(true)

    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={steps}
      position="static"
      activeStep={activeStep}
      sx={{justifyContent:"space-around",'& .MuiLinearProgress-bar':{backgroundColor:MAINBUTTON_PRE_HOVER}}}
      nextButton={
        <Bbutton disabled={activeStep === steps-1} onClick={handleNext} buttonType='contained' color1={MAINBUTTON_PRE_HOVER} color2={MAINBUTTON_HOVER} text={activeStep === steps-1?"":"next"} pad="10px 30px" marg="0" xTraStyling={next?" ":getStartedPageCss.nextButton} />
      }
      backButton={
        activeStep < 1

        ?(<Link href="/" style={{ textDecoration: "none",cursor:"default" }}>
            <Bbutton buttonType='outlined' color1='#fff' color2="#fff" text="home" pad="10px 30px" marg="0" xTraStyling="" />
         </Link>)

        :(<Bbutton buttonType='outlined' color1='#fff' color2="#fff" text="previous" pad="10px 30px" marg="0" xTraStyling="" onClick={handleBack}/>)
        
        
      }
      
    />
  );
}