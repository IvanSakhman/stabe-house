import { createGlobalStyle } from 'styled-components';
import Inter from '../fonts/Inter-Regular.ttf';
import SemiBoldInter from '../fonts/Inter-SemiBold.ttf';
import BoldInter from '../fonts/Inter-Bold.ttf';
import NoeText from '../fonts/NoeText-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
    }

  @font-face {
    font-family: 'Inter';
    src: url(${BoldInter}) format('truetype');
    font-weight: 700;
    display: 'Arial', sans-serif;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${SemiBoldInter}) format('truetype');
    font-weight: 600;
    display: 'Arial', sans-serif;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${Inter}) format('truetype');
    font-weight: 400;
    display: 'Arial', sans-serif;
  }

  @font-face {
    font-family: 'Noe Text';
    src: url(${NoeText}) format('truetype');
    font-weight: 400;
    display: 'Georgia', serif;
  }

  :root {
    --black: #000000;
    --white: #FFFFFF;
    --blueDarkest: #001c24;
    --orange: #ff6d00;
    --darkOrange: #d05c05;
    --lightGray: #e3e3e3;
    --grey: #dbdbdb;
    --greyBright: #ECECEC;
    --greyDark: #B8B8B8;
    --greyDarker: #676767;
    --hover: #ff9e59;
    --light: #F9F0E8;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
