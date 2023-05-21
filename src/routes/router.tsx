import { About, Home, Login, Movies, Series } from '../pages';
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
            {path: ROUTES.POPULAR, element: <Movies/>},
            {path: ROUTES.TOP_RATED, element: <Series/>},
            {path: ROUTES.NOW_PLAYING, element: <About/>},
            {path: ROUTES.MY_FAVORITES, element: <Login/>},
            {path: ROUTES.MOVIE, element: <MovieDetails/>},
            {path: ROUTES.NOT_FOUND, element: <NotFound/>},
        ]
    },
];

export const router = createBrowserRouter(routes);