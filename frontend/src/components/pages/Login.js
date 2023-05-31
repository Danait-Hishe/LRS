import React from 'react';
import './login.css'

export default function Login() {
    const handlesubmit=(e)=>{
        e.preventDefualt();
    
    const {username,password}=this.state;
        console.log(username,password);
   
      fetch("/login",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify({
                username,
                password
            }),
        }).then((res)=>res.json())
         .then((data)=>{
            console.log(data,"userRegister");
            if(data.status == "ok"){
              alert("login successful");
              window.localStorage.setItem("token",data.data);
              window.location.href = "./userSchema";
            }
         });
    } 
  
  return (
    <div className='login'>
      <form on onSubmit={handlesubmit}>
        <div className='header'>
        <img src={Image} alt='logo'/>
        <a href="/">Home </a>
        </div>
        <div className='form-container1'>
            <label>Username</label>
            <br/>
            <input 
               type='text' 
               name='username'
               placeholder='Enter Username'
               required
               />
               <br/>
            <label style={{marginTop:'5%'}}>Password</label>
            <br/>
            <input 
               type='password' 
               name='password'
               placeholder='Enter Password'
               required
               
               />
               <br/>
            <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}
