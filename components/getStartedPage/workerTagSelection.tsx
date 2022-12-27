import {useState} from "react";

import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import getStartedPageCss from "../../styles/getStartedPage.module.css";


export default function WorkerTagSelection(){
    const [workerText,setWorkerText] = useState("");

    const [loading,setLoading] = useState(false);

    const [gptResult,setGptResult] = useState<string[]>([]);
    const worker = `using named entity recognition extract the type of jobs mentioned in this text '${workerText.length < 1?null:workerText}' and return as a string,if the text has no jobs or if the text is like this "" return me a string with number 404,if the text has jobs include number 200 in the string separating it with a comma `
    const handleSubmitWorkerText = async () => {


      if (workerText.length < 1) return;
      setWorkerText("")
      setLoading(true)
      const response = await fetch("/api/getStartedPage/workerJobTags",{
        method:"POST",
        body:JSON.stringify({worker}),
        headers:{'Content-Type':'application/json'}

      })

      const data:{ text: string } = await response.json();
      
      if (data.text.includes(',')) {
        setGptResult(data.text.split(','))

      }else{
        setGptResult([data.text])
      }
      console.log(gptResult)

      setLoading(false)
    };


    const handleDataChange = (e:any)=>{
       setWorkerText(e.target.value)
    }


    return(
        <>
          <div className={getStartedPageCss.tagsContainer}>
          
          {loading && <Box sx={{ display: 'flex',justifyContent:"center" }}><CircularProgress /></Box>}
          <TextField value={workerText} id="standard-basic" label="match me with jobs like ......." variant="standard" fullWidth onChange={handleDataChange}    InputProps={{
            endAdornment: <InputAdornment position="end"><IconButton onClick={handleSubmitWorkerText}><SendIcon/></IconButton></InputAdornment>,
          }}/>

          
            {gptResult.length > 1 && 
            

             gptResult.map((result,i)=>{

              if(result === "\n\n404" || result === "\n\n200"){
                return null;
              }
                return <Chip sx={{marginTop:"10px"}} key={i} label={result} variant="outlined" onClick={():void=>{}} />
            
              
             })
            
            
            
            
            }
          
          </div>


          
          
        </>
            
        
    )
}