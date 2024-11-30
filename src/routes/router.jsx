import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Root from '../Root/Root';
import Login from '../components/Login';
import Register from '../components/Register';
import AddCoffee from '../components/AddCoffee';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/coffeee`),
      },

      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/addcoffee',
        element: <AddCoffee></AddCoffee>,
      },
    ],
  },
]);

export default router;
