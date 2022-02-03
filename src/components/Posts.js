import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Post';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [postdata, setPostdata] = useState([]);
    useEffect(() => {
        const fetchData=async()=>  {
            const response = await axios.get("http://localhost:8000/post/getAll")
            setPostdata(response.data);
        }
        fetchData()
    }, [])
    return (
         postdata.map((post) => (
            <Grid item lg={3} sm={4} xs={12}>
                <Link to={'/postdetail'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Post post={post} />
                </Link>
            </Grid>
        ))
    )
}
export default Posts;