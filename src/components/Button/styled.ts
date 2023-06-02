import styled from "styled-components";

import {ButtonProps} from "./index";

export const StyledButton = styled.button<ButtonProps>`





@keyframes ring {
    0% {
      width: 30px;
      height: 30px;
      opacity: 1;
    }
    100% {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
  position: relative;
  border: none;
  /* min-width: 100px;
  min-height: 40px; */
  background: linear-gradient(
    90deg,
    rgba(129, 230, 217, 1) 0%,
    rgba(79, 209, 197, 1) 100%
  );
  border-radius: 1000px;
  color: darkslategray;
  cursor: pointer;
  box-shadow: 8px 8px 20px rgba(79, 209, 197, 0.64);
  font-weight: 700;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  &:hover::after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 6px solid #00ffcb;
    position: absolute;
    z-index: -2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
  }







  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: none;
  border-radius: 50vh;
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  color: ${({ color }) => color || "#333"};
  ${({ pointer }) => pointer && `cursor: pointer;`}
  /* & hover {
    } */
    > a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
`;