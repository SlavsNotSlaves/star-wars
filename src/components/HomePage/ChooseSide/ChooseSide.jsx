import propTypes from 'prop-types';
import { useTheme, THEME_DARK, THEME_LIGHT, THEME_NEUTRAL } from '@context/ThemeProvider';

import styles from './ChooseSide.module.css';

const ChooseSide = () => {
   const isTheme = useTheme()

   return (
      <>
         {isTheme.theme}
         <button onClick={() => isTheme.change(THEME_LIGHT)}>light</button>
         <button onClick={() => isTheme.change(THEME_DARK)}>dark</button>
         <button onClick={() => isTheme.change(THEME_NEUTRAL)}>neutral</button>
      </>
   );
}

ChooseSide.propTypes = {
   // text: propTypes.string
}

export default ChooseSide;
