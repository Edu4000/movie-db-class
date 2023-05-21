import React, { useEffect } from 'react'
/* Importing Components */
import Carrousel from 'components/carrousel/Carrousel';
import { getNowPlaying, getPopular, getTopRated, getUpcoming } from 'services';
import { CardsProps } from 'components/card/types';
/*
    #   #  #       #   #   #
    #   #   #  #  #    #   #
    # # #    #   #     # # #
*/

const Home = () => {
    const [popular, setPopular] = React.useState<Array<CardsProps>>([]);
    const [topRated, setTopRated] = React.useState<Array<CardsProps>>([]);
    const [nowPlaying, setNowPlaying] = React.useState<Array<CardsProps>>([]);
    const [upcoming, setUpcoming] = React.useState<Array<CardsProps>>([]);

    function movieList (data:any): Array<CardsProps> {
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
        async function getPopularMovies() {
            const response = await getPopular();
            let list = movieList(response.data.results);
            setPopular(list);
        };
        async function getTopRatedMovies() {
            const response = await getTopRated();
            let list = movieList(response.data.results);
            setTopRated(list);
        };
        async function getNowPlayingMovies() {
            const response = await getNowPlaying();
            let list = movieList(response.data.results);
            setNowPlaying(list);
        };
        async function getUpcomingMovies() {
            const response = await getUpcoming();
            let list = movieList(response.data.results);
            setUpcoming(list);
        };
        getPopularMovies();
        getTopRatedMovies();
        getNowPlayingMovies();
        getUpcomingMovies();
      }, []);

    return (
        <div>
            <Carrousel title="POPULAR" movies={popular} link='/popular' />
            <Carrousel title="TOP RATED" movies={topRated} link='/top-rated' />
            <Carrousel title="NOW PLAYING" movies={nowPlaying} link='/now-playing' />
            <Carrousel title="UPCOMING" movies={upcoming} link='/upcoming' />
        </div>
    )
}

export default Home
