import { useContext, useMemo } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router';
import './Header.scss';

import { MenuContext } from '../../contexts/MenuContext';

import Logo from '../Logo/Logo';
import Navbar from './Navbar/Navbar';
import Shopbar from './Shopbar/Shopbar';
import ShopbarSearch from './Shopbar/ShopbarSearch/ShopbarSearch';
import { searchAvailableIn } from './constants';

const Header = () => {
  const { isMenu, toggleMenu } = useContext(MenuContext);
  const location = useLocation().pathname;
  const isSearchAvailable = useMemo(() => {
    return searchAvailableIn.includes(location);
  }, [searchAvailableIn, location]);

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo classNames="header__logo" />
          <div className="header__nav">
            <Navbar />
          </div>
        </div>

        <div className="header__right">
          {isSearchAvailable && (
            <ShopbarSearch />
          )}
          <Shopbar />
          <button
            type="button"
            className="header__menu"
            onClick={toggleMenu}
          >
            {isMenu
              ? <FaTimes />
              : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
