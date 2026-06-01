import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Orders from '../pages/Orders'
import Checkout from '../pages/Checkout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  )
}

export default AppRoutes
