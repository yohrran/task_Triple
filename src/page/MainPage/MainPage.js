import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import TinyText from '../../components/TinyText';
import DateText from '../../components/DateText';
import StoreImage from '../../components/StoreImage';

import Countup from './components/CountUp';

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
      <LeftImageContainer>
        <LeftImageBox>
          <LeftImage src={tripleImage} alt="수상내역" />
        </LeftImageBox>
        <DateText text="2021년 12월 기준" />
      </LeftImageContainer>
      <RigthImageContainer>
        {isNumber && <Countup end={700} value="만 명" text="의 여행자" />}
        {isNumber && <Countup end={100} value="만 개" text="의 여행 리뷰" />}
        {isNumber && <Countup end={470} value="만 개" text="의 여행 일정" />}
        {isImage && (
          <RightImageBox>
            <StoreImage src={googleStore} alt="구글스토어" />
            <ImageContainer margin>
              <TinyText text="2018 구글 플레이스토어" />
              <TinyText text="올해의 앱 최우수상 수상" />
            </ImageContainer>
            <StoreImage src={appleBadge} alt="앱스토어" />
            <ImageContainer margin={false}>
              <TinyText text="2018 애플 앱스토어" />
              <TinyText text="오늘의 여행앱 선정" />
            </ImageContainer>
          </RightImageBox>
        )}
      </RigthImageContainer>
    </Container>
  );
}

export default MainPage;

const Container = styled.main`
  display: flex;
  min-width: 1040px;
  padding-top: 100px;
  margin: 0 200px;
`;

const Recording = keyframes`
0% {
    opacity: 0;
    transform: translateY(20px);
  }
  33% {
    opacity: 0.3;
    transform: translateY(20px);
  }
  66% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const LeftImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${Recording} 0.7s 1;
`;

const LeftImageBox = styled.div`
  width: 400px;
`;

const LeftImage = styled.img`
  width: 100%;
`;

const RigthImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 224px;
`;

const RightImageBox = styled.div`
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
  margin-right: ${(props) => (props.margin ? '39px' : 0)};
`;
