import styled from 'styled-components';
import { withTheme } from "@material-ui/core/styles";

export const Hero = withTheme(styled('section')`
  padding: 0px 0px;

  @media(max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
    padding-top: 0px;
    min-height: initial;
  }

  .inner-wrapper {
    align-items: center;
    display: flex;
    margin: auto;
    justify-content: space-around;

    @media(max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
      flex-direction: column;
    }

    .featured {
      position: relative;
      margin: 0;
      
      &__image {
        margin-left: 0px;
        width: 100%;
        max-height: 600px;
        z-index: -1;

        @media(max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
          margin: 0;
          width: 100vw;
          margin: auto;
        }
      }

      &__shield {
        position: absolute;

        &--super-small {
          width: 62px;
          top: 540px;
          left: 820px;
          filter: blur(5px);
        }
        
        &--small {
          width: 117px;
          top: 530px;
          left: 0;
        }
        
        &--regular {
          width: 137px;
          top: 110px;
          left: 827px;
        }
        
        &--big {
          width: 300px;
          top: 805px;
          left: 1140px;
        }

        @media(max-width: ${({ theme }) => `${theme.breakpoints.values.sm}px`}) {
          display: none;

          &--small {
            display: block;
            top: 400px;
            left: initial;
            right: -100px;
            width: 150px;
          }
        }
      } 
    }
  }
`);
