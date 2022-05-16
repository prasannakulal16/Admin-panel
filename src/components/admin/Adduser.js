
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../global/Button'
import InputField from '../global/InputField'
import { addUser } from './userSlice'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'


import { v4 } from 'uuid'

function Adduser() {

  const dispatch= useDispatch();

  const navigate = useNavigate()

  const [values,setValues] =useState(
    {
      name:'',
      email:'',
      role:''
    }
  )

  const handleAddUser= ()=>{
    setValues({name:'',email:'',role:''})
    dispatch(addUser({
      id:uuidv4(),
      name:values.name,
      email:values.email,
      role:values.role
    }))
    navigate('/')

  }
const [post,setPosts] =useState([])
  const fetchPost = async () => {
    try{
      const response = await axios("https://api.weatherapi.com/v1/current.json?key=6258b86836cc4425bc284518211910&q=Mysore");
      console.log(response.data.created_at)
      setPosts(response.data);
      console.log(post)
    }catch(err){
      console.error(err)
    }
    
  };

  useEffect(() => {
    fetchPost();
   }, []);
   const championArray=[]
  return (
    <div>

      {/* <>
      {Object.values(post).map((champs)=>{
  championArray.push(champs);
 
})

}
{championArray}
      </> */}
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
            <Button onClick={handleAddUser}>Submit</Button>
        </div>
    </div>
  )
}

export default Adduser