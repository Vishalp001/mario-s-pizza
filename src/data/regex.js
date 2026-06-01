export const regex = {
  name: /^[A-Za-z\s]{3,30}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  number: /^[6-9]\d{9}$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  gender: /^(male|female|other)$/i,
}
