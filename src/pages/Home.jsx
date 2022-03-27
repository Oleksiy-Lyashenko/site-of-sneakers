import cartWhite from '../assets/images/icon-cart-white.svg';
import imgMain from '../assets/images/image-product-1.jpg';
import img1 from '../assets/images/image-product-1-thumbnail.jpg';
import img2 from '../assets/images/image-product-2-thumbnail.jpg';
import img3 from '../assets/images/image-product-3-thumbnail.jpg';
import img4 from '../assets/images/image-product-4-thumbnail.jpg';
import plus from '../assets/images/icon-plus.svg';
import minus from '../assets/images/icon-minus.svg';

import { useDispatch, useSelector } from 'react-redux';
import { addCount, addInCart, removeCount } from '../redux/actions/count';
import Button from '../components/Button';
import { visibleCarousel } from '../redux/actions/visible';
import PhotoCarousel from '../components/PhotoCarousel';

const Home = () => {
  const dispatch = useDispatch();
  const {count, price} = useSelector(item => item.count);

  const screenWidth = window.screen.width;

  console.log(screenWidth);

  const addItem = () => [
    dispatch(addCount())
  ]

  const removeItem = () => [
    dispatch(removeCount())
  ]

  const addCart = () => {
    dispatch(addInCart())
  }

  const getCarousel = () => {
    dispatch(visibleCarousel())
  }

  return (
    <div className="container">
      <div className="photo">
        <img src={imgMain} alt="" className="photo__main" />

        <div className="photo__carousel">
          <img
            src={img1}
            alt=""
            className="photo__line photo__line--active"
            onClick={getCarousel}
          />

          <img src={img2} alt="" className="photo__line" onClick={getCarousel} />

          <img src={img3} alt="" className="photo__line" onClick={getCarousel} />

          <img src={img4} alt="" className="photo__line" onClick={getCarousel} />
        </div>
      </div>

      <div className="carousel__mobile">
        <PhotoCarousel />
      </div>

      <div className="describe">
        <h2 className="describe__company">sneakers company</h2>

        <span className="describe__title">Fall Limited Edition Sneakers</span>

        <p className="describe__text">
          These low profile sneakers are your perfect casual wear companion. Fuaturing a durable
          rubber outer sole, they'll withstand evetything the weather can offer.
        </p>

        <div className="describe__price-block">
          <span className="describe__price">${price}.00</span>

          <span className="describe__sale">50%</span>
        </div>

        <span className="describe__price-prev">$250.00</span>

        <div className="button">
          <div className="button__count">
            <img src={minus} alt="" className="button__click" onClick={removeItem} />

            <span className="button__number">{count}</span>

            <img src={plus} alt="" className="button__click" onClick={addItem} />
          </div>

          <Button onClick={addCart}>
            <img src={cartWhite} alt="" className="button__cart" />

            <span className="button__text" onClick={addCart}>
              Add to cart
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
