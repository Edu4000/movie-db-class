import { About, Home, Login, Movies, Series } from '../pages';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { ROUTES } from './constants';

const routes: RouteObject[] = [
    {
        path: '/', element: <PublicRouter/>,
        children: [
            {index:true, element: <Home/>,},
            {path: ROUTES.MOVIES, element: <Movies/>},
            {path: ROUTES.SERIES, element: <Series/>},
            {path: ROUTES.ABOUT, element: <About/>},
            {path: ROUTES.LOGIN, element: <Login/>},
        ]
    },
    {
        path: '/admin', element: <PrivateRouter/>,
        children: [
            {path: '/admin', element: <Home/>,},
        ]
    },
];

export const router = createBrowserRouter(routes);