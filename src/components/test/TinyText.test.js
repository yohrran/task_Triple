import React from 'react';
import { render } from '@testing-library/react';

import TinyText from '../TinyText';

describe('TinyText component test', () => {
  it('TinyText text test', () => {
    const tiny = render(<TinyText text="hello" />);
    expect(tiny.getByText('hello')).toBeInTheDocument;
  });
});
