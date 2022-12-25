import Chip from '@mui/material/Chip';

import getStartedPageCss from "../../styles/getStartedPage.module.css";


export default function WorkerTagSelection(){

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };


    return(
        <>
          <div className={getStartedPageCss.tagsContainer}>
            <Chip label="Pressure washing" variant="outlined" onClick={handleClick} />
            <Chip label="Car washing" variant="outlined" onClick={handleClick} />
            <Chip label="Curbside cleaning" variant="outlined" onClick={handleClick} />
            <Chip label="Electrician" variant="outlined" onClick={handleClick} />
            <Chip label="Plumber" variant="outlined" onClick={handleClick} />
            <Chip label="House Cleaning" variant="outlined" onClick={handleClick} />
            <Chip label="House Painting" variant="outlined" onClick={handleClick} />
            <Chip label="Pet Grooming" variant="outlined" onClick={handleClick} />
            <Chip label="Roof Cleaning" variant="outlined" onClick={handleClick} />
            <Chip label="Hair stylist" variant="outlined" onClick={handleClick} />

          </div>


          {/* <p className={getStartedPageCss.changingText}>Selected tags</p> */}

          
        </>
            
        
    )
}