import { Button, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';
import { categories } from './data';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { categoryFailure, categoryStart, categorySuccess } from "../redux/categoryRedux";
const useStyle = makeStyles({
    button:{
        color: '#E1D9D1',
        border: '1px solid #00d5ff',
        marginRight: '10px',
        marginBottom: '10px',
        marginTop:'5px',
        padding: '8px',
        borderRadius: '10px',
        backgroundColor: '#2B547E',
        boxShadow: 'silver 3px 3px 3px 0',
    },
    create: {
        margin: 20,
        width: '85%',
        background: '#6495ED',
        color: '#fff',
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
})

const Categories = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    function handleClick(e) {
        const value = e.currentTarget.getAttribute("value")
        dispatch(categoryStart());
        if (value) {
            dispatch(categorySuccess(value));
        }
        else {
            dispatch(categoryFailure());
        }
    }
    return (
        <>
            <Link to='createpost' className={classes.link}>
                <Button variant="contained" className={classes.create}>Create Blog</Button>
            </Link>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Categories
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(categories).map((key) => <button className={classes.button} key={key} value={categories[key]} onClick={handleClick}>{key}</button>)}
                </TableBody>
            </Table>
        </>
    )
}

export default Categories;