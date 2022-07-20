import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MainSidebar from './Header';
import { makeStyles } from '@mui/styles';
// import StudentTable from '../Student/StudentTable';
import { useSelector,useDispatch } from 'react-redux';
import {toggle} from '../../redux/action/Action'


const useStyle = makeStyles((theme)=>({
  iconsButton:{
    color:theme.palette.secondary.light,
    display:'flex',
    justifyContent:'space-between'
  }
}))



const NavBar = () => {
  const toggleAppBar = useSelector((state)=>state.togglingReducer.togglingAll)
  const classes = useStyle()
  const [sideBarToggle, setSideBarToggle] = useState(toggleAppBar)
  const dispatch = useDispatch()

const handleToggle = () => {
   dispatch(toggle())
   setSideBarToggle(!sideBarToggle)
}

  return (
    <>
    <Box sx={{ flexGrow: 1 }} 
     style={{ position: 'absolute', right: 0, left: sideBarToggle ? 300 : 0, transition: '.3s all', }}
    >
      <AppBar position="static" >
        <Toolbar  className={classes.iconsButton}>
          <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleToggle}
            sx={{ mr: 2, }}
            >
            <MenuIcon />
          </IconButton>
          
          <Typography color="inherit" variant="h6" component={NavLink} to='/' sx={{ flexGrow: 1 ,cursor:'pointer',textDecoration:'none'}}>
          UKEYO
          </Typography>
          </Box>
          <Button color="inherit" component={NavLink} to='/login'>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    
        <MainSidebar state={sideBarToggle} /> 
    </Box>
        </>
  );
}
export default NavBar;