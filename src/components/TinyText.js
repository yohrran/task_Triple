import React from 'react';
import styled from 'styled-components';

function TinyText({ text }) {
  return <TinyContainer>{text}</TinyContainer>;
}

export default TinyText;

const TinyContainer = styled.p`
  margin: 0;
  font-size: 14px;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
`;
