import './commonStyles.css'

export const InputBox = ({
  label,
  name,
  placeholder = '',
  type = 'text',
  onChange,
  value,
  errorMessage,
}) => {
  const hasError = !!errorMessage

  return (
    <div className='inputBox'>
      <label htmlFor={name} className='inputLabel'>
        {label}
      </label>

      <input
        id={name}
        className={`inputField ${hasError ? 'errorInput' : ''}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {hasError && <p className='errorMessage'>{errorMessage}</p>}
    </div>
  )
}

export const RadioInput = ({
  label,
  name,
  options = [],
  value,
  onChange,
  errorMessage,
}) => {
  const hasError = !!errorMessage

  return (
    <div className='radioWrapper'>
      <p className='radioLabel'>{label}</p>

      <div className='radioGroup'>
        {options.map((option) => (
          <label key={option.value} className='radioOption'>
            <input
              type='radio'
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />

            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {hasError && <p className='errorMessage'>{errorMessage}</p>}
    </div>
  )
}

export const CheckboxInput = ({
  errorMessage,

  label,
  name,
  checked,
  onChange,
}) => {
  const hasError = !!errorMessage

  return (
    <>
      <label className='checkboxContainer'>
        <input
          type='checkbox'
          name={name}
          checked={checked}
          onChange={onChange}
        />

        <span className='customCheckbox'></span>

        <span className='checkboxText'>{label}</span>
      </label>
      {hasError && <p className='errorMessage'>{errorMessage}</p>}
    </>
  )
}
