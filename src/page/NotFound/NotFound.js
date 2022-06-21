import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Text from '../../components/Text';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>404</h1>
      <Text text="잘못된 페이지입니다 아래 버튼을 눌러주세요" />
      <button onClick={() => navigate('/')}>메인페이지</button>
    </Container>
  );
}

export default NotFound;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 100px;
    height: 40px;
    padding: 5px;
    border: none;
    border-radius: 10px;
    margin-left: 10px;
    cursor: pointer;
  }
`;
