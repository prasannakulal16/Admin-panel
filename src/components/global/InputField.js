import React from 'react'

function InputField({label,inputProps,onChange,value,required}) {
  return (
    <div className='flex flex-col'>
        
      <label className='mb-2 text-base text-gray-800 font-bold'>{label}</label>
      <input 
      className='bg-gray-200 py-2 px-3 border-2 outline-none mb-4'
      {...inputProps}
      onChange={onChange}
      value={value}
      
      />
    </div>
  )
}

export default InputField