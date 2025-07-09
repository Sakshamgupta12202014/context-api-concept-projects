import React , {forwardRef} from 'react'

function Select() {
  return (
    <div>Select</div>
  )
}

// this is the second way of writing and using forwardRef
// forwardRef is used to pass a ref from the parent component to the child component
export default React.forwardRef(Select)