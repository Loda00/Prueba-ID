import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  background-color: #e5ecdd;
  border-top: 1px solid #979797;
  cursor: pointer;
`;

export const BoxPhoto = styled.div`
  height: 69px;
  width: 69px;
`;

export const Photo = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: orange;
`;

export const BoxLastMessage = styled.div`
  padding: 0 10px;
  width: 230px;
  overflow: hidden;
`;

export const LastMessage = styled.div`.
  height: 35px;
  line-height: 35px;
`;

export const Hour = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  line-height: 35px;
`;

export const DetailContact = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;