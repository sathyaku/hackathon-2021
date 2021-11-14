import css from 'styled-jsx/css';

const backgroundColor = '#eee';

const layOutStyle = css`
  $color: red;
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin: 100px auto;

    @mixin desktop {
      max-width: 1150px;
    }
  }
`;

export default layOutStyle;
