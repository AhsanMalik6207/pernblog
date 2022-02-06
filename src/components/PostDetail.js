import { makeStyles, Box, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';;
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

const PostDetail = ({match}) => {
    const classes = useStyle();
    const [postdata, setPostdata] = useState({});
    const [username, setUsername] = useState('');
    const [imageurl, setImageurl] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/post/${match.params.id}`)
            setPostdata(response.data);
            setUsername(response.data.User.name);
            setImageurl(response.data.picture);
        }
        fetchData()
    }, [])  
    const url = `http://localhost:8000/${imageurl.slice(7,)}`;
    return (
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} />
            <Box className={classes.icons}>
                <Link to={`/updatepost/${postdata.id}`}><Edit className={classes.icon} color="primary" /></Link>
                <Delete className={classes.icon} color="error" />
            </Box>
            <Typography className={classes.heading}>{postdata.title}</Typography>
            <Box className={classes.subheading}>
                <Typography>Author: <span style={{ fontWeight: 600 }}>{username}</span></Typography>
                <Typography style={{ marginLeft: 'auto' }}>{new Date(postdata.createdAt).toDateString()}</Typography>
            </Box>
            <Typography>{postdata.description}</Typography>
        </Box>
    )
}

export default PostDetail;