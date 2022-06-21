import React from 'react';
import styled from 'styled-components';

function Text({ text }) {
  return <TextContainer>{text}</TextContainer>;
}

export default React.memo(Text);

const TextContainer = styled.p`
  margin: 0 0 10px 0;
`;
