import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { Bbutton } from '../reUseableComponents/button';


//poppins and ubuntu font for navbar

import { Poppins,Ubuntu} from '@next/font/google'


//css for this component
import landingPageCss from "../../styles/landingPage.module.css";



import { useRouter } from 'next/router'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const ubuntu = Ubuntu({
  weight: '700',
  style: ['normal', 'italic'],
  subsets: ['latin'],
})





const drawerWidth = 280;
const navItems = ['Home', 'Services', 'Careers'];

export default function DrawerAppBar() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  

  //scrolling not working next issue to work on
  function scrollToServices() {
    router.push('/services');
    window.scrollTo({
      top: document.getElementById('services')!.offsetTop,
      behavior: 'smooth'
    });
  }

  const drawer = (
  
    <Box  onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
       
          <Typography className={ubuntu.className} variant="h6" sx={{ my: 2 }}>
          onlyJobs
          </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton  sx={{ textAlign: 'center' }}>
              <ListItemText className={poppins.className} disableTypography primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <Bbutton xTraStyling={poppins.className} buttonType="contained" color1='#181D31' color2="#181D31" text="Sign Up" pad="15px 30px" marg="0 20px 0 0"/>
        <Bbutton xTraStyling={poppins.className} buttonType="outlined" color1='#fff' color2="#fff" text="Sign In" pad="15px 30px" marg="0"/>
      </List>
    </Box>
  
  );



  return (
    
    <Box>

      <AppBar component="nav" color="inherit"  className={landingPageCss.appbar}>
       
       
          <Typography
            variant="h6"
            component="div"
            sx={{display: { xs: 'block', sm: 'block' ,color:"black",cursor:"pointer"} }}
            className={ubuntu.className}
            
          >
            onlyJobs
          </Typography>
       
        

          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' },color:"black" }}
          >
            {mobileOpen?<CloseIcon/>:<MenuIcon />}
          </IconButton>
          <Box  sx={{ display: { xs:'none',sm:'none',md: 'none', lg: 'block' } }}>
            {navItems.map((item) => (
              <Button className={poppins.className} key={item} sx={{ color: 'black',paddingX:4,textTransform:"none" }}>
                {item}
              </Button>
            ))}
          </Box>
          
          <Box  sx={{ display: {  xs:'none',sm:'none',md: 'none', lg: 'block' } }}>
            <Bbutton xTraStyling={poppins.className}  buttonType="contained" color1='#181D31' color2="#181D31" text="Sign Up" pad="15px 30px" marg="0"/>
            <Bbutton xTraStyling={poppins.className}  buttonType="outlined" color1='#fff' color2="#fff" text="Sign In" pad="15px 30px" marg="0 0 0 40px"/>
          </Box>
          
      

        
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>


    </Box>
   
  );
}
