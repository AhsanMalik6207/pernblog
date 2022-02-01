import { makeStyles, Box, Typography } from '@material-ui/core';
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

const Post = () => {
    const classes = useStyle();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    return (
        <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image} />
            <Typography className={classes.text}>Tech</Typography>
            <Typography className={classes.heading}>JavaScript</Typography>
            <Typography className={classes.text}>Author: Muttarab Ahmad</Typography>
            <Clamp withTooltip lines={4} >
            <Typography className={classes.clamp}>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.</Typography>
            </Clamp>
        </Box>
    )
}

export default Post;