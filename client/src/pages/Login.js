import React from 'react'
import {Form,Input,message} from 'antd'
import "../styles/Register.css"
import {useNavigate,Link} from "react-router-dom"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showloading,hideloading } from '../redux/features/alertSlice';

 const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  //form Handler
  const onfinshHandler=async(values)=>{
     try{
      dispatch(showloading())
      const res=await axios.post('/api/v1/user/login',values)
      dispatch(hideloading())
      if(res.data.success){
        localStorage.setItem("token",res.data.token);
        message.success('Login Successfully');
        navigate("/intropage")
      }else{
        message.error(res.data.message)
      }
     }catch(error){
      dispatch(hideloading())
       console.log(error)
       message.error('Something went wrong');

     }    
  };
  

  return (
    <>
    <div className='form-container'>
      <Form layout="vertical" onFinish={onfinshHandler}>
        <h1>Login Form </h1>
      
      <Form.Item label='Email' name="email">
        <Input type="email" required/>
      </Form.Item>
      <Form.Item label='Password' name="password">
        <Input type="password" required/>
      </Form.Item>
      
      <button  className='btn btn-primary' type="submit">
        Login
      </button>
      <Link to="/register">Don't have account?register here</Link>
      </Form>
    </div>

        
    </>
  )
}

export default Login