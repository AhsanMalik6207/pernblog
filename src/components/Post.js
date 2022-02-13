import { makeStyles, Box, Typography } from '@material-ui/core';
import { useState,useEffect} from 'react';
import axios from 'axios';
import Clamp from 'react-multiline-clamp';
const useStyle = makeStyles({
    container: {
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 350,
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        height: 150
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 600
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    },
    clamp:{
        textAlign:'center'
    }
})    

const Post = ({post}) => {
    const classes = useStyle();
    const url = `http://localhost:8000/${post.picture.slice(7,)}`;
    const [username, setUsername] = useState('');
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:8000/user/${post.userId}`)
            setUsername(response.data.name);
        }
        getData();
    }, []);
    return (
        <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image} />
            <Typography className={classes.text}> {new Date(post.createdAt).toDateString()}</Typography>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Typography className={classes.text}><b>Author:</b> {username}</Typography>
            <Clamp withTooltip lines={4} >
            <Typography className={classes.clamp}>{post.description}</Typography>
            </Clamp>
        </Box>
    )
}
export default Post;