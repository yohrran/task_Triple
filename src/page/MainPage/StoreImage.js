import React from 'react';
import styled from 'styled-components';

function StoreImage({ src, alt }) {
  return <StoreImageContainer src={src} alt={alt} />;
}

export default StoreImage;

const StoreImageContainer = styled.img`
  width: 54px;
  height: 54px;
  margin: 0 10px 0 0;
`;
