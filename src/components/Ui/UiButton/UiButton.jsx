import propTypes from 'prop-types';
import classNames from 'classnames';

import '../index.css';
import styles from './UiButton.module.css';

const UiButton = ({ text, onClick, disabled, theme = 'dark', classes }) => {
   return (
      <>
         <button
            onClick={onClick}
            className={classNames(styles.button, styles[theme], classes)}
            disabled={disabled}
         >
            {text}
         </button>
      </>
   );
}

UiButton.propTypes = {
   text: propTypes.string,
   onClick: propTypes.func,
   disabled: propTypes.bool,
   theme: propTypes.string,
   classes: propTypes.string,
}

export default UiButton;
