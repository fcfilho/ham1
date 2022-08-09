import styled from 'styled-components';

export const Button = styled.button`
  background-color: rgba(14, 92, 96, 0.01);
  border: 1px solid #ccab63;
  padding: 12px 25px;
  color: #ccab63;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: rgba(204, 171, 99, 0.3);
    border: 1px solid #0e5c60;
    color: #0e5c60;
  }
`;
