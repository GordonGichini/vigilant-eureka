import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePortfolio from './components/Create'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Portfolio />} />
        <Route path="/create-portfolio" element={<CreatePortfolio />} />
      </Routes>
    </Router>
  )
}

export default App