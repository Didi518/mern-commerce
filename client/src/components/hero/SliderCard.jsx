import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { sData } from '../../constants/categories';

const SliderCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => <ul style={{ margin: '0px' }}>{dots}</ul>,
  };

  return (
    <>
      <Slider {...settings}>
        {sData.map((item, index) => (
          <div className="box d_flex top" key={index}>
            <div className="left">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button className="btn-primary">Acheter</button>
            </div>
            <div className="right">
              <img src={item.cover} alt="item.title" />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderCard;
