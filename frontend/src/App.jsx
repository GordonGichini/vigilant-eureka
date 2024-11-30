import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePortfolio from './components/Create'
import Portfolio from './components/Portfolio'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Portfolio />} />
        <Route path="/create-portfolio" element={<CreatePortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App