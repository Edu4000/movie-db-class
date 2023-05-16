import React, { useState, useEffect } from 'react';
import { Card } from 'components/card';
import { getPopular } from 'services';

const Popular: React.FC = () => {

  const [movies, setMovies] = useState<any[]>([]);

  const getPopularMovies = async () => {
    await getPopular().then((response) => {
      if (response && response.data) {
        console.log(response.data.results);
        setMovies(response.data.results);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div>
      {movies?.length > 0 ? (
        movies.map((movie) => (
          <Card
            key={movie.id}
            path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
            movieId={movie.id}
            genreId={movie.genre_ids[0]}
          />
        ))
      ) : (
        <div>Cargando</div>
      )}
    </div>
  );

};

export default Popular