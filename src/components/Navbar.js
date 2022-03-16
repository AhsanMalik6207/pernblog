import { AppBar, Toolbar, Typography, makeStyles, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
const useStyle = makeStyles(theme => ({
    component: {
        background: '#FFFFFF',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '&  >*': {
            padding: 20,
            color: 'black',
            textDecoration: 'none'
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
}))

const Navbar = () => {
    const history = useHistory();
    const classes = useStyle();
    const user = useSelector((state) => state.user.currentUser);
    function logout() {
        localStorage.clear();
        history.push('/login')
    }
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link to='/' className={classes.link}>
                    <Typography>HOME</Typography>
                </Link>
                <Link to='/about' className={classes.link}>
                    <Typography>ABOUT</Typography>
                </Link>
                {user?
                    <>
                        <Link onClick={logout} to='/login' className={classes.link}>
                            <Typography>SIGN OUT</Typography>
                        </Link>
                        <Link to='/createuserprofile' className={classes.link}>
                            <Typography>PROFILE</Typography>
                        </Link>
                        {/* <Typography className={classes.link}>
                            {user.name.toUpperCase()}
                        </Typography> */}
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
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;