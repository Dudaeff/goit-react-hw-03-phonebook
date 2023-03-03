import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const ListItem = styled.li`
  display: flex;
  column-gap: 5px;
  padding: 5px;

  border: 1px dashed black;
  border-radius: 5px;
`;

export const DeleteBtn = styled.button`
  margin-right: 0;
  margin-left: auto;
  padding: 2px 8px;
  background-color: red;
  color: white;
`;
