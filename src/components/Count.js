/* eslint-disable no-console */
import React, { useState, useEffect, useRef, useCallback } from 'react';

function Countup({ start = 0, end }) {
  const [state, setState] = useState(null);
  const ref = useRef(start);

  let time = end / 200;
  let increment = end / 200;

  const updateCounterState = useCallback(() => {
    if (ref.current < end - 40) {
      const result = ref.current + increment;
      if (result > end) return setState(end);
      ref.current = result;
      setState(result);
    } else {
      const result = ref.current + increment;
      if (result > end) return setState(end);
      ref.current = result;
      setState(result);
    }

    setTimeout(updateCounterState, time);
  }, [end, increment, time]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }

    return () => (isMounted = false);
  }, [start, end, updateCounterState]);
  return <div>{state}</div>;
}

export default Countup;
