import React from 'react';
import styled from 'styled-components';

import CountingUnit from '../../../components/CountingUnit';
import { useSetTime } from '../../../components/hook/useSetTime';
import Text from '../../../components/Text';

const easing = (t, b, c, d) => {
  return c * ((t = t / d - 1) * t * t + 1) + b;
};

const duration = 2;
function CountUp({ start = 0, end, text, value }) {
  const { displayTime } = useSetTime({ duration });
  const currentValue = easing(displayTime, start, end, duration);

  return (
    <Container>
      <BoldContainer>
        <p>{Math.round(currentValue)}</p>
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
