import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import CountingUnit from '../../../components/CountingUnit';
import Text from '../../../components/Text';

function CountUp({ start = 0, end, text, value }) {
  const [nowNumber, setNowNumber] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const countRef = useRef(start);

  const time = end / 200;
  const increment = end / 200;
  let timer = useRef(null);

  useEffect(() => {
    const makeCountUp = () => {
      const sumValue = countRef.current + increment;
      countRef.current = sumValue;
      setNowNumber(sumValue.toFixed(0));
    };

    const updateCounterState = () => {
      if (countRef.current < end) {
        makeCountUp();
      } else {
        setIsOn(false);
        return;
      }

      if (countRef.current < end - 40) {
        timer.current = setTimeout(updateCounterState, time);
      } else {
        timer.current = setTimeout(updateCounterState, (end / 200) * 25);
      }
    };

    if (isOn) {
      updateCounterState();
    }

    return () => {
      clearTimeout(timer.current);
    };
  }, []);

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
