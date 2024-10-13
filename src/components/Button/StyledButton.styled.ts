import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &.customBtn {
    background-color: green;
    color: yellow;
  }
`;