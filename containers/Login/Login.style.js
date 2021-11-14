import css from 'styled-jsx/css';

const layOutStyle = css`
  .login {
    @mixin flexFromStart {
      position: fixed;
      margin: 30vh auto;
      width: 440px;
      padding: 20px 40px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 7px #dfdfdf;
      flex-direction: column;

      h1 {
        font-size: 18px;
        font-weight: 600;
        margin: 30px 0;
      }
      @mixin smallMobileOnly {
        width: 100%;
        height: 100vh;
        margin: 0 auto;
      }
    }
  }
  form {
    @mixin flexFromStart {
      flex-flow: column;
      gap: 1ch;
      width: 100%;

      .btn-container {
        width: 100%;
        margin: 20px auto;
      }
    }
  }

  label {
    font-weight: 600;
  }
  .error {
    margin: 0.5rem 0 0;
    color: brown;
  }
`;

export default layOutStyle;
