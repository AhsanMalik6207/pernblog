import { Button, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';
import { categories } from './data';
import { Link } from 'react-router-dom'
const useStyle = makeStyles({
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
    return (
        <>
            <Link to='createpost' className={classes.link}>
                <Button variant="contained" className={classes.create}>Create Blog</Button>
            </Link>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            All Categories
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>
                                    {category}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default Categories;