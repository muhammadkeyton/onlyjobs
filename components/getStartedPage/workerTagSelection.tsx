import {useState} from "react";
import { Poppins} from '@next/font/google';

import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import getStartedPageCss from "../../styles/getStartedPage.module.css";

//fonts for the tags
import {createTheme,ThemeProvider} from '@mui/material/styles';
const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

const tagtheme = createTheme({
  typography: {
    fontFamily: [
      poppins.style.fontFamily,
    ].join(','),
  },
});

//axios
import * as api from "./axiosGetStartedPage/api";


interface workerTagSelectionProps {
  addGeneratedWorkerTags:(tags:string[])=>void;
  updateSelectedWorkerTags:(tag:string)=>void;
  removeGeneratedWorkerTag:(tag:string)=>void;
  userInfo:{
    role:string;
    generatedWorkerTags:string[];
    selectedWorkerTags:string[];
  };
}


export default function WorkerTagSelection({addGeneratedWorkerTags,userInfo,updateSelectedWorkerTags,removeGeneratedWorkerTag}:workerTagSelectionProps){

    const defaultTags:string[] = ["pressure washing","lawncare","mobile Car Washing","Curbside Cleaning","roof cleaning"];

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

      //if the user enters something resembling a job or something confusing the model,ignore it
      if (data === "\n\n404,200") return;
      
      //removes status 200
      const newData = data.substr(data.indexOf(',') + 1);


      const hasComma = newData.includes(",");
      

      if(hasComma){
        addGeneratedWorkerTags(newData.split(","));
      }else{
        addGeneratedWorkerTags([newData]);
      }
     

      
    };


    const handleDataChange = (e:any)=>{
       setWorkerText(e.target.value)
    }


   
      
    


    return(
        <>
          <div className={getStartedPageCss.tagsContainer}>
          
          {loading && <Box sx={{ display: 'flex',justifyContent:"center" }}><CircularProgress color="success" /></Box>}
          
          <TextField sx={{marginBottom:"15px"}} autoComplete="off"  value={workerText} id="standard-basic" label="match me with jobs like ......." variant="standard" fullWidth onChange={handleDataChange}    InputProps={{
            endAdornment: <InputAdornment position="end"><IconButton onClick={handleSubmitWorkerText}><SendIcon/></IconButton></InputAdornment>,
          }}/>

          
          <ThemeProvider theme={tagtheme}>
              {userInfo.generatedWorkerTags.map((tag,i)=>{
                return (
                  
                    <Chip label={tag} key={i} variant="outlined" color="success" onDelete={():void=>{removeGeneratedWorkerTag(tag)}} />
                  
                
                )
              })}

          </ThemeProvider>
          
          </div>

          <p className={getStartedPageCss.changingText}> or you can choose any of these suggested tags below</p>
          

          <div className={getStartedPageCss.tagsContainer}>
          <ThemeProvider theme={tagtheme}>
            {defaultTags.map((tag,i)=>{
              return <Chip label={tag} key={i} color={`${userInfo.selectedWorkerTags.includes(tag)?"success":"default"}`} variant="outlined" onClick={():void=> updateSelectedWorkerTags(tag)} />
            })}
          </ThemeProvider>
          </div>
          

        </>
          
          
       
            
        
    )
}