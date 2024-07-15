import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/auth/SignIn/SignIn';

const element = document.getElementById('root')!;

const root = createRoot(element);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);