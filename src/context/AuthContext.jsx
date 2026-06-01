import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  })

  // Login -> get data from user --> set it to local storage

  const login = (userData) => {
    // eslint-disable-next-line
    const { password, ...safeUser } = userData

    setUser(safeUser)
    localStorage.setItem('user', JSON.stringify(safeUser))
  }

  // Logout -> remove from state --> remove form localStorage

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line
export function useAuth() {
  return useContext(AuthContext)
}
