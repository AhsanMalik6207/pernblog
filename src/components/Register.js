import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, makeStyles } from '@material-ui/core'
import CreateIcon from '@mui/icons-material/Create';

const useStyles = makeStyles((theme) => ({
    paperStyle: { marginTop: 115, padding: 20, height: '70vh', width: 280, margin: "20px auto" },
    headerStyle: { margin: 0 },
    avatarStyle: { backgroundColor: '#1bbd7e', marginBottom: "21px" },
    btnstyle: { margin: '8px 0' },
}));

const Register = () => {
    const classes = useStyles();
    return (
        <Grid>
            <Paper elevation={20} className={classes.paperStyle}>
                <Grid align='center'>
                    <Avatar className={classes.avatarStyle}>
                        <CreateIcon />
                    </Avatar>
                    <h2 className={classes.headerStyle}>Sign up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
                </Grid>
                <form>
                    <TextField label='Name' placeholder="Enter your name" fullWidth />
                    <TextField label='Email' placeholder="Enter your email" fullWidth />
                    <TextField label='Password' placeholder="Enter your password" fullWidth />
                    <Button type='submit' color='primary' variant="contained" className={classes.btnstyle} fullWidth>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Register;