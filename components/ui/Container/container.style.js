import css from 'styled-jsx/css';

const containerStyles = css`
  .container {
    @mixin flexBox {
      width: 100%;
      @mixin tabletToDesktop {
        max-width: 1150px;
      }
      &.column {
        flex-direction: column;
      }
    }
  }
`;

export default containerStyles;





