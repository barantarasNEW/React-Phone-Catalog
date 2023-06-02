import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './MainSlider.scss';

import { images, additionalSettings } from './constants';

import MainSliderBtn from '../MainSliderBtn/MainSliderBtn';

const settings = {
  ...additionalSettings,
  nextArrow: <MainSliderBtn img="./icons/right.svg" />,
  prevArrow: <MainSliderBtn img="./icons/left.svg" />,
  customPaging: () => <button type="button" aria-label="paging" />,
};

const MainSlider = () => (
  <section className="page__section">
    <div className="container">
      <Slider
        {...settings}
      >
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
