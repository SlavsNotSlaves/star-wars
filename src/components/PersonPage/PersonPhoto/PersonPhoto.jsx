import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removePersonFromFavorite, setPersonToFavorite } from '@store/actions';

import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-fill.svg'

import styles from './PersonPhoto.module.css';

const PersonPhoto = ({ personFavorite, setPersonFavorite, personId, personPhoto, personName }) => {
   const dispatch = useDispatch()

   const dispatchFavoritePeople = () => {
      if (personFavorite) {
         dispatch(removePersonFromFavorite(personId))
         setPersonFavorite(false)
      } else {
         dispatch(setPersonToFavorite({
            [personId]: {
               name: personName,
               img: personPhoto,
            }
         }))
         setPersonFavorite(true)
      }
   }

   return (
      <>
         <div className={styles.container}>
            <img className={styles.photo} src={personPhoto} alt={personName} />

            <img className={styles.favorite}
               src={personFavorite ? iconFavoriteFill : iconFavorite}
               alt="favorite"
               onClick={dispatchFavoritePeople}
            />
         </div>

      </>
   );
}

PersonPhoto.propTypes = {
   personFavorite: propTypes.bool,
   setPersonFavorite: propTypes.func,
   personId: propTypes.string,
   personPhoto: propTypes.string,
   personName: propTypes.string,
}

export default PersonPhoto;
