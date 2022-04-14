import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';
import PersonPage from '@containers/PersonPage';
import FavoritesPage from '@containers/FavoritesPage';
import SearchPage from '@containers/SearchPage';

const routesConfig = [
   { path: '/', element: <HomePage /> },
   { path: '/people', element: <PeoplePage /> },
   { path: '/people/:id', element: <PersonPage /> },
   { path: '/favorites', element: <FavoritesPage /> },
   { path: '/search', element: <SearchPage /> },
   { path: '*', element: <NotFoundPage /> },
]

export default routesConfig