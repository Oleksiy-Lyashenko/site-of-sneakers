import img from '../assets/images/image-product-1-thumbnail.jpg';
import del from '../assets/images/icon-delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import { removeCart } from '../redux/actions/count';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, sum } = useSelector(item => item.count);

  const cleanCart = () => {
    dispatch(removeCart())
  }

  return (
    <div className="cart">
      <h4 className="cart__title">Cart</h4>

      <div className="cart__line"></div>

      {cart > 0 ? (
        <div className="cart__content">
          <div className="cart__main">
            <img src={img} alt="" className="cart__img" />

            <div className="cart__block">
              <p className="cart__name">Fall Limited Edition Sneakers</p>
              <p className="cart__price">
                $125.00 x {cart} <span className="cart__sum">${sum}.00</span>
              </p>
            </div>

            <img src={del} alt="" className="cart__del" onClick={cleanCart} />
          </div>

          <Button>Checkout</Button>
        </div>
      ) : (
         <p className="cart__text">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;