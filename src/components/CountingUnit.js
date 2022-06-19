/* eslint-disable no-console */
import React from 'react';

function CountingUnit({ value }) {
  return <p>{value}</p>;
}

export default React.memo(CountingUnit);
