//next js imports
import { Poppins} from '@next/font/google'


//material ui imports
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentIcon from '@mui/icons-material/Payment';


//css for this component
import landingPageCss from "../../styles/landingPage.module.css";


import { PARAGRAPH_HEXCOLOR,MAINBUTTON_HOVER,MAINBUTTON_PRE_HOVER } from '../componentConstants/textColors';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})



export default function Services(){
    return(
        <div id="services" className={landingPageCss.servicesContainer}>
             <h3>Unmatched Services for Your Needs</h3>


             <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} >

                  <Paper elevation={4} className={landingPageCss.serviceCard}>
                    <div className={landingPageCss.iconContainer}>
                       <JoinInnerIcon fontSize="large" sx={{color:MAINBUTTON_HOVER}}/>
                    </div>

                    <div className={landingPageCss.serviceTextContainer}>
                        <h4>Instant Matching</h4>
                        <p style={{color:"#D6E4E5"}}>
                        Our platform makes it easy to find the right person, fast. Simply enter your location and the type of service you require, and we'll find you a worker in your area. No more endless searching – just efficient, instant matching
                        </p>
                    </div>
                  </Paper>

                </Grid>


                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}  >

                  <Paper elevation={4} className={landingPageCss.serviceCard}>
                    <div className={landingPageCss.iconContainer}>
                       <ScheduleIcon fontSize="large" sx={{color:"#344D67"}}/>
                    </div>

                    <div className={landingPageCss.serviceTextContainers} style={{backgroundColor:"#344D67"}}>
                        <h4>Book a service worker</h4>
                        <p style={{color:"#D6E4E5"}}>
                         Simply select the dates and times that work for you, and we'll handle the rest. Our booking system is fast, convenient, and secure, so you can have peace of mind knowing that your service worker is confirmed and ready to go.   
                        </p>
                    </div>
                  </Paper>

                </Grid>


                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} >

                  <Paper elevation={4} className={landingPageCss.serviceCard}>
                    <div className={landingPageCss.iconContainer}>
                       <PaymentIcon fontSize="large" sx={{color:"#000000"}}/>
                    </div>

                    <div className={landingPageCss.serviceTextContainers} style={{backgroundColor:"#000000"}}>
                        <h4>Fast and Secure payments</h4>
                        <p style={{color:"#D6E4E5"}}>
                        Paying for services shouldn't be a headache. That's why we offer fast and secure payment options through our platform. You can choose to pay with your credit card or through a secure online payment system, and you'll have the peace of mind knowing that your payment is fully protected.
                        </p>
                    </div>
                  </Paper>

                </Grid>



                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} >

                  <Paper elevation={4} className={landingPageCss.serviceCard}>
                    <div className={landingPageCss.iconContainer}>
                       <SupportAgentIcon fontSize="large" sx={{color:"#285430"}}/>
                    </div>

                    <div className={landingPageCss.serviceTextContainers} style={{backgroundColor:"#285430",borderTopRightRadius:"50%"}}>
                        <h4>24/7 support</h4>
                        <p style={{color:"#D6E4E5"}}>
                        We know that service needs don't always follow a 9-5 schedule. That's why we offer 24/7 support to our users. If you have any questions or concerns, don't hesitate to reach out – we're here to help, anytime, day or night
                        </p>
                    </div>
                  </Paper>

                </Grid>




             </Grid>
             
        </div>
    )
}

