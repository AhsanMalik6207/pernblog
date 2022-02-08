import React, { useState, useEffect } from 'react';
import { Box, makeStyles, TextareaAutosize, Button, FormControl, InputBase } from '@material-ui/core';
import { AddCircle as Add } from '@material-ui/icons';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { postFailure, postStart, postSuccess } from "../redux/postRedux";
const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    picture: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    form: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    },
    spanstyle: { color: "red", marginTop: "10px" }
}));
const initialPost = {
    title: '',
    description: '',
    picture: '',
}
const CreatePost = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.user.currentUser);
    const [postdata, setPostdata] = useState(initialPost);
    const [imageurl, setImageurl] = useState('');
    const [image, setImage] = useState('');
    const { isFetching, error } = useSelector((state) => state.post);
    const url = imageurl ? imageurl : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const userid = user.id;
    useEffect(() => {
        const getImage = async () => {
            if (image) {
                var reader = new FileReader();
                reader.onloadend = function () {
                    setImageurl(reader.result)
                }
                reader.readAsDataURL(image);
            }
        }
        getImage();
    }, [image])
    const savePost = async () => {
        await createPost(dispatch, postdata);
    }
    const handleChange = (e) => {
        setPostdata({ ...postdata, [e.target.name]: e.target.value });
    }
    const createPost = async (dispatch, post) => {
        dispatch(postStart());
        try {
            const data = new FormData();
            data.append("picture", image);
            data.append("title", postdata.title);
            data.append("description", postdata.description);
            const result = await axios.post(`http://localhost:8000/post/${userid}/4/create`,
                data, {
                headers: {
                    Authorization: "Bearer " + JSON.parse(localStorage.getItem('currentUser')).accesstoken
                }
            }
            );
            dispatch(postSuccess(result.data));
            history.push('/')
        } catch (err) {
            dispatch(postFailure());
        }
    };
    return (
        <>
            <Box className={classes.container}>
                <img src={url} alt="banner" className={classes.picture} />
                <FormControl className={classes.form}>
                    <label htmlFor="fileInput">
                        <Add className={classes.addIcon} fontSize="large" color="action" />
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    <InputBase name='title' placeholder="Title" onChange={(e) => handleChange(e)} className={classes.textfield} />
                    <Button onClick={() => savePost()} disabled={isFetching} variant="contained" color="primary">Publish</Button>
                </FormControl>
                <TextareaAutosize
                    rowsMin={5}
                    name='description'
                    placeholder="Tell your story..."
                    className={classes.textarea}
                    onChange={(e) => handleChange(e)}
                />
                {error && <Box component="span" className={classes.spanstyle}>Post not Created!</Box>}
            </Box>
            
        </>
    )
}
export default CreatePost;