import classNames from 'classnames';
import propTypes from 'prop-types';

import icon from './img/cancel.svg'

import '../index.css'
import styles from './UiInput.module.css';

const UiInput = ({ value, handleInputChange, placeholder, classes }) => {
   return (
      <div className={classNames(styles.wrapper__input, classes)} >
         <input
            className={styles.input}
            type="text"
            value={value}
            onChange={(event) => handleInputChange(event.target.value)}
            placeholder={placeholder}
         />
         <img
            className={classNames(styles.clear, !value && styles.clear__disabled)}
            onClick={() => value && handleInputChange('')}
            src={icon}
            alt="Clear"
         />
      </div>
   );
}

UiInput.propTypes = {
   value: propTypes.string,
   handleInputChange: propTypes.func,
   placeholder: propTypes.string,
   classes: propTypes.string,
}

export default UiInput;
