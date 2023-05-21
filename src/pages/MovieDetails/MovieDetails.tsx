import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { MovieDetailsProps } from "./types";
import { getMovieInfo } from "services";
import Carrousel from "components/carrousel/Carrousel";
import { CardsProps } from "components/card/types";
import { getRecommended } from "services/movies/getRecommended";
import { Box, Button, Typography } from "@mui/material";
import { ImageStyle } from "./styles";
import { Tag } from "components/tag";

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<MovieDetailsProps | null>(null);
  const [recomended, setRecomended] = React.useState<Array<CardsProps>>([]);
  const [favorite, setFavorite] = React.useState<boolean>(false);
  const goBack = () => {
    navigate(-1);
  }

  function movieList(data: any): Array<CardsProps> {
    let res = data.slice(0, 10).map((movie: any) => {
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
    async function getInfo() {
      const response = await getMovieInfo(id === undefined ? '0' : id);
      if (response.data.success === false) navigate(`/not-found/${id}`);
      setMovie({
        title: response.data.title,
        vote_average: response.data.vote_average,
        genres: response.data.genres,
        overview: response.data.overview,
        poster_path: response.data.poster_path,
        relase_date: response.data.relase_date,
        runtime: response.data.runtime,
      });
    };
    async function getRecommendedMovies() {
      const response = await getRecommended(id === undefined ? '0' : id);
      let list = movieList(response.data.results);
      setRecomended(list);
    };
    const items = { ...localStorage };
    console.log(items);
    getInfo();
    getRecommendedMovies();
    setFavorite(localStorage.getItem(favorite ? 'favoritos' : 'favoritos')?.split(',').includes(id === undefined ? '0' : id) ?? false);
  }, [location]);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center', m:5 }}>
        <Box sx={{ width:'40%' }}>
          <ImageStyle src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`} alt={movie?.title} />
        </Box>
        <Box sx={{ width:'60%', display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'left', m:5, gap: 3 }}>
          <Typography variant='h4' fontWeight='bold' >{movie?.title}</Typography>
          <Typography>Score: {movie?.vote_average.toFixed(2)} / 10</Typography>
          <Typography>{movie?.overview}</Typography>
          <Typography>{movie?.relase_date}</Typography>
          <Typography>Duration: {movie?.runtime} min</Typography>
          <Box sx={{ display:'flex', flexDirection:'row' }}>
            {movie?.genres.map((genre: any) => <Tag genre={genre.name} color={"green"}/>)}
          </Box>
          <Button variant="contained" color={favorite ? "error" : "primary"} onClick={() => {
            setFavorite(!favorite);
            if (!favorite) {
              let favs = localStorage.getItem('favoritos')?.split(',');
              favs?.push(id === undefined ? '0' : id);
              localStorage.setItem('favoritos', favs?.toString() ?? '');
            }
            else {
              let favs = localStorage.getItem('favoritos')?.split(',');
              favs?.splice(favs.indexOf(id === undefined ? '0' : id), 1);
              localStorage.setItem('favoritos', favs?.toString() ?? '');
            }
          }}>{
            favorite ? "Remove from favorites" : "Add to favorites"
          }</Button>
        </Box>
      </Box>
      <Carrousel title="RECOMENDED" movies={recomended} link={null} />
    </>
  );
}

export default MovieDetails