//next js imports
import Head from 'next/head';



//page components imports
import NavBar from "../components/landingPage/navBar";
import HeroSection from "../components/landingPage/hero"
import Services from '../components/landingPage/services';

// material ui
import Divider from '@mui/material/Divider';

export default function LandingPage(){
  
  return(
    <div>
       <Head>
        <title>
          onlyJobs
        </title>
        <meta
          name="description"
          content="We match you with jobs,get paid instantly for every task completed,what are you waiting for?join us today!"
          key="desc"
        />

        <meta property="og:title" content="onlyJobs" />
        <meta
          property="og:description"
          content="onlyJobs matches you with jobs and pays you instantly for every job you complete"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg" //onlyjobs logo make sure to edit this 
        />

     
      </Head>
      
      <NavBar/>
      <HeroSection/>

      <Divider/>
      
      <Services />
      
    </div>
  )
}