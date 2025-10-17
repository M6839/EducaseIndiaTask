import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({ users, setCurrentUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const found = users.find((u) => u.email === email && u.password === password);
    if (found) {
      alert(`Welcome, ${found.name}!`);
      setCurrentUser(found);
      navigate("/account");
    } else {
      alert("Invalid email or password!");
    }
  };
   
  return (
    <div className='flex flex-col space-y-4 p-4'>
        <h1 className='text-black font-bold text-[32px]'>Sign in to your PopX account</h1>
        <p className='text-gray-400 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form onSubmit={handleLogin} className='space-y-6 text-[#6c25ff] font-semibold'>
             <fieldset
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                position: 'relative',
                padding: '0 1rem',
              }}
            >
              <legend
                style={{
                  padding: '0 8px',
                  fontSize: '16px',
                }}
              >
                Email address <span className='text-red-600'>*</span>
              </legend>
              <input
                type="email"
                required
                value={email}
                placeholder="Enter email address"  className='bg-gray-100 text-black p-2 w-full text-[16px]   rounded-[10px]'
                style={{
                  border: 'none',
                  outline: 'none',
                  borderRadius: '10px',
                }}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                position: 'relative',
                padding: '0 1rem',
              }}
            >
              <legend
                style={{
                  padding: '0 8px',
                  fontSize: '16px',
                }}
              >
                Password <span className='text-red-600'>*</span>
              </legend>
              <input
                type="password"
                required
                value={password}
                placeholder="Enter password"  className='bg-gray-100 text-black p-2 w-full text-[16px]   rounded-[10px]'
                style={{
                  border: 'none',
                  outline: 'none',
                  borderRadius: '10px',
                }}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </fieldset>
             <button type='submit' className='w-full cursor-pointer font-semibold h-[45px] bg-gray-400 text-white rounded-md'>Login</button>
        </form>
    </div>
  )
}

export default Login