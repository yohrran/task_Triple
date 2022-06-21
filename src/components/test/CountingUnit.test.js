import React from 'react';
import { render } from '@testing-library/react';

import CountingUnit from '../CountingUnit';

describe('CountingUnit component test', () => {
  it('CountingUnit text test', () => {
    const unitText = render(<CountingUnit value="만 의" />);
    expect(unitText.getByText('만 의')).toBeInTheDocument;
  });
});
