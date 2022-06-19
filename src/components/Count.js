/* eslint-disable no-console */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

import CountingUnit from './CountingUnit';
import Text from './Text';

function Countup({ start = 0, end, text, value }) {
  const [nowNumber, setNowNumber] = useState(null);
  const [isTurn, setIsTurn] = useState(true);
  const ref = useRef(start);

  let time = end / 200;
  let increment = end / 200;
  // 시간 2초에 걸친건지 확인하기
  let isFast = true;

  console.log(time, end - 40);
  const updateCounterState = useCallback(() => {
    if (ref.current < end - 40) {
      const result = ref.current + increment;
      if (result > end) return setNowNumber(end);
      ref.current = result;
      setNowNumber(result.toFixed(0));
    } else if (ref.current < end) {
      isFast = false;
      const result = ref.current + increment;
      if (result > end) return setNowNumber(end);
      ref.current = result;
      setNowNumber(result.toFixed(0));
    } else {
      setIsTurn(false);
      return;
    }

    if (isFast) {
      setTimeout(updateCounterState, time);
    } else {
      setTimeout(updateCounterState, (end / 200) * 25);
    }
  }, [end, increment, time]);

  useEffect(() => {
    if (isTurn) {
      updateCounterState();
    }

    return () => setIsTurn(false);
  }, [start, end, updateCounterState, isTurn]);
  return (
    <Container>
      <BoldContainer>
        <p>{nowNumber}</p>
        <CountingUnit value={value} />
      </BoldContainer>
      <Text text={text} />
    </Container>
  );
}

export default Countup;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 36px;
`;

const BoldContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 0 0 10px 0;
  p {
    margin: 0;
  }
`;
