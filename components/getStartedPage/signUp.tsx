
//material ui
import LockIcon from '@mui/icons-material/Lock';

import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';

import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

//reuseable component
import { Bbutton } from '../reUseableComponents/button';


//custom page css
import getStartedPageCss from "../../styles/getStartedPage.module.css";





export default function SignUp(){
    return (
        <>
        <div className={getStartedPageCss.moreAboutYou}>
            <div className={getStartedPageCss.iconContainer} style={{ margin: "auto"}}><LockIcon color="success"/></div>
            <h4>sign up with credentials</h4>
        </div>
        

        <Container>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                <TextField  autoComplete="off" fullWidth label="First Name*" variant="outlined" id="margin-dense" margin="dense" color="success"/>  
                </Grid>

                <Grid item xs={6}>
                <TextField autoComplete="off" fullWidth label="Last Name*" variant="outlined" id="margin-dense" margin="dense" color="success"/>  
                </Grid>
            </Grid>


            <TextField autoComplete="off" fullWidth label="Email Address*" variant="outlined" id="margin-dense" margin="dense" color="success"/>

            <div className={getStartedPageCss.password}>
             <TextField autoComplete="off" fullWidth label="Password*" variant="outlined"  id="margin-dense" margin="dense" color="success"/>

             <IconButton sx={{position:"absolute",top:"15px",right:"10px"}}>
                <VisibilityOffIcon/>
             </IconButton>

            </div>



            <div className={getStartedPageCss.password}>
             <TextField autoComplete="off" fullWidth label="Repeat Password*" variant="outlined"  id="margin-dense" margin="dense" color="success"/>

             <IconButton sx={{position:"absolute",top:"15px",right:"10px"}}>
                <VisibilityOffIcon/>
             </IconButton>

            </div>
           
           

            <Bbutton xTraStyling="" fullwidth={true} buttonType='contained' color1='#181D31' color2="#181D31" text="Sign Up" pad="15px 30px" marg="15px 0"/>

            
            <Divider sx={{marginY:3}}>OR</Divider>

            <div className={getStartedPageCss.socialIcons}>
                <Fab color="error">
                 <GoogleIcon />+
                </Fab>
                
                <Fab sx={{backgroundColor:"#fff"}}>
                 <InstagramIcon sx={{color:"#E4405F"}}/>
                </Fab>
                
                <Fab sx={{backgroundColor:"#fff"}}>
                 <TwitterIcon  sx={{color:"#009EFF"}}/>
                </Fab>
               
            </div>
        </Container>
            
      
       

        </>
    )
}