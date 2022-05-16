import React from 'react'

function Button({onClick,children}) {
   
  return (
    
    <>
        <button className="bg-green-500 p-2 rounded-md font-semibold" onClick={onClick}>
          {children}
        </button>
    </>
  )
}

export default Button