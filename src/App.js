import logo from './assets/images/logo.svg';
import cart from './assets/images/icon-cart.svg';
import cartWhite from './assets/images/icon-cart-white.svg';
import user from './assets/images/image-avatar.png'
import imgMain from './assets/images/image-product-1.jpg';

import img1 from './assets/images/image-product-1-thumbnail.jpg';
import img2 from './assets/images/image-product-2-thumbnail.jpg';
import img3 from './assets/images/image-product-3-thumbnail.jpg';
import img4 from './assets/images/image-product-4-thumbnail.jpg';

import plus from './assets/images/icon-plus.svg';
import minus from './assets/images/icon-minus.svg';

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

        <div className="cart" hidden>
          <h4 className="cart__title">Cart</h4>
          <div className="cart__line"></div>
          <p className="cart__text">Your cart is empty</p>
        </div>
      </nav>

      <div className="content">
        <div className="photo">
          <img src={imgMain} alt="" className="photo__main" />

          <div className="photo__carousel">
            <img src={img1} alt="" className="photo__line photo__line--active" />

            <img src={img2} alt="" className="photo__line" />

            <img src={img3} alt="" className="photo__line" />

            <img src={img4} alt="" className="photo__line" />
          </div>
        </div>

        <div className="describe">
          <h2 className="describe__company">sneakers company</h2>

          <span className="describe__title">Fall Limited Sneakers</span>

          <p className="describe__text">
            These low profile sneakers are your perfect casual wear companion. Fuaturing a durable
            rubber outer sole, they'll withstand evetything the weather can offer.
          </p>

          <div className="describe__price-block">
            <span className="describe__price">$125.00</span>

            <span className="describe__sale">50%</span>
          </div>

          <span className="describe__price-prev">$250.00</span>

          <div className="button">
            <div className="button__count">
              <img src={minus} alt="" className="button__click" />

              <span className="button__number">3</span>

              <img src={plus} alt="" className="button__click" />
            </div>

            <div className="button__bye">
              <img src={cartWhite} alt="" className='button__cart'/>

              <span className="button__number">Add to cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
