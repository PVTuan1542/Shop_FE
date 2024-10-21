import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/auth/SignIn';
import { GoogleOAuthProvider } from '@react-oauth/google';

const element = document.getElementById('root')!;

const clientId = '50903307890-74ou8fj0ijv90iird8rg76v71mvrj4bm.apps.googleusercontent.com';

const root = createRoot(element);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);