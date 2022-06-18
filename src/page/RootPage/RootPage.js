/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import Countup from '../../components/Count';

const tripleImage = '/img/triple2x.png';
const googleStore = '/img/play-store2x.png';
const appleBadge = '/img/badge-apple4x.png';
function RootPage() {
  const [isImage, setIsImage] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const intervalId = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsNumber(true);
    }, 200);
  });

  useEffect(() => {
    setTimeout(() => {
      setIsImage(true);
    }, 300);
  });

  return (
    <Container>
      <TripeContainer>
        <Tripe src={tripleImage} alt="1" />
        <p>2021년 12월 기준</p>
      </TripeContainer>
      <Fix>
        {isNumber && <Countup end={700} />}
        {isNumber && <Countup end={100} />}
        {isNumber && <Countup end={470} />}

        {isImage && (
          <BoxContainer>
            <div>
              <SmallImage src={googleStore} alt="2" />
              <ImageContainer>
                <p>2018 구글 플레이스토어</p>
                <p>올해의 앱 최우수상 수상</p>
              </ImageContainer>
            </div>
            <div>
              <SmallImage src={appleBadge} alt="2" />
              <ImageContainer>
                <p>2018 애플 앱스토어</p>
                <p>오늘의 여행앱 선정</p>
              </ImageContainer>
            </div>
          </BoxContainer>
        )}
      </Fix>
    </Container>
  );
}

export default RootPage;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const Recording = keyframes`
0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const TripeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${Recording} 2s 1;
  p {
    position: absolute;
    margin: 0;
    font-size: 15px;
    font-family: sans-serif;
    color: rgba(58, 58, 58, 0.7);
    top: 560px;
  }
`;

const Tripe = styled.img`
  width: 400px;
  height: 338px;
  padding-top: 280px;
`;

const Fix = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxContainer = styled.div`
  display: flex;
  animation: ${Recording} 2s 1;
  div {
    display: flex;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  p {
    margin: 0;
  }
`;

const SmallImage = styled.img`
  width: 54px;
  height: 54px;
  margin: 0 20px;
`;
