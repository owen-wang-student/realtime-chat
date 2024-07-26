import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Auth from './pages/auth'
import Chat from './pages/chat'
import Profile from './pages/profile'

// add suspoense so not all are loaded at the start

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/auth"/>}/>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App