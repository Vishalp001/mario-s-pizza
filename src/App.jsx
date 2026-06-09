import { BrowserRouter, Link } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { useAuth } from './context/AuthContext'
import Navbar from './components/common/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
