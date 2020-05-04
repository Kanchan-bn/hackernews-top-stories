import styled, { createGlobalStyle } from 'styled-components';
import { px2vw } from '../util/px2vw';

export const Global = createGlobalStyle`
  * {
    margin: 10;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(12)};
      margin: ${px2vw(10)};

      @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        font-size: ${px2vw(40)};
        margin: ${px2vw(10)};
      }

      @media (min-width: 768px) {
        font-size: ${px2vw(30)};
        margin: ${px2vw(10)};
      }

      @media (max-width: 1024px) {
        font-size: ${px2vw(30)};
        margin: ${px2vw(10)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(12)};
        margin: ${px2vw(10)};
      }

      @media (min-width: 1440px) {
        font-size: ${px2vw(14)};
        margin: ${px2vw(10)};
      }
    }
`;

export const Title = styled.div`
    font-size: ${px2vw(30)};

    @media only screen and (max-width: 768px) {
      /* For mobile phones: */
      font-size: ${px2vw(40)};
      margin: ${px2vw(10)};
    }

    @media (min-width: 768px) {
      font-size: ${px2vw(40)};
    }

    @media (max-width: 1024px) {
      font-size: ${px2vw(40)};
      margin: ${px2vw(10)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(24)};
    }

    @media (min-width: 1440px) {
      font-size: ${px2vw(26)};
      margin: ${px2vw(10)};
    }
`;

export const StoryContainer = styled.div`
  margin: ${px2vw(10)};
  font-size: ${px2vw(40)};

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    font-size: ${px2vw(40)};
    margin: ${px2vw(10)};
  }

  @media (min-width: 768px) {
    font-size: ${px2vw(30)};
    margin: ${px2vw(10)};
  }

  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (orientation: portrait) {
    font-size: ${px2vw(18)};
    margin: ${px2vw(10)};
  }

  @media (min-width: 1025px) {
    font-size: ${px2vw(12)};
    margin: ${px2vw(10)};
  }

  @media (min-width: 1440px) {
    font-size: ${px2vw(14)};
    margin: ${px2vw(10)};
  }
  
`;

export const CommentTitle = styled.div`
  font-size: ${px2vw(12)};

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    font-size: ${px2vw(40)};
  }

  @media (min-width: 768px) {
    font-size: ${px2vw(30)};
  }

  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (orientation: portrait) {
    font-size: ${px2vw(20)};
  }

  @media (min-width: 1025px) {
    font-size: ${px2vw(10)};
  }

  @media (min-width: 1440px) {
    font-size: ${px2vw(12)};
  }

`;

export const StoryComments = styled.div`
  padding: ${px2vw(10)};
  font-size: ${px2vw(12)};

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    font-size: ${px2vw(40)};
    padding: ${px2vw(10)};
  }

  @media (min-width: 768px) {
    font-size: ${px2vw(30)};
    padding: ${px2vw(10)};
  }

  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (orientation: portrait)  {
    font-size: ${px2vw(18)};
    padding: ${px2vw(20)};
  }

  @media (min-width: 1025px) {
    font-size: ${px2vw(10)};
    margin: ${px2vw(10)};
  }

  @media (min-width: 1440px) {
    font-size: ${px2vw(12)};
    margin: ${px2vw(10)};
  }

`;
