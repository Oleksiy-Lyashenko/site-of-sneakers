import { Carousel } from 'react-carousel-minimal';
import { useDispatch } from 'react-redux';
import close from '../../assets/images/icon-close.svg';
import { visibleCarousel } from '../../redux/actions/visible';

const data = [
  {
    image: 'https://i.ibb.co/ZMpNHhn/image-product-1.jpg',
  },
  {
    image: 'https://i.ibb.co/TM6JVrk/image-product-2.jpg',
  },
  {
    image: 'https://i.ibb.co/286mGXz/image-product-3.jpg',
  },
  {
    image: 'https://i.ibb.co/cbRLfpw/image-product-4.jpg',
  },
];

const DesktopCarousel = () => {
  const dispatch = useDispatch();

  const closeCarousel = () => {
    dispatch(visibleCarousel());
  };

  return (
    <div className="carousel">
      <div className="carousel__content">
        <img src={close} alt="" className="carousel__close" onClick={closeCarousel} />

        <Carousel
          data={data}
          width="100%"
          height="200px"
          radius="15px"
          thumbnails={true}
          thumbnailWidth="120px"
          style={{
            textAlign: 'center',
            maxWidth: '500px',
            maxHeight: '500px',
            margin: '20px auto',
          }}
        />
      </div>
    </div>
  );
};

export default DesktopCarousel;
