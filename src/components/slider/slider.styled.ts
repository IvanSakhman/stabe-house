import styled from 'styled-components';
import Slider from 'react-slick';

export const StyledSlider = styled(Slider)<{ isDark?: boolean }>`
  .slick-slider {
    display: flex;
    align-items: center;
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .slick-dots {
    bottom: -64px;
  }

  .slick-dots li button {
    &::before {
      background-color: var(${({ isDark }) => (isDark ? '--greyDark' : '--darkOrange')});
      color: transparent;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      opacity: 1;
    }
  }

  .slick-dots .slick-active button {
    &::before {
      background-color: var(${({ isDark }) => (isDark ? '--orange' : '--light')});
      color: transparent;
      border-radius: 50%;
    }
  }
`;
