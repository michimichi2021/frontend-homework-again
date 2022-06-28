import React from 'react';
import Board from "./components/Board";
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
      <Routes>
        <Route path="/board" element={<Board />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
