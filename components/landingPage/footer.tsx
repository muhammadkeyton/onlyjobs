
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';

//css for this component
import landingPageCss from "../../styles/landingPage.module.css";

import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({
    weight: '700',
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export default function Footer (){
    const currentYear = new Date().getFullYear();
    return(
        <div  className={landingPageCss.footer}>

            <Grid container spacing={4}>
                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                    <Typography className={ubuntu.className} variant="h6">
                     onlyJobs
                    </Typography>
                    <p>{currentYear} onlyJobs All Rights Reserved</p>
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                    <p className={landingPageCss.more}>Faqs</p>
                    <p className={landingPageCss.more}>Privacy Policy</p>
                    <p className={landingPageCss.more}>Terms and Conditions</p>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                        
                        <div style={{textAlign:"center"}}>
                            <h3 style={{margin:"0"}}>Get In Touch</h3>
                            <a href="#">support@onlyJobs.tech</a>
                        </div>
                        

                        <div id="contact" className={landingPageCss.socialIcons}>
                           <IconButton>
                            <div className={landingPageCss.icons} style={{marginRight:"50px"}}>
                            <InstagramIcon sx={{color:"#E4405F"}} ></InstagramIcon> 
                            </div>
                            </IconButton>
                            
                            <IconButton>
                            <div className={landingPageCss.icons}>
                            <TwitterIcon sx={{color:"#009EFF"}} ></TwitterIcon>  
                            </div>
                            </IconButton>
                            
                        </div>
                  
                </Grid>



            </Grid>


           
       
        </div>
    )
}