import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';
import { Success } from './pages/Success';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'success',
        element: <Success />,
      }
    ]
  }
]);