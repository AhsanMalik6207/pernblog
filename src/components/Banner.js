import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?w=826'}) center/100% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            color: '#FFFFFF',
            lineHeight: 1
        },
        '& :last-child': {
            fontSize: 20,
            background: '#FFFFFF',
        }
    }
})

const Banner = () => {
    const classes = useStyle();
    return (
        <>
            <Box className={classes.image}>
                <Typography>BLOG</Typography>
                <Typography>Building a better future for writing</Typography>
            </Box>
        </>
    )
}
export default Banner;