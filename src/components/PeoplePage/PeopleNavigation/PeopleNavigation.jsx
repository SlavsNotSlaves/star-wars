import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {

   const handleChangeNext = () => getResource(nextPage)
   const handleChangePrev = () => getResource(prevPage)

   return (
      <div>
         <Link className={styles.link} to={`/people/?page=${counterPage - 1}`}>
            <button
               onClick={handleChangePrev}
               className={styles.buttons}
               disabled={!prevPage}
            >
               Previous
            </button>
         </Link>
         <Link className={styles.link} to={`/people/?page=${counterPage + 1}`}>
            <button
               onClick={handleChangeNext}
               className={styles.buttons}
               disabled={!nextPage}
            >
               Next
            </button>
         </Link>
      </div>
   );
}

PeopleNavigation.propTypes = {
   getResource: propTypes.func,
   prevPage: propTypes.string,
   nextPage: propTypes.string,
   counterPage: propTypes.number,
}

export default PeopleNavigation;
