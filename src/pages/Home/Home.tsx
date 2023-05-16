import React from 'react'
/* Importing Components */
import Card from 'components/card/Card';
import { movies } from 'constants/moviesMock';
/*
    #   #  #       #   #   #
    #   #   #  #  #    #   #
    # # #    #   #     # # #
*/

const Home = () => {
    const avatar = movies[0];
    const {
        title: titleAvatar,
        vote_average: voteAverageAvatar,
        poster_path: pathAvatar,
        genre_ids: [genreAvatar]
    } = avatar;


    const winnie = movies[1];
    const {
        title: titleWinnie,
        vote_average: voteAverageWinnie,
        poster_path: pathWinnie,
        genre_ids: [genreWinnie]
    } = winnie;

    return (
        <div>
            {movies.map((movie) => {
                return <Card path={movie.poster_path} title={movie.title} vote_average={movie.vote_average} genreId={movie.genre_ids[0]} movieId={movie.id.toString()} />;
            })}
        </div>
    )
}

export default Home
