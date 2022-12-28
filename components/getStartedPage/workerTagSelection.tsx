import {useState} from "react";

import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import getStartedPageCss from "../../styles/getStartedPage.module.css";


//axios
import * as api from "./axiosGetStartedPage/api";


interface workerTagSelectionProps {
  updateWorkerTags:(tags:string[])=>void;
  workerTags:string[];
}


export default function WorkerTagSelection({updateWorkerTags,workerTags}:workerTagSelectionProps){

    const [workerText,setWorkerText] = useState("");

    const [loading,setLoading] = useState(false);

   
    const worker = `using named entity recognition extract the type of jobs mentioned in this text '${workerText.length < 1?null:workerText}' and return as a string,if the text has no jobs or if the text is like this "" return me a string with number 404,if the text has jobs include number 200 in the string separating it with a comma `
    

   
    const handleSubmitWorkerText = async () => {


      if (workerText.length < 1) return;
      setWorkerText("")
      setLoading(true)

      const response = await api.generateWorkerTags(worker)

      const data = response.data.text;
      setLoading(false)


      //if response is 404,meaning openai model couldn't give us a string we could use as tags
      if(data === "\n\n404" ) return;
      
      //removes status 200
      const newData = data.substr(data.indexOf(',') + 1);


      const hasComma = newData.includes(",");
      

      if(hasComma){
        updateWorkerTags(newData.split(","));
      }else{
        updateWorkerTags([newData]);
      }
     

      
    };


    const handleDataChange = (e:any)=>{
       setWorkerText(e.target.value)
    }


    return(
       
          <div className={getStartedPageCss.tagsContainer}>
          
          {loading && <Box sx={{ display: 'flex',justifyContent:"center" }}><CircularProgress /></Box>}
          <TextField autoComplete="off"  value={workerText} id="standard-basic" label="match me with jobs like ......." variant="standard" fullWidth onChange={handleDataChange}    InputProps={{
            endAdornment: <InputAdornment position="end"><IconButton onClick={handleSubmitWorkerText}><SendIcon/></IconButton></InputAdornment>,
          }}/>

          

          {workerTags.map((tag,i)=>{
            return <Chip label={tag} key={i} variant="outlined" onClick={():void =>{}} />
          })}
          
          </div>




          
          
       
            
        
    )
}