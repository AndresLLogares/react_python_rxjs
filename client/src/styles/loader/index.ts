import styled, { keyframes } from "styled-components";
import { Colors } from "../colors";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  opacity: 1;
  background-image: radial-gradient(#fba92c 0.7px, #ffffff 0.7px);
  background-size: 15px 15px;
  z-index: 3;
  @media (max-width: 1024px) {
    height: fit-content;
    background-size: 15px 15px;
    overflow: hidden;
  }
`;

export const Spinner = styled.div`
  display: flex;
  margin-top: 20vh;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 5px solid ${Colors.pink};
  border-right: 5px solid ${Colors.pink};
  border-bottom: 5px solid ${Colors.pink};
  border-left: 8px solid ${Colors.black};
  background: transparent;
  width: 154px;
  height: 154px;
  border-radius: 50%;
`;
