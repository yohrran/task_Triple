/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import Countup from '../../components/Count';

const tripleImage = '/img/triple2x.png';
const googleStore = '/img/play-store2x.png';
const appleBadge = '/img/badge-apple4x.png';
function MainPage() {
  const [isImage, setIsImage] = useState(false);
  const [isNumber, setIsNumber] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsNumber(true);
    }, 200);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsImage(true);
    }, 300);
  }, []);

  return (
    <Container>
      <TripeContainer>
        <TripleImageBox>
          <Tripe src={tripleImage} alt="1" />
        </TripleImageBox>
        <DateContainer>2021년 12월 기준</DateContainer>
      </TripeContainer>
      <PerformanceContainer>
        {isNumber && <Countup end={700} value="만 명" text="의 여행자" />}
        {isNumber && <Countup end={100} value="만 개" text="의 여행 리뷰" />}
        {isNumber && <Countup end={470} value="만 개" text="의 여행 일정" />}

        {isImage && (
          <BoxContainer>
            <>
              <SmallImage src={googleStore} alt="2" />
              <ImageContainer>
                <p>2018 구글 플레이스토어</p>
                <p>올해의 앱 최우수상 수상</p>
              </ImageContainer>
            </>
            <>
              <SmallImage src={appleBadge} alt="3" />
              <ImageContainer isFalse={false}>
                <p>2018 애플 앱스토어</p>
                <p>오늘의 여행앱 선정</p>
              </ImageContainer>
            </>
          </BoxContainer>
        )}
      </PerformanceContainer>
    </Container>
  );
}

export default MainPage;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 1040px;
  height: auto;
  padding-top: 100px;
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
  animation: ${Recording} 0.7s 1;
`;

const DateContainer = styled.p`
  position: absolute;
  margin: 0;
  font-size: 15px;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
  top: 380px;
`;

const TripleImageBox = styled.div`
  display: inline-block;
  width: 400px;
`;

const Tripe = styled.img`
  width: 100%;
`;

const PerformanceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxContainer = styled.div`
  display: flex;
  margin-top: 30px;
  animation: ${Recording} 0.7s 1;
  div {
    display: flex;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 39px;
  p {
    margin: 0;
    font-size: 14px;
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;
  }
`;

const SmallImage = styled.img`
  width: 54px;
  height: 54px;
  margin: 0 10px;
`;
