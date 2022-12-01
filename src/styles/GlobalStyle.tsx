import { Global, css } from '@emotion/react';
// import  createGlobalStyle  from '@emotion/styled';

const style = css`
  * {
    /* color: #737373; */
  }

  body {
    box-sizing: border-box;
  }
  :root {
    --orange: #ff5400;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
