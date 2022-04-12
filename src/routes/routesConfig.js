import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage';
import PersonPage from '../containers/PersonPage/PersonPage';

const routesConfig = [
   { path: '/', element: <HomePage /> },
   { path: '/people', element: <PeoplePage /> },
   { path: '/people/:id', element: <PersonPage /> },
   { path: '*', element: <NotFoundPage /> },
]

export default routesConfig