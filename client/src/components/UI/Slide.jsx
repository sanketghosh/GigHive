import Slider from "infinite-react-carousel";

const Slide = ({ slidesToShow, arrowsScroll, children }) => {
  return (
    <section className='mt-5'>
      <div className='max-w-7xl mx-auto px-3 py-4'>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </section>
  );
};

export default Slide;
