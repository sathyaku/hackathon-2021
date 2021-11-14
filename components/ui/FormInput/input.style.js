import css from 'styled-jsx/css';

const inputStyles = css`
  .form-input {
    @mixin flexBox {
      width: 100%;
      padding: 8px;
      margin: 0.3rem 0 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      height: 40px;
      font-size: 14px;
      font-weight: 400;
      outline: none;
    }
  }
`;

export default inputStyles;
