import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'

import styles from './UiLoading.module.css';

const UiLoading = ({ theme = 'white', isShadow = true, classes }) => {

   const [loaderIcon, setLoaderIcon] = useState(null)

   useEffect(() => {
      switch (theme) {
         case 'black': setLoaderIcon(loaderBlack); break;
         case 'white': setLoaderIcon(loaderWhite); break;
         case 'blue': setLoaderIcon(loaderBlue); break;

         default: setLoaderIcon(loaderWhite);
      }
   }, [])

   return (
      <>
         <img className={classNames(styles.loader, isShadow && styles.shadow, classes)} src={loaderIcon} alt='Loader' />
      </>
   );
}

UiLoading.propTypes = {
   theme: propTypes.string,
   isShadow: propTypes.bool,
   classes: propTypes.string,
}

export default UiLoading;
