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


import scrollTo  from 'scroll-to-element';

import {createTheme,ThemeProvider} from '@mui/material/styles';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const ubuntu = Ubuntu({
  weight: '700',
  style: ['italic'],
  subsets: ['latin'],
})


//adding custom fonts to material ui components
const logo = createTheme({
  typography: {
    fontFamily: [
      ubuntu.style.fontFamily,
    ].join(','),
  },
});


const nav = createTheme({
  typography: {
    fontFamily: [
      poppins.style.fontFamily,
    ].join(','),
  },
});

const drawerWidth = 280;
const navItems = ['home', 'services','contact'];

export default function DrawerAppBar() {
  

  const [mobileOpen, setMobileOpen] = useState(false);
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  

  const drawer = (
  
    <Box  onClick={handleDrawerToggle} sx={{ textAlign: 'center',backgroundColor:"#FFFFFF" }}>
          <ThemeProvider theme={logo}>
            <Typography className={ubuntu.className} variant="h6" sx={{ my: 2 }}>
            onlyJobs
            </Typography>
          </ThemeProvider>
      <Divider />

      
      <List>
        {navItems.map((item) => (
          <ListItem  key={item} disablePadding>
             <ThemeProvider theme={nav}>
                <ListItemButton onClick={(): void => scrollTo(`#${item}`)} component="a"   sx={{ textAlign: 'center' }}>
                  <ListItemText  primary={item} />
                </ListItemButton>
              </ThemeProvider>
            
          </ListItem>
        ))}
      </List>
      <Divider />
      <ThemeProvider theme={nav}>
        <List>
          <Bbutton xTraStyling="" buttonType="contained" color1='#181D31' color2="#181D31" text="Sign Up" pad="15px 30px" marg="0 20px 0 0"/>
          <Bbutton xTraStyling="" buttonType="outlined" color1='#fff' color2="#fff" text="Sign In" pad="15px 30px" marg="0"/>
        </List>
      </ThemeProvider>
    </Box>
  
  );



  return (
    
    <div id="home">
     
     
      <AppBar component="nav" color="inherit" 
      
       sx={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"1.5rem 3rem",
        backgroundColor:"#FFFFFF"    
       }}
      >
       
       <ThemeProvider theme={logo}>
          <Typography
            variant="h6"
            component="div"
            sx={{display: { xs: 'block', sm: 'block' ,color:"black",cursor:"pointer"} }}
            className={ubuntu.className}
            
          >
            onlyJobs
          </Typography>
        </ThemeProvider>
       
        

          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' },color:"black" }}
          >
            {mobileOpen?<CloseIcon/>:<MenuIcon />}
          </IconButton>

          <ThemeProvider theme={nav}>
          <Box  sx={{ display: { xs:'none',sm:'none',md: 'none', lg: 'block' } }}>
            {navItems.map((item) => (
               
               
                <Button onClick={(): void => scrollTo(`#${item}`)} component="a"  key={item} sx={{ color: 'black',paddingX:4,textTransform:"none" }}>
                  {item}
                </Button>
                
              
            ))}
          </Box>
          </ThemeProvider>
          
          <ThemeProvider theme={nav}>
          <Box  sx={{ display: {  xs:'none',sm:'none',md: 'none', lg: 'block' } }}>
            <Bbutton xTraStyling="" buttonType="contained" color1='#181D31' color2="#181D31" text="Sign Up" pad="15px 30px" marg="0"/>
            <Bbutton xTraStyling=""  buttonType="outlined" color1='#fff' color2="#fff" text="Sign In" pad="15px 30px" marg="0 0 0 40px"/>
          </Box>
          </ThemeProvider>
          
      

        
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:"#FFFFFF" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>


    </div>
   
   
  );
}
