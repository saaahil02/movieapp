import React from 'react'
import {Form,Input,message} from 'antd'
import "../styles/Register.css"
import {Link,useNavigate} from "react-router-dom"
import axios from "axios";
import { useDispatch } from 'react-redux';
import { showloading,hideloading } from '../redux/features/alertSlice';

const Register = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
//form handler
const onfinshHandler=async(values)=>{
  
  try{
    dispatch(showloading())
    const res=await axios.post('/api/v1/user/register',values);
    dispatch(hideloading())
    if(res.data.success){
      message.success("Registered Successfully");
      navigate('/login')
    }
    else{
      message.error(res.data.message);
    }
  

  }catch(error){
    dispatch(hideloading())
    console.log(error)
    message.error("Something went wrong")
  }
};

  return (
    <>
    <div className='form-container'>
      <Form layout="vertical" onFinish={onfinshHandler}>
        <h1>Register Form </h1>
      <Form.Item label='Name' name="name">
        <Input type="text" required/>
      </Form.Item>
      <Form.Item label='Email' name="email">
        <Input type="email" required/>
      </Form.Item>
      <Form.Item label='Password' name="password">
        <Input type="password" required/>
      </Form.Item>
      
      <button className='btn btn-primary' type="submit">
        Register
      </button>
      <Link to="/login">Login</Link>
      </Form>
    </div>

    </>
  )
}

export default Register