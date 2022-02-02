import { AppBar, Toolbar, Typography, makeStyles, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const useStyle = makeStyles(theme => ({
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    component: {
        background: '#FFFFFF',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '&  >*': {
            padding: 20,
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
    const auth = localStorage.getItem('currentUser');
    if(auth){
        var parse=JSON.parse(auth);
    }
    function logout() {
        localStorage.clear();
        history.push('/login')
    }
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Typography variant="h5" className={classes.logo}>
                    Blog App
                </Typography>
                <Link to='/' className={classes.link}>
                    <Typography>BLOG</Typography>
                </Link>
                <Link to='/about' className={classes.link}>
                    <Typography>ABOUT</Typography>
                </Link>
                {auth ?
                    <>
                        <Link onClick={logout} to='/login' className={classes.link}>
                            <Typography>SIGN OUT</Typography>
                        </Link>
                        <Typography className={classes.link}>
                            {parse.user.name.toUpperCase()}
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
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;