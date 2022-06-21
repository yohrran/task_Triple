import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './page/MainPage/MainPage';
import NotFound from './page/NotFound/NotFound';
import GlobalStyle from './utils/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
