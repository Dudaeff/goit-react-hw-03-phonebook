import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 0 auto;
  font-weight: 600;
  background-color: green;
  color: white;
  transition: transform 250ms linear;
  :hover {
    transform: scale(1.1);
  }
`;
