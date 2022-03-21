// import { AppBar, Toolbar, Typography, makeStyles, Avatar} from '@material-ui/core';
// import Box from '@mui/material/Box';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import logo from '../images/logo.png';
// import { borders } from '@mui/system';
// const useStyle = makeStyles(theme => ({
//     component: {
//         background: '#FFFFFF',
//         color: 'black'
//     },
//     // container: {
//     //     justifyContent: 'left',
//     //     '&  >*': {
//     //         padding: 10,
//     //         color: 'black',
//     //         textDecoration: 'none'
//     //     }
//     // },
//     link: {
//         textDecoration: 'none',
//         color: 'inherit',
//         marginLeft: 40,
//         marginRight:20,
//         '&:hover':{
//             backgroundColor: '#d3dbd5',
//             paddingBottom: '1px'
//         }
//     },
//     avatar:{
//         marginLeft:'300px',
//         marginBottom:10,
//     }
// }))

// const Navbar = () => {
//     const history = useHistory();
//     const classes = useStyle();
//     const user = useSelector((state) => state.user.currentUser);
//     function logout() {
//         localStorage.clear();
//         history.push('/login')
//     }
//     return (
//         <React.Fragment>
//         <AppBar className={classes.component}>
//             <Toolbar>
//         <Box sx={{display: "flex", justifyContent: "flex-start", width: '100%', alignItems: 'flex-start',}} >
//             <Box sx={{display: "flex", alignContent: "start"}}>
//             <img src={logo} height={90} width={120} />
//             </Box>
//         <Box sx={{display: "flex", lexWrap: 'wrap', marginLeft:'170px', marginTop:'30px' }}>

//                 <Link to='/' className={classes.link}>
//                     <Typography>HOME</Typography>
//                 </Link>
//                 <Link to='/about' className={classes.link}>
//                     <Typography>ABOUT</Typography>
//                 </Link>
//                 {user?
//                     <>
//                         <Link to='/createuserprofile' className={classes.link}>
//                             <Typography>PROFILE</Typography>
//                         </Link>
//                         <Link onClick={logout} to='/login' className={classes.link}>
//                             <Typography>SIGN OUT</Typography>
//                         </Link>
//                         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  className={classes.avatar}/>
//                         {/* <Typography className={classes.link}>
//                             {user.name.toUpperCase()}
//                         </Typography> */}
//                     </> :
//                     <>
//                         <Link to='/login' className={classes.link}>
//                             <Typography>LOGIN</Typography>
//                         </Link>
//                         <Link to='/register' className={classes.link}>
//                             <Typography>REGISTER</Typography>
//                         </Link>
//                     </>
//                 }
//         </Box>
//         </Box>
//             </Toolbar>
//         </AppBar>
//         </React.Fragment>
//     )
// }
// export default Navbar;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { ImportantDevices } from '@material-ui/icons';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const useStyle = makeStyles(theme => ({
    component: {
        background: '#f5ebeb !important' ,
        color: 'black !important',
        height: '13vh',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        marginLeft: 40,
        marginRight:20,
        padding: 10
    },
    link2:{
        textDecoration: 'none',
        color: 'inherit',
        marginLeft: 40,
        marginRight:20,
        padding: 20,
    }
 
}))
const Navbar = () => {
    const history = useHistory();
    const classes = useStyle();
    const user = useSelector((state) => state.user.currentUser);
    // const userProfile= useSelector((state)=> state.userProfile.currentUser)
    function logout() {
        localStorage.clear();
        history.push('/login')
    }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className={classes.component}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <img src={logo} height={90} width={120} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu 
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link to='/' className={classes.link2}>
                    <Typography>HOME</Typography>
                </Link>
                 <Link to='/about' className={classes.link2}>
                     <Typography>ABOUT</Typography>
               </Link>
                {user?
                    <>
                        <Link to='/createuserprofile' className={classes.link2}>
                            <Typography>PROFILE</Typography>
                        </Link>
                        <Link onClick={logout} to='/login' className={classes.link2} >
                            <Typography>SIGN OUT</Typography>
                        </Link>
                    </> :
                    <>
                        <Link to='/login' className={classes.link2}>
                            <Typography>LOGIN</Typography>
                        </Link>
                        <Link to='/register' className={classes.link2}>
                            <Typography>REGISTER</Typography>
                        </Link>
                    </>
                }
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={logo} height={90} width={120} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link to='/' className={classes.link}>
                    <Typography>HOME</Typography>
                </Link>
                 <Link to='/about' className={classes.link}>
                     <Typography>ABOUT</Typography>
               </Link>
                {user?
                    <>
                        <Link to='/createuserprofile' className={classes.link}>
                            <Typography>PROFILE</Typography>
                        </Link>
                        <Link onClick={logout} to='/login' className={classes.link}>
                            <Typography>SIGN OUT</Typography>
                        </Link>
                        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  /> */}
                        <Typography sx={{display:'none'}}>
                            {user.name.toUpperCase()}
                        </Typography>
                    </> :
                    <>
                        <Link to='/login' className={classes.link}>
                            <Typography>LOGIN</Typography>
                        </Link>
                        <Link to='/register' className={classes.link}>
                            <Typography>REGISTER</Typography>
                        </Link>
                    </>
                }
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            {user?
            
            <Typography sx={{display:'block', border: '2px solid black',borderRadius:'50px', padding:'10px'}}>
                            {user.name.toUpperCase()}
            </Typography>:
            
            <Link to='/login' className={classes.link}>
                <Typography><AccessibilityNewIcon /></Typography>
            </Link>
            
       
        }
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" >{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
