import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 75%;
  background-color: green;
`;

export const Contact = styled.div`
  width: 100%;
  height: 80px;
  line-height: 80px;
  padding-left: 20px;
`;

export const ContentDialog = styled.div`
  height: calc(100vh - 180px);
  background-color: #d2d2d2;
`;

export const Dialog = styled.div`
  display: flex;
  align-items: flex-end;
  height: calc(100vh - 230px);
  overflow-y: scroll;
`;

export const BoxInputMessage = styled.div`
  display: flex;
  height: 50px;
  background-color: white;
`;

export const Input = styled.input`
  width: 80%
  height: 50px;
  padding-left: 10px;
`;

export const Button = styled.button`
  width: 20%
  height: 50px;
  cursor: pointer;
`;

