import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home';
import Login from './user/login';
import ChangePassword from './user/change_password';
import ForgetPassword from './user/forget_password';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
