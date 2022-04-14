import classNames from 'classnames';
import propTypes from 'prop-types';
import styles from './Menu.module.css';

const Menu = ({ switchMenu, menuActive }) => {
   return (
      <>
         <div
            onClick={switchMenu}
            className={classNames(styles.menu__icon, menuActive && styles.active)}
         >
            <span></span>
         </div>
      </>
   );
}

Menu.propTypes = {
   switchMenu: propTypes.func,
   menuActive: propTypes.bool
}

export default Menu;
