import { useState, useEffect } from 'react';
import { Box, TextareaAutosize, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import Comment from './Comment';
import { useSelector, useDispatch } from 'react-redux';
import { commentFailure, commentStart, commentSuccess } from "../redux/commentRedux";
const useStyles = makeStyles({
    container: {
        marginTop: 100,
        display: 'flex',
        '& > *': {
            // padding: '10px '
        }
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: '50%'
    },
    textarea: {
        height: 100,
        width: '100%',
        margin: '0 20px'
    },
    button: {
        height: 40
    },
    spanstyle: { color: "red", marginTop: "10px" }
})
const Comments = ({ postdata }) => {
    const classes = useStyles();
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const url = 'https://static.thenounproject.com/png/12017-200.png'
    const [commenttext, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [data, setData] = useState();
    const [toggle, setToggle] = useState(false);
    const { isFetching, error } = useSelector((state) => state.comment);
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:8000/comment/${postdata.id}`)
            setComments(response.data);
        }
        getData();
    }, [toggle, postdata]);
    const saveComment = async (e) => {
        e.preventDefault();
        await createComment(dispatch, { commenttext });
    }
    const handleChange = (e) => {
        setComment(e.target.value);
        setData(e.target.value);
    }
    const createComment = async (dispatch, comment) => {
        dispatch(commentStart());
        try {
            const result = await axios.post(`http://localhost:8000/comment/${user.id}/${postdata.id}/create`,
                { commenttext }, {
                headers: {
                    Authorization: "Bearer " + JSON.parse(localStorage.getItem('currentUser')).accesstoken
                }
            }
            );
            dispatch(commentSuccess(result.data));
        } catch (err) {
            dispatch(commentFailure());
        }
        setData('')
        setToggle(prev => !prev);
    };
    return (
        <Box >
            <Box className={classes.container}>
                <img src={url} className={classes.image} alt="dp" />
                <TextareaAutosize
                    name='commenttext'
                    className={classes.textarea}
                    rowsMin={5}
                    placeholder="what's on your mind?"
                    onChange={(e) => handleChange(e)}
                    value={data}
                />
                <Button variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.button}
                    disabled={isFetching}
                    onClick={saveComment}
                >Post
                </Button>
            </Box>
            <Box>
                {
                    comments && comments.map(comment => (
                        <Comment comment={comment} setToggle={setToggle} />
                    ))
                }
            </Box>
            {error && <Box component="span" className={classes.spanstyle}>Comment not Created! Please login first.</Box>}
        </Box>
    )
}

export default Comments;