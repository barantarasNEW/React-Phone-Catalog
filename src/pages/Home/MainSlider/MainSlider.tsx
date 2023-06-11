import Slider from 'react-slick';
import MainSliderBtn from '../MainSliderBtn/MainSliderBtn';
import { images, mainSlickSettings } from './constants';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './MainSlider.scss';

const settings = {
  ...mainSlickSettings,
  nextArrow: <MainSliderBtn img="./icons/right.svg" />,
  prevArrow: <MainSliderBtn img="./icons/left.svg" />,
  customPaging: () => <button type="button" aria-label="pagination" />,
};

const MainSlider = () => (
  <section className="page__section">
    <div className="container">
      <Slider {...settings}>
        {images.map(img => (
          <img
            key={img}
            src={img}
            alt="banner"
          />
        ))}
      </Slider>
    </div>
  </section>
);

export default MainSlider;
