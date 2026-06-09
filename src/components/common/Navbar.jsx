import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { useAuth } from '../../context/AuthContext'

export default function Navbar({ brand = "Mario's Pizza" }) {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className='sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur-md'>
      <nav
        aria-label='Main Navigation'
        className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'
      >
        <Link
          to='/'
          className='flex items-center gap-2 text-xl font-boldfont-bold text-red-600 transition '
        >
          <span>🍕</span>
          <span>{brand}</span>
        </Link>

        <div className='hidden items-center gap-6 md:flex'>
          <Link
            to='/'
            className='text-gray-700 hover:text-red-600 transition focus:outline-none '
          >
            Home
          </Link>

          <Link
            to='/orders'
            className='text-gray-700 hover:text-red-600 transition focus:outline-none '
          >
            Orders
          </Link>

          <Link
            to='/checkout'
            className='text-gray-700 hover:text-red-600 transition focus:outline-none '
          >
            Checkout
          </Link>

          {!user ? (
            <Link
              to='/login'
              className='rounded-lg bg-orange-500 px-4 py-2 font-medium text-white transition hover:bg-orange-600 focus:outline-none '
            >
              Login
            </Link>
          ) : (
            <div className='flex items-center gap-3'>
              <span
                className='rounded-full bg-gray-800 px-3 py-2 text-sm font-medium text-gray-200'
                aria-label={`Logged in as ${user.name}`}
              >
                👤 {user.name}
              </span>

              <button
                type='button'
                onClick={logout}
                aria-label='Logout'
                className='rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-950'
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <button
          type='button'
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls='mobile-menu'
          onClick={toggleMenu}
          className='rounded-md p-2  hover:bg-gray-800  md:hidden text-gray-700 hover:text-red-600 transition focus:outline-none '
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id='mobile-menu'
          className='border-t border-gray-800 bg-gray-950 md:hidden'
        >
          <div className='flex flex-col px-6 py-4'>
            <Link
              to='/'
              onClick={closeMenu}
              className='rounded-lg px-3 py-3 text-white  focus:outline-none  hover:text-red-600 transition hover:bg-gray-800'
            >
              Home
            </Link>

            <Link
              to='/orders'
              onClick={closeMenu}
              className='rounded-lg px-3 py-3 text-white focus:outline-none  hover:text-red-600 transition hover:bg-gray-800'
            >
              Orders
            </Link>

            <Link
              to='/checkout'
              onClick={closeMenu}
              className='rounded-lg px-3 py-3 text-white  focus:outline-none  hover:text-red-600 transition hover:bg-gray-800'
            >
              Checkout
            </Link>

            {!user ? (
              <Link
                to='/login'
                onClick={closeMenu}
                className='mt-3 rounded-lg bg-orange-500 px-4 py-3 text-center font-medium text-white transition hover:bg-orange-600'
              >
                Login
              </Link>
            ) : (
              <div className='mt-4 border-t border-gray-800 pt-4'>
                <p className='mb-3 text-sm text-gray-400'>Signed in as</p>

                <p className='mb-4 font-medium text-white'>{user.name}</p>

                <button
                  type='button'
                  onClick={() => {
                    logout()
                    closeMenu()
                  }}
                  className='w-full rounded-lg bg-red-600 px-4 py-3 font-medium text-white transition hover:bg-red-700'
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
