import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  & * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  };
  body {
    margin: 0;
  };
`;
