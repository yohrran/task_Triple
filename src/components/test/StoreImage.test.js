import { render, screen } from '@testing-library/react';
import React from 'react';

import StoreImage from '../StoreImage';

describe('StoreImage component test', () => {
  it('StoreImage alt, img test', () => {
    const image = render(<StoreImage src="/img/badge-apple4x.png" alt="img" />);
    const src = screen.getByRole('img');

    expect(image.getByAltText('img')).toBeInTheDocument;
    expect(src).toHaveAttribute('src', '/img/badge-apple4x.png');
  });
});
