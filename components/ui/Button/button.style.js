import css from 'styled-jsx/css';
import { themeColors } from 'dev-configs/style-config/colors';

const buttonStyles = css`
  .button {
    @mixin flexBoxCenter {
      padding: 12px;
      background: #fe4066;
      color: #fff;
      border-radius: 40px;
      font-weight: 400;
      cursor: pointer;
      transition: 0.3s;

      &.small {
        font-size: 13px;
      }

      &.medium {
        font-size: 18px;
      }

      &.strech-full {
        width: 100%;
      }

      &.strech-half {
        width: 50%;
      }

      &.strech-auto {
        width: auto;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export default buttonStyles;
