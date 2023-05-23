import { Home, Favorites, Popular, NowPlaying, TopRated } from '../pages';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { ROUTES } from './constants';
import { MovieDetails } from 'pages/MovieDetails';
import { NotFound } from 'pages/NotFound';

const routes: RouteObject[] = [
    {
        path: '/', element: <PublicRouter/>,
        children: [
            {index:true, element: <Home/>,},
            {path: ROUTES.POPULAR, element: <Popular/>},
            {path: ROUTES.TOP_RATED, element: <TopRated/>},
            {path: ROUTES.NOW_PLAYING, element: <NowPlaying/>},
            {path: ROUTES.MY_FAVORITES, element: <Favorites/>},
            {path: ROUTES.MOVIE, element: <MovieDetails/>},
            {path: ROUTES.NOT_FOUND, element: <NotFound/>},
        ]
    },
];

export const router = createBrowserRouter(routes);