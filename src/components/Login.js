import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, makeStyles,Box} from '@material-ui/core'
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    paperStyle: { marginTop: 115, padding: 20, height: '70vh', width: 280, margin: "20px auto", },
    avatarStyle: { backgroundColor: '#1bbd7e' },
    btnstyle: { margin: '8px 0' },
    spanstyle:{color:"red", marginTop:"10px"}
}));

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const classes = useStyles();
    const history=useHistory();
    useEffect(() => {
        const auth=localStorage.getItem('user')
        if(auth){
            history.push('/')
        }
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
        const result = await axios.post("http://localhost:8000/user/login", {
            email,
            password,
        });
        localStorage.setItem("user",JSON.stringify(result.data))
        if(result.data){
            alert("User Logged In Successfully!");
            history.push('/')
        }
    } catch (err) {
      setError(true);
    }
    };
    return (
        <Grid>
            <Paper elevation={10} className={classes.paperStyle}>
                <Grid align='center'>
                    <Avatar className={classes.avatarStyle}><LoginIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter email' type='email' onChange={(e) => setEmail(e.target.value)} fullWidth required />
                <TextField label='Password' placeholder='Enter password' type='password' onChange={(e) => setPassword(e.target.value)} fullWidth required />
                <Button type='submit' color='primary' onClick={handleSubmit}  variant="contained" className={classes.btnstyle} fullWidth>Sign in</Button>
                {error &&  <Box component="span" className={classes.spanstyle}>Something went wrong!</Box>}
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