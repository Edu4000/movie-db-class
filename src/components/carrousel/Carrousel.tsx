import React from 'react'
import { CarrouselProps } from './types'
import { Box, Button, Typography } from '@mui/material'
import { Card } from 'components/card'
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from 'react-router-dom';

const Carrousel: React.FC<CarrouselProps> = (props) => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2, mx: 1 }}>
                <Typography variant="h5" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>{props.title}</Typography>
                {props.link === null ?
                    <></> :
                    <Link to={props.link === null ? '/' : props.link}>
                        <Button variant="contained" color="success" sx={{ height: '80%' }}>View All</Button>
                    </Link>
                }
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'row', overflow: 'hidden', overflowX: 'scroll' }}>
                {props.movies.length === 0 ?
                    <Box sx={{ width: '100%', height: '125px', pt: '120px' }}>
                        <LinearProgress />
                    </Box> :
                    props.movies.map((movie) => {
                        return <Card path={movie.path} title={movie.title} vote_average={movie.vote_average} genreIds={movie.genreIds} movieId={movie.movieId.toString()} />;
                    })
                }
            </Box>
        </>
    )
}

export default Carrousel
