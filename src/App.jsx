import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import FirstQuestion from './pages/FirstQuestion'
import SecondQuestion from './pages/SecondQuestion'
import ThirdQuestion from './pages/ThirdQuestion'
import FourthQuestion from './pages/FourthQuestion'
import FifthQuestion from './pages/FifthQuestion'
import SixthQuestion from './pages/SixthQuestion'
import SeventhQuestion from './pages/SeventhQuestion'
import EightQuestion from './pages/EightQuestion'
import NinthQuestion from './pages/NinthQuestion'
import TenthQuestion from './pages/TenthQuestion'

const App = () => {
  return (
    <div>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='first-question' exact Component={FirstQuestion} />
            <Route path='second-question' exact Component={SecondQuestion} />
            <Route path='third-question' exact Component={ThirdQuestion} />
            <Route path='fourth-question' exact Component={FourthQuestion} />
            <Route path='fifth-question' exact Component={FifthQuestion} />
            <Route path='sixth-question' exact Component={SixthQuestion} />
            <Route path='seventh-question' exact Component={SeventhQuestion} />
            <Route path='eight-question' exact Component={EightQuestion} />
            <Route path='ninth-question' exact Component={NinthQuestion} />
            <Route path='tenth-question' exact Component={TenthQuestion} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App

