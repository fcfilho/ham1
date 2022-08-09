import styled, { css } from 'styled-components';
import { withTheme } from "@material-ui/core/styles";

export const AtuacaoSteps = withTheme(styled('article')`
  align-items: center;
  display: flex;
  height: 390px;
  max-width: 1440px;
  margin: auto;
  padding: 30px 0;
  position: relative;

  ${(props) => {
    if (props.inverted) {
      return css`
        flex-direction: row-reverse;
      `;
    }
  }};

  @media(max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
    flex-direction: column-reverse;
    height: initial;
    width: 100vw;
    padding: 0;
  }

  &:first-of-type {
    margin-top: 15px;
  }

  .content {
    background-color: transparent;
    box-sizing: border-box;
    ${(props) => props.inverted 
      ? css`padding: 39px 60px 39px 30px;` 
      : css`padding: 39px 39px 60px 39px;`
    };
    width: ${props => props.shrink ? props.shrink : '51%'};

    @media(max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
      width: 100vw;
      padding: 30px;
    }

    h3, p {
      margin: 0;
      margin-bottom: 30px;
    }

    h3 {
      font-size: 36px;
      line-height: 40px;
      color: #0e5c60;

      &.thin {
        font-size: 32px;

        @media(max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
          font-size: 26px;
          line-height: 30px;
        } 

        strong {
          display: block;
          font-size: 36px;

          @media(max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
            font-size: 28px;
          } 
        }
      }
    }

    p {
      color: #4c4c4c;
      padding-right: 30px;
      font-size: 20px;
      margin: 0;
      text-align: justify;

      @media(max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
        font-size: 18px;
      }
    }

    button {
      margin-top: 30px;
      margin-bottom: 15px;
    }
  }

  > img {
    /* height: ${({ imgSize }) => `${imgSize[1]}px`}; */
    height: auto;
    position: absolute;
    top: 51%;
    transform: translateY(-50%);
    max-width: ${({ imgSize }) => `${imgSize[0]}px`};
    width: 45vw;
    ${(props) => props.inverted ? css`left: 0` : css`right: 0`};

    @media(max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
      height: auto;
      width: 100vw;
      position: initial;
      top: initial;
      left: initial;
      transform: initial;
      padding: 20px;
    } 
  }

  .fader {
    position: absolute;
    top: 51%;
    transform: translateY(-51%);
    ${(props) => props.inverted ? css`left: 0` : css`right: 0`};
    max-width: ${({ imgSize }) => `${imgSize[0]}px`};
    height: ${({ imgSize }) => `${imgSize[1]}px`};
    width: 52vw;

    @media(max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
      position: static;
      top: initial;
      transform: none;
      width: 100vw;
      height: ${({ imgSize }) => `${imgSize[1] - 200}px`};
      margin-top: 40px;
    }

    img {
      max-width: ${({ imgSize }) => `${imgSize[0]}px`};
      max-height: ${({ imgSize }) => `${imgSize[1]}px`};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all .5s ease-in-out;
      width: 50vw;

      @media(max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
        top: 20px;
        left: 0;
        transform: none;
        width: 90vw;
        left: 50%;
        transform: translateX(-50%);
        max-height: ${({ imgSize }) => `${imgSize[1]}px`};
      }

      &.isActive {
        opacity: 1;
      }
    }
  }
`);