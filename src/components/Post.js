import { Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography, } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
const useStyles = makeStyles((theme) => ({
    likestyle: {
        marginRight:'600px',
        margin: 'auto',
        display: 'block',
        width: 'fit-content'
    },
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        },
    },
}));

const Post = ({ img, title }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image={img} title="My Post" />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                        consectetur earum est.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <FormControlLabel className={classes.likestyle}
                    control={<Checkbox icon={<ThumbUpIcon/>}
                    checkedIcon={<ThumbUpIcon/>}
                    name="checkedH" />}
                    label="Like"
                />
            </CardActions>
        </Card>
    );
};

export default Post;

