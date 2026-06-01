import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { CheckboxInput, InputBox, RadioInput } from '../common/Input'
import { validate } from '../../utils/loginFormValiadator'
import { useNavigate } from 'react-router-dom'
const LoginForm = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const initialErrors = {
    name: '',
    email: '',
    number: '',
    password: '',
    gender: '',
    tnc: '',
  }

  const [error, setError] = useState(initialErrors)
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    gender: '',
    tnc: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setUserData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setError((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validate(userData)

    if (Object.keys(errors).length > 0) {
      setError(errors)
      return
    }
    login(userData)
    navigate('/')
    setError(initialErrors)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputBox
          label='Name'
          placeholder='Enter your name...'
          name='name'
          value={userData.name}
          onChange={handleChange}
          errorMessage={error?.name}
        />
        <InputBox
          type='text'
          label='Email'
          placeholder='Enter your email...'
          name='email'
          value={userData.email}
          onChange={handleChange}
          errorMessage={error?.email}
        />
        <InputBox
          type='password'
          label='Password'
          placeholder='Enter your password...'
          name='password'
          value={userData.password}
          onChange={handleChange}
          errorMessage={error?.password}
        />
        <InputBox
          type='tel'
          label='Number'
          placeholder='Enter your number...'
          name='number'
          value={userData.number}
          onChange={handleChange}
          errorMessage={error?.number}
        />
        <RadioInput
          label='Gender'
          name='gender'
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
          ]}
          value={userData.gender}
          onChange={handleChange}
          errorMessage={error?.gender}
        />

        <CheckboxInput
          label='I accept terms and conditions'
          name={'tnc'}
          checked={userData.tnc}
          onChange={handleChange}
          errorMessage={error?.tnc}
        />

        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default LoginForm
