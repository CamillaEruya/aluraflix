import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import LayoutHeader from './layout/header'
import LayoutFooter from './layout/footer'
import Home from './home'
import CriarVideo from './criar-video'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CriarVideo" element={<CriarVideo />} />
        </Routes>
      </Router>
      <LayoutHeader />
      <LayoutFooter />
    </>
  )
}

export default App
