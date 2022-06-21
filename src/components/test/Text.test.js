import React from 'react';
import { render } from '@testing-library/react';

import Text from '../Text';

describe('Text component test', () => {
  it('Text text test', () => {
    const text = render(<Text text="hello" />);
    expect(text.getByText('hello')).toBeInTheDocument;
  });
});
