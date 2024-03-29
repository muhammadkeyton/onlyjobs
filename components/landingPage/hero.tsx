//next js imports
import Image from 'next/image';
import { Poppins} from '@next/font/google'
import Link from 'next/link'

//material ui imports
import Grid from '@mui/material/Grid';


//css for this component
import landingPageCss from "../../styles/landingPage.module.css";



import { Bbutton } from '../reUseableComponents/button';


import {MAINBUTTON_HOVER,MAINBUTTON_PRE_HOVER } from '../componentConstants/greenButtonColors';


//font for the lets go button
import {createTheme,ThemeProvider} from '@mui/material/styles';
const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

const button = createTheme({
    typography: {
      fontFamily: [
        poppins.style.fontFamily,
      ].join(','),
    },
});
//----------------------------------------

export default function Hero(){
    return(
        <div className={landingPageCss.heroContainer}>
            
          

            <Grid container  spacing={{ xs: 4, sm: 4,md:12,lg:25,xl:50 }}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} order={{ xs: 2, sm: 1,md:1,lg:1,xl:1 }}>
                <h1>Looking for a job or trying to find a worker?</h1>
                <p style={{maxWidth:"35rem",color:"#434242"}}>We got you!,Our business matches service workers with individuals in need of their services. Whether you are a service worker looking for job opportunities or an individual looking for someone to help with a specific task, we will connect you with the right person.</p>
                
                <ThemeProvider theme={button}>

                <Link href="/getStarted" style={{ textDecoration: "none",cursor:"default" }}>
                 <Bbutton buttonType='contained' text="Let's Go" pad="15px 40px" marg="20px 0 0 0" color1={MAINBUTTON_PRE_HOVER} color2={MAINBUTTON_HOVER} xTraStyling={landingPageCss.getStartedButton}/>
                 </Link>
                 
                </ThemeProvider>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} order={{ xs: 1, sm: 2,md:2,lg:2,xl:2 }} >
                
                <Image
                    src="/images/Hero.gif" // Route of the image file
                    height={350} // Desired size with correct aspect ratio
                    width={250} // Desired size with correct aspect ratio
                    alt="get your tools ready"
                    priority={true}
                    
                />

                </Grid>
                
            </Grid> 


            
        </div>
    )
}