import styled from "styled-components";
import type { CSSProperties } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 16px;
  width: auto;
  height: 100%;
  margin: 20px;
  font-size: xx-large;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 481px;
  height: 100%;
`;

export const Item = styled.li`
  // 요소가 원래 크기보다 커질 수 있...
  flex-shrink: 0;

  width: 150px;
  height: 150px;
  list-style: none;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Image = styled.img<{ objectFit?: CSSProperties["objectFit"] }>`
  height: 100%;
  width: 100%;
  /* object-fit: cover; */
  ${({ objectFit }) => objectFit && `object-fit:${objectFit};`}
  box-shadow: 5px 7px 10px gray;
  z-index: 1;
`;

export const Button = styled.button`
  position: relative;
  padding: 10px 30px;
  border-radius: 15px;
  font-family: "paybooc-Light", sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  margin: 5px 0 20px;

  border: 3px solid #6aafe6;
  color: #6e6e6e;
  &:hover {
    background-color: #6aafe6;
    color: #d4dfe6;
    letter-spacing: 2px;
    transform: scale(1.2);
    cursor: pointer;
  }
  &:active {
    transform: scale(1.5);
  }

  /* @keyframes ring {
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
  min-width: 100px;
  min-height: 40px;
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
  } */
`;
