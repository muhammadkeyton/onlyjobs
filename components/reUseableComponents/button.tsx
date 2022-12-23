import Button,{ ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';


type ButtonTypes = {
    buttonType:string,
    color1:string,
    color2:string,
    text:string,
    pad:string,
    marg:string,
    xTraStyling:any,
    onClick?:()=>void
}

  
export const  Bbutton = ({buttonType,color1,color2,text,pad,marg,xTraStyling,onClick = ()=>{}} : ButtonTypes)=>{
    
    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(color1),
        backgroundColor: color1,
        transition:"padding 0.5s ease-in-out",
        '&:hover': {
          backgroundColor: color2,
        },
        outline:"none",
        
    }));


    return(

        buttonType === "contained" ?
        (<ColorButton  className = {xTraStyling} variant="contained" onClick={onClick} sx={{textTransform:"none",borderRadius:"25px",padding:`${pad}`,margin:`${marg}`}}>{text}</ColorButton>)

        :
        <ColorButton  className = {xTraStyling} variant="outlined" onClick={onClick} sx={{textTransform:"none",borderRadius:"25px",padding:`${pad}`,margin:`${marg}`}}>{text}</ColorButton>
    )
}





