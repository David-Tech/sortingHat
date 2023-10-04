import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Landing from './pages/landing';
import About from './pages/about';
import RootLayout from './rootLayout';
import Login from './pages/login';
import Quiz from './components/quiz';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
