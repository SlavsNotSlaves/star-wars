import { useNavigate } from 'react-router';
import iconBack from './img/back.svg';

import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {

   const navigate = useNavigate()

   const handleGoBack = event => {
      event.preventDefault()
      navigate(-1)
   }

   return (
      <a className={styles.link} href='#' onClick={handleGoBack}>
         <img className={styles.link__img} src={iconBack} alt='Go back' />
         <span>Go back</span>
      </a>
   );
}



export default PersonLinkBack;
