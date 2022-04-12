import propTypes from 'prop-types';
import styles from './PersonPhoto.module.css';

const PersonPhoto = ({ personPhoto, personName }) => {
   return (
      <div className={styles.container}  >
         <img className={styles.photo} src={personPhoto} alt={personName} />
      </div>
   );
}

PersonPhoto.propTypes = {
   personPhoto: propTypes.string,
   personName: propTypes.string,
}

export default PersonPhoto;
