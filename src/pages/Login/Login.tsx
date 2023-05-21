import { Box, Typography } from '@mui/material';
import { Card } from 'components/card';
import { CardsProps } from 'components/card/types';
import React, { useEffect } from 'react'
import { getMovieInfo } from 'services';

const Login = () => {
  const [movies, setMovies] = React.useState<Array<CardsProps>>([]);

  function movieList(data: any) {
    console.log(data)
    let res = data.map((movie: any) => {
      let card:CardsProps = {
        title: movie['title'],
        vote_average: movie.vote_average,
        path: movie.poster_path,
        genreIds: movie.genres,
        movieId: movie.id.toString()
      }
      return card;
    })
    setMovies(res);
  }

  useEffect(() => {
    let favs = localStorage.getItem('favoritos')?.split(',').splice(1)
    let res = favs?.map(async (fav) => {
      if (fav === '') return
      const response = await getMovieInfo(fav)
      return response.data
    })
    Promise.all<any>(res).then((movie:any) => {
      movieList(movie)
    })
  }, [])

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2, mx: 1 }}>
        <Typography variant="h3" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>My Favorites</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        {movies.length === 0 ?
          <Box sx={{ width: '100%', height: '125px', pt: '120px' }}>
            <Typography>
              You don't have any favorite movies yet.
            </Typography>
          </Box> :
          movies.map((movie) => {
            return <Card path={movie.path} title={movie.title} vote_average={movie.vote_average} genreIds={movie.genreIds} movieId={movie.movieId.toString()} />;
          })
        }
      </Box>
    </>
  )
}

export default Login
