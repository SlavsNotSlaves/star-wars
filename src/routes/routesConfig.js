import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage';

const routesConfig = [
   { path: '/', element: <HomePage /> },
   { path: '/people', element: <PeoplePage /> },
   { path: '*', element: <NotFoundPage /> },
]

export default routesConfig