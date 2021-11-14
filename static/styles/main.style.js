import css from 'styled-jsx/css';

const mainStyle = css`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2ch;
    height: 100vh;
  }

  h1 {
    font-size: 70px;
    color: #777;
    font-weight: 900;

    @mixin desktop {
      font-size: 170px;
    }
  }

  h2 {
    font-size: 55px;
    color: #fe4066;
    font-weight: 900;
    @mixin desktop {
      font-size: 135px;
    }
  }

  button {
    margin-top: 100px;
    padding: 12px;
    width: 200px;
    background: #fe4066;
    color: #fff;
    font-size: 21px;
    border-radius: 40px;
    font-weight: 400;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default mainStyle;
