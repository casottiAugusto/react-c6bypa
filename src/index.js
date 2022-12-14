import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Calculator from '../components/display/Calculator.jsx';
import Button from '../components/Button/button';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Calculator />
    <Button />
  </StrictMode>
);
