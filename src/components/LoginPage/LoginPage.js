import React from 'react'
import { useState } from 'react'

export default function LoginPage() {

    const [user,setUser] = useState({});

    function onChange(event){
        const value = event.target.value;
        const field = event.target.getAttribute("data-input"); 
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
    }
    function onLoginPress(){
        fetch("http://localhost:8080/user/login",{method:"POST",body:JSON.stringify(user), 
        headers: {
            "Content-Type": "application/json",
          }})
        .then((res)=>{
            if(res){
                document.cookie = `userName=${user.username}`;
                document.cookie = `password=${user.password}`;
            }
        })
    }

    return (
        <div className='container mt-20'>
            <h1>LoginPage</h1>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
                username
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
            value={user.username} 
            onChange={onChange} 
            data-input="username"  
            type = 'username'/>

            <label className='block text-gray-700 text-sm font-bold mb-2 mt-20'>
                password
            </label>
            <input  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
             value={user.password} 
             onChange={onChange} 
             data-input="password" 
             type='password'/>

            <button className='mt-10' onClick={onLoginPress}>submit</button>

        </div>
  )
}
