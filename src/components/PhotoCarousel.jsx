import { Carousel } from 'react-carousel-minimal';

const img = [
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

const PhotoCarousel = () => {
  return (
    <>
      <Carousel
        data={img}
        width="100%"
        height="300px"
        style={{
          textAlign: 'center',
          maxWidth: '500px',
          maxHeight: '500px',
          margin: '0 auto 20px',
        }}
      />
    </>
  );
};

export default PhotoCarousel;