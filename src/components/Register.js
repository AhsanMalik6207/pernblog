import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, makeStyles } from '@material-ui/core'
import CreateIcon from '@mui/icons-material/Create';

const useStyles = makeStyles((theme) => ({
    paperStyle: { padding: 20, height: '70vh', width: 280, margin: "20px auto" },
    headerStyle: { margin: 0 },
    avatarStyle: { backgroundColor: '#1bbd7e',marginBottom:"21px" },
    btnstyle: { margin: '8px 0' },
}));

const Signup = () => {
    const classes = useStyles();
    function register() {
        alert('Registration Successful!');
    }
    return (
            <Grid>
                <Paper elevation={20} className={classes.paperStyle}>
                    <Grid align='center'>
                        <Avatar className={classes.avatarStyle}>
                            <CreateIcon />
                        </Avatar>
                        <h2 className={classes.headerStyle}>Register</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
                    </Grid>
                    <form>
                        <TextField fullWidth label='Name' placeholder="Enter your name" />
                        <TextField fullWidth label='Email' placeholder="Enter your email" />
                        <TextField fullWidth label='Password' placeholder="Enter your password" />
                        <Button onClick={register} type='submit' color='primary' variant="contained" className={classes.btnstyle} fullWidth>Sign up</Button>
                    </form>
                </Paper>
            </Grid>
    )
}

export default Signup;