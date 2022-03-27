import logo from '../assets/images/logo.svg';
import cart from '../assets/images/icon-cart.svg';
import user from '../assets/images/image-avatar.png';
import menu from '../assets/images/icon-menu.svg';
import { useEffect, useRef, useState } from 'react';
import Cart from './Cart';
import { useDispatch } from 'react-redux';
import { visibleMenu } from '../redux/actions/visible';

// import Menu from './Menu';

const Header = () => {
  const [visibleCart, setVisibleCart] = useState(false);
  const cartRef = useRef();
  const dispatch = useDispatch();

  const showMenu = () => {
    dispatch(visibleMenu());
  };

  const getCart = () => {
    setVisibleCart(!visibleCart);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(cartRef.current)) {
      setVisibleCart(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

  }, []);

  return (
    <nav className="header">
      <div className="block">
        <img src={menu} alt="" className="header__icon" onClick={showMenu}/>

        <a href="/">
          <img src={logo} alt="" />
        </a>

        <ul className="nav">
          <a href="/" className="nav__link">
            <li className="nav__item">Collection</li>
          </a>
          <a href="/" className="nav__link">
            <li className="nav__item">Men</li>
          </a>
          <a href="/" className="nav__link">
            <li className="nav__item">Women</li>
          </a>
          <a href="/" className="nav__link">
            <li className="nav__item">About</li>
          </a>
          <a href="/" className="nav__link">
            <li className="nav__item">Contact</li>
          </a>
        </ul>
      </div>

      <div className="block" ref={cartRef}>
        <img src={cart} alt="" className="nav__cart" onClick={getCart} />

        <a href="/">
          <img src={user} alt="" className="header__img" />
        </a>

        {visibleCart && <Cart />}
      </div>
    </nav>
  );
};

export default Header;
