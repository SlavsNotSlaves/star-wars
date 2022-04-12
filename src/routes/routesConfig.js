import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';

const routesConfig = [
   { path: '/', element: <HomePage /> },
   { path: '/people', element: <PeoplePage /> },
]

export default routesConfig