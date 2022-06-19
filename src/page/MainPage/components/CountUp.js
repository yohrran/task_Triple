/* eslint-disable no-console */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

import CountingUnit from '../../../components/CountingUnit';
import Text from '../../../components/Text';

function CountUp({ start = 0, end, text, value }) {
  const [nowNumber, setNowNumber] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const countRef = useRef(start);
  const isStartRef = useRef(null);

  const time = end / 200;
  const increment = end / 200;

  isStartRef.current = true;

  const makeCountUp = useCallback(() => {
    const sumValur = countRef.current + increment;
    if (sumValur > end) return setNowNumber(end);
    countRef.current = sumValur;
    setNowNumber(sumValur.toFixed(0));
  }, [end, increment]);

  const updateCounterState = useCallback(() => {
    if (countRef.current < end - 40) {
      makeCountUp();
    } else if (countRef.current < end) {
      isStartRef.current = false;
      makeCountUp();
    } else {
      setIsOn(false);
      return;
    }

    if (isStartRef.current) {
      setTimeout(updateCounterState, time);
    } else {
      setTimeout(updateCounterState, (end / 200) * 25);
    }
  }, [end, makeCountUp, time]);

  useEffect(() => {
    if (isOn) {
      updateCounterState();
    }

    return () => setIsOn(false);
  }, [start, end, updateCounterState, isOn]);

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

export default CountUp;

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
