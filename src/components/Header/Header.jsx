import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

import Favorite from '@components/Favorite';
import { useTheme } from '@context/ThemeProvider';
import { THEME_DARK, THEME_LIGHT, THEME_NEUTRAL } from '@context/ThemeProvider';
import Menu from '@components/Menu';

import imgDroid from './img/droid.svg'
import imgLightsaber from './img/lightsaber.svg'
import imgSpaceStation from './img/space-station.svg'

import styles from './Header.module.css';

const Header = () => {
   const [icon, setIcon] = useState(imgSpaceStation)
   const [menuActive, setMenuActive] = useState(false)
   const isTheme = useTheme()

   useEffect(() => {
      switch (isTheme.theme) {
         case THEME_LIGHT: setIcon(imgLightsaber); break;
         case THEME_DARK: setIcon(imgSpaceStation); break;
         case THEME_NEUTRAL: setIcon(imgDroid); break;

         default: setIcon(imgSpaceStation);
      }
   }, [isTheme])

   const switchMenu = () => {
      setMenuActive(!menuActive)
   }

   return (
      <div className={styles.container}>
         <img className={styles.logo} src={icon} alt="Star Wars" />

         <div onClick={switchMenu} className={styles.header__menu}>

            <Menu switchMenu={switchMenu} menuActive={menuActive} />

            <ul className={classNames(styles.list__container, menuActive && styles.active)}>
               <li><NavLink to="/">Home</NavLink></li>
               <li><NavLink to="/people/?page=1">People</NavLink></li>
               <li><NavLink to="/search">Search</NavLink></li>
               <li><NavLink to="/not-found">Not Found</NavLink></li>
               <li><NavLink to="/fail">Fail</NavLink></li>
            </ul>

         </div>
         <Favorite />
      </div>
   );
}



export default Header;
