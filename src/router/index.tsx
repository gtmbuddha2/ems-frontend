import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../views/dashboard/Dashboard';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);
