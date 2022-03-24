import logo from './assets/images/logo.svg';
import cart from './assets/images/icon-cart.svg';
import user from './assets/images/image-avatar.png'

function App() {
  return (
    <div className="wrapper">
      <nav className="header">
        <div className="block">
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

        <div className="block">
          <a href="/" className="nav__cart">
            <img src={cart} alt="" />
          </a>
          <a href="/">
            <img src={user} alt="" className="header__img" />
          </a>
        </div>
      </nav>

      <div className="content">
        <div className="cart">
          <h4 className="cart__title">Cart</h4>
          <div className="cart__line"></div>
          <p className='cart__text'>Your cart is empty</p>
        </div>
      </div>
    </div>
  );
}

export default App;
