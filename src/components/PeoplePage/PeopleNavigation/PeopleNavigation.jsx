import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UiButton from '@ui/UiButton';

import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {

   const handleChangeNext = () => getResource(nextPage)
   const handleChangePrev = () => getResource(prevPage)

   return (
      <div className={styles.container} >
         <Link className={styles.buttons} to={`/people/?page=${counterPage - 1}`}>
            <UiButton
               text='Previous'
               onClick={handleChangePrev}
               disabled={!prevPage}
            />
         </Link>
         <Link className={styles.buttons} to={`/people/?page=${counterPage + 1}`}>
            <UiButton
               text='Next'
               onClick={handleChangeNext}
               disabled={!nextPage}
            />
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
