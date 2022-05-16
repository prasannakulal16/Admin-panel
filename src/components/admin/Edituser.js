import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { store } from '../../redux/store'
import Button from '../global/Button'
import InputField from '../global/InputField'
import { editUser } from './userSlice'

function Edituser() {
    const navigate = useNavigate()
    const dispatch =useDispatch()
    const params = useParams()
    const users = useSelector(store=> store.users)

    const existingUser = users.filter(user=>user.id===params.id)

    const {name,email,role} = existingUser[0]

    const [values,setValues] =useState(
      {
        name,
        email,
        role
      }
    )
  
    const handleEditUser= ()=>{
      setValues({name:'',email:'',role:''})
      dispatch(editUser({
        id:params.id,
        name:values.name,
        email:values.email,
        role:values.role
      }))
      navigate('/')
  
    }
    return (
      <div>
          <div className='mt-10 max-w-xl mx-auto'>
              <InputField
              label="name"
              value={values.name}
              onChange={(e)=>setValues({...values,name:e.target.value})}
              inputProps={{type:"text",placeholder:'john'}}
              />
               <InputField
              label="Email"
              value={values.email}
              onChange={(e)=>setValues({...values,email:e.target.value})}
              inputProps={{type:"text",placeholder:'Email'}}
              />
               <InputField
              label="Role"
              value={values.role}
              onChange={(e)=>setValues({...values,role:e.target.value})}
              inputProps={{type:"text",placeholder:'Role'}}
              />
              <Button onClick={handleEditUser}>Edit</Button>
          </div>
      </div>
    )
}

export default Edituser