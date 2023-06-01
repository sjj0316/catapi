import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 5px 7px 10px gray;
`;

export const Button = styled.button`
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
`;
