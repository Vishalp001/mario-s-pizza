import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'

const Home = () => {
  const { theme, toggleTheme } = useTheme()
  const { user } = useAuth()

  console.log(user, 'user')
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <div>{/* <h2>{user}</h2> */}</div>
    </div>
  )
}

export default Home
