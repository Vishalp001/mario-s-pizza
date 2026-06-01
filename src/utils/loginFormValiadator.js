import { regex } from '../data/regex'

export const validate = (userData) => {
  const error = {}
  // Name
  if (!userData.name.trim()) {
    error.name = 'Name is required'
  } else if (!regex.name.test(userData.name)) {
    error.name = 'Please enter a valid name'
  }

  // Email
  if (!userData.email.trim()) {
    error.email = 'Email is required'
  } else if (!regex.email.test(userData.email)) {
    error.email = 'Please enter a valid email address'
  }

  // Number
  if (!userData.number.trim()) {
    error.number = 'Mobile number is required'
  }
  // else if (!regex.number.test(userData.number)) {
  //   error.number = 'Please enter a valid mobile number'
  // }
  // Password
  if (!userData.password.trim()) {
    error.password = 'Password is required'
  } else if (!regex.password.test(userData.password)) {
    error.password =
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'
  }

  // Gender
  if (!userData.gender) {
    error.gender = 'Please select a gender'
  }

  // Terms & Conditions
  if (!userData.tnc) {
    error.tnc = 'You must accept terms and conditions'
  }

  return error
}
