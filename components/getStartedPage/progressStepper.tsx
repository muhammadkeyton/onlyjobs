import {useState} from "react";
import MobileStepper from '@mui/material/MobileStepper';


//next js
import Link from 'next/link';


import getStartedPageCss from "../../styles/getStartedPage.module.css";

//reuseableComponent
import { Bbutton } from "../reUseableComponents/button";


import { MAINBUTTON_PRE_HOVER, MAINBUTTON_HOVER } from "../componentConstants/textColors";


type stepperProp = {
    next:boolean
}


export default function ProgressMobileStepper({next}:stepperProp) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={10
      }
      position="static"
      activeStep={activeStep}
      sx={{justifyContent:"space-around"}}
      nextButton={
        <Bbutton onClick={handleNext} buttonType='contained' color1={MAINBUTTON_PRE_HOVER} color2={MAINBUTTON_HOVER} text="Next" pad="10px 30px" marg="0" xTraStyling={next?"":getStartedPageCss.nextButton} />
      }
      backButton={
        activeStep < 1

        ?(<Link href="/" style={{ textDecoration: "none",cursor:"default" }}>
            <Bbutton buttonType='outlined' color1='#fff' color2="#fff" text="Back" pad="10px 30px" marg="0" xTraStyling="" />
         </Link>)

        :(<Bbutton buttonType='outlined' color1='#fff' color2="#fff" text="Back" pad="10px 30px" marg="0" xTraStyling="" onClick={handleBack}/>)
        
        
      }

      
    />
  );
}