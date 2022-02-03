import { makeStyles, Box, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom';
const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        padding: 5,
        border: '1px solid #878787',
        borderRadius: 10
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
}))

const PostDetail = () => {
    const classes = useStyle();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    return (
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} />
            <Box className={classes.icons}>
                <Link to='/updatepost'><Edit className={classes.icon} color="primary" /></Link>
                <Delete className={classes.icon} color="error" />
            </Box>
            <Typography className={classes.heading}>JavaScript</Typography>
            <Box className={classes.subheading}>
                <Typography>Author: <span style={{ fontWeight: 600 }}>Muttarab Ahmad</span></Typography>
                <Typography style={{ marginLeft: 'auto' }}>30th January 2022</Typography>
            </Box>
            <Typography>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.</Typography>
        </Box>
    )
}

export default PostDetail;