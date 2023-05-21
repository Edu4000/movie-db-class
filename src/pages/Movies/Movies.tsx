import React, { useState, useEffect } from 'react';
import { Card } from 'components/card';
import { getPopular } from 'services';
import { Box, LinearProgress, Typography } from '@mui/material';
import { CardsProps } from 'components/card/types';

const Popular: React.FC = () => {

  const [popular, setPopular] = React.useState<Array<CardsProps>>([]);

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
    async function getPopularMovies() {
      const response = await getPopular();
      let list = movieList(response.data.results);
      setPopular(list);
    };
    getPopularMovies();
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2, mx: 1 }}>
        <Typography variant="h3" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>Popular</Typography>
      </Box>
      {popular.length === 0 ?
        <Box sx={{ width: '100%', height: '125px', pt: '120px' }}>
          <LinearProgress />
        </Box> :
        popular.map((movie) => {
          return <Card path={movie.path} title={movie.title} vote_average={movie.vote_average} genreIds={movie.genreIds} movieId={movie.movieId.toString()} />;
        })
      }
    </>
  )

};

export default Popular