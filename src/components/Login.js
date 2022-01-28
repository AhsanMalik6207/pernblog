import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, makeStyles } from '@material-ui/core'
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paperStyle: { padding: 20, height: '70vh', width: 280, margin: "20px auto" },
    avatarStyle: { backgroundColor: '#1bbd7e' },
    btnstyle: { margin: '8px 0' },
}));

const Login = () => {
    const classes = useStyles();
    function login() {
        alert('Login Successful!');
    }
    return (
            <Grid>
            <Paper elevation={10} className={classes.paperStyle}>
                <Grid align='center'>
                    <Avatar className={classes.avatarStyle}><LoginIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter email' type='email' fullWidth required />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                <Button onClick={login} type='submit' color='primary' variant="contained" className={classes.btnstyle} fullWidth>Sign in</Button>
                <Typography > Do you have an account?
                    <Link to="/register">
                        Register
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login