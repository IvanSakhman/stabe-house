import React from 'react';
import { StyledSlider } from './slider.styled';

const settings = {
  infinite: true,
  cssEase: 'linear',
  slidesToScroll: 1,
  swipe: true,
  swipeToSlide: true,
  autoplay: false,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  dots: true,
  arrow: false,
  speed: 500,
  slidesToShow: 1,
  nextArrow: <></>,
};

interface SliderProps {
  isDark?: boolean;
  children: React.ReactNode;
}

const Slider = ({ children, isDark }: SliderProps): JSX.Element => {
  return (
    <StyledSlider {...settings} isDark={isDark}>
      {children}
    </StyledSlider>
  );
};

export default Slider;
