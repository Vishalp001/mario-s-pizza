import { BrowserRouter, Link } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { useAuth } from './context/AuthContext'

function App() {
  const { user, logout } = useAuth()
  console.log(user)
  return (
    <BrowserRouter>
      <nav className='flex justify-between p-5 gap-4 items-center  bg-black text-white'>
        <div className=' flex gap-4  bg-black text-white'>
          <Link to='/'>Home</Link>
          {!user && <Link to='/login'>Login</Link>}
          <Link to='/orders'>Orders</Link>
          <Link to='/checkout'>Checkout</Link>
        </div>
        {user?.name && (
          <div className='flex gap-4'>
            <Link>{user.name}</Link>
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </nav>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
