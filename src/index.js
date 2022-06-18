import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RootPage from './page/RootPage/RootPage';
import GlobalStyle from './utils/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<RootPage />} />
    </Routes>
  </BrowserRouter>,
);
