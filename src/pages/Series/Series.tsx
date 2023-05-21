import { Box, LinearProgress, Typography } from '@mui/material';
import { Card } from 'components/card';
import { CardsProps } from 'components/card/types';
import React, { useEffect } from 'react'
import { getTopRated } from 'services';

const Series = () => {const [movies, setMovies] = React.useState<Array<CardsProps>>([]);

  function movieList(data: any): Array<CardsProps> {
    let res = data.map((movie: any) => {
      let card = {
        title: movie['title'],
        vote_average: movie.vote_average,
        path: movie.poster_path,
        genreIds: movie.genre_ids,
        movieId: movie.id.toString()
      }
      return card;
    })
    return res;
  }

  useEffect(() => {
    async function getMovies() {
      const response = await getTopRated();
      let list = movieList(response.data.results);
      setMovies(list);
    };
    getMovies();
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2, mx: 1 }}>
        <Typography variant="h3" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>Now Playing</Typography>
      </Box>
      {movies.length === 0 ?
        <Box sx={{ width: '100%', height: '125px', pt: '120px' }}>
          <LinearProgress />
        </Box> :
        movies.map((movie) => {
          return <Card path={movie.path} title={movie.title} vote_average={movie.vote_average} genreIds={movie.genreIds} movieId={movie.movieId.toString()} />;
        })
      }
    </>
  )
}

export default Series
