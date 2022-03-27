import { useDispatch } from 'react-redux';
import close from '../assets/images/icon-close.svg'
import { visibleMenu } from '../redux/actions/visible';

const Menu = () => {
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(visibleMenu());
  }

  return (
    <div className="menu">
      <div className="menu__content">
        <img src={close} alt="" className='menu__close' onClick={closeMenu}/>

        <ul className="menu__nav">
          <a href="/" className="menu__link">
            <li className="menu__item">Collections</li>
          </a>
          <a href="/" className="menu__link">
            <li className="menu__item">Men</li>
          </a>
          <a href="/" className="menu__link">
            <li className="menu__item">Women</li>
          </a>
          <a href="/" className="menu__link">
            <li className="menu__item">About</li>
          </a>
          <a href="/" className="menu__link">
            <li className="menu__item">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Menu;