import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {toast} from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Videobg from '../assets/bg-video2.mp4'
import './Register.css'
import Navbar from '../components/Navbar';

export default function Register() {
  const navigate= useNavigate()
  const [data, setData] = useState({
    name:'',
    email:'',
    password:'',
  })
  const registerUser = async(e) =>{
    e.preventDefault();
    const {name,email,password}= data
    try {
      const {data} = await axios.post('./register',{
        name,email,password
      })
      if(data.error){
        toast.error(data.error)
  
      }else{
        setData({})
        toast.success('Registration Successful!')
        navigate('/login')
      }
    } catch (error){
      console.log(error);
    }

  }


  return (
    <div>
      <Navbar/>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={Videobg} type="video/mp4" />
        </video>
      </div>
      <div className="register-container">
        <form className="register-form" onSubmit={registerUser}>
          <label>Name:</label>
          <input type='text' placeholder='Enter your name' value={data.name} onChange={(e)=> setData({...data,name:e.target.value})}/>
          <label>Email:</label>
          <input type='email' placeholder='Enter your email' value={data.email} onChange={(e)=> setData({...data,email:e.target.value})}></input>
          <label>Password:</label>
          <input type="password" placeholder='Enter your password' value={data.password} onChange={(e)=> setData({...data,password:e.target.value})}/>
          <button className='buttonstyle' type='submit'>Submit</button>
          <p className='text'> ARE YOU A DESIGNER?    <Link to= '/DeveloperRegister' className='link'>TAKE DIVERSION</Link></p>
        </form>
      </div>
    </div>
  )
}
