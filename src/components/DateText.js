import React from 'react';
import styled from 'styled-components';

function DateText({ text }) {
  return (
    <Container>
      <DateContainer>{text}</DateContainer>
    </Container>
  );
}

export default DateText;

const Container = styled.div`
  position: absolute;
  margin-top: 280px;
`;

const DateContainer = styled.p`
  margin: 0;
  font-size: 15px;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
`;
