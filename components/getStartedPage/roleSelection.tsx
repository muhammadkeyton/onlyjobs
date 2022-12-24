
import CheckIcon from '@mui/icons-material/Check';

import getStartedPageCss from "../../styles/getStartedPage.module.css";

import { MAINBUTTON_PRE_HOVER } from '../componentConstants/textColors';

interface roleProps{
    userInfo:{
        role:string;
    };
    handleWorkerClick:()=>void;
    handleEmployerClick:()=>void;

}

export default function RoleSelection({handleWorkerClick,userInfo,handleEmployerClick}:roleProps){
    return(
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
    )
}