import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Root from '../Root/Root';
import Login from '../components/Login';
import Register from '../components/Register';
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    // errorElement: <h1>Not Found</h1>,
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
      {
        path: '/update/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffeee/${params.id}`),
      },
    ],
  },
]);

export default router;
