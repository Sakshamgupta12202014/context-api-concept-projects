import React from 'react'

function Input({
    label,
    placeholder,
    type,
    value,
    handleChange
}) {
  return (
    <div>
        <label >{label} :</label>
        <input type={type} placeholder={placeholder} value={value} onChange={handleChange}/>
    </div>
  )
}

export default Input