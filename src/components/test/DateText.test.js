import React from 'react';
import { render } from '@testing-library/react';

import DateText from '../DateText';

describe('DateText component test', () => {
  it('DateText text test', () => {
    const dateText = render(<DateText text="2022년 6월 22일" />);
    expect(dateText.getByText('2022년 6월 22일')).toBeInTheDocument;
  });
});
