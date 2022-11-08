import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import ServicesPage from '../pages/ServicesPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ServiceDetails from '../pages/ServiceDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
            { path: '/services', element: <ServicesPage /> },
            { path: '/blog', element: <Blog /> },
            { path: '/services/:id', element: <ServiceDetails /> },
        ],
    },
]);
