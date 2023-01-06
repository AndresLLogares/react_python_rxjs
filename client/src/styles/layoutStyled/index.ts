import styled from 'styled-components'
import { Colors } from '../colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  flex-direction: column;
  background-color: ${Colors.white};
  @media (max-width: 1024px) {
    height: fit-content;
  }
`;