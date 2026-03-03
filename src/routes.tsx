import { createBrowserRouter } from 'react-router';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage.tsx';
import GameDetailPage from './pages/GameDetailPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'games/:slug', element: <GameDetailPage /> },
    ],
  },
]);
export default router;
