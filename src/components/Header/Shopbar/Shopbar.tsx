import { useContext } from 'react';
import './Shopbar.scss';

import { FavoritesContext } from '../../../contexts/FavoritesContext';
import { CartContext } from '../../../contexts/CartContext';

import ShopbarItemDyn from './ShopbarItemDyn/ShopbarItemDyn';

const Shopbar = ({ ...props }) => {
  const { favorites } = useContext(FavoritesContext);
  const { cart } = useContext(CartContext);

  return (
    <nav className="shopbar" style={{ ...props }}>
      <ul className="shopbar__list">
        <li className="shopbar__item">
          <ShopbarItemDyn
            to="/cart"
            img="./icons/cart.svg"
            productsLength={cart.length}
          />
        </li>
        <li className="shopbar__item">
          <ShopbarItemDyn
            img="./icons/favorite.svg"
            to="/favorites"
            productsLength={favorites.length}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Shopbar;
