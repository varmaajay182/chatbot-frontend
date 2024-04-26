import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './Component/Home/Home';
import Login from './Component/auth/login';
import Register from './Component/auth/register';
import Sidebar from './Component/Sidebar/Sidebar';
import ChatBot from './Component/ChatBot/ChatBot';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatbot" element={<Home />} />
      </Routes>
    </BrowserRouter> */}
    <Sidebar/>
    <ChatBot/>
    </>
  )
}

export default App
