import React from 'react';
import { render, screen } from '@testing-library/react';

import MainPage from '../MainPage';

describe('MainPage component test', () => {
  it('MainPage text test', () => {
    render(<MainPage />);
    const src = screen.getByRole('img');

    expect(screen.getByText('2021년 12월 기준')).toBeInTheDocument;
    expect(src).toHaveAttribute('src', '/img/triple2x.png');
  });
});
