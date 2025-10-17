import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = ({users,setUsers}) => {
   const [form, setForm] = useState({ name: "",phone:"" ,email: "", password: "",company:"",agency:true});
  const navigate = useNavigate();

  const handleChange = (e) => { 
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const existing = users.find((u) => u.email === form.email);
    if (existing) {
      alert("User already exists!,please login");
      return;
    }

    setUsers([...users, form]);
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className='p-4'>
        <h1 className='text-black font-bold text-[32px] mb-2'>Create your PopX Account</h1>
        <form onSubmit={handleRegister} className='flex flex-col gap-12 justify-between text-[#6c25ff] font-semibold'>
            <div className='flex flex-col gap-4'>
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
                Full Name <span className='text-red-600'>*</span>
              </legend>
              <input
                type="text"
                required
                placeholder="Enter full name" name='name' value={form.name} className='bg-gray-100 text-black p-2 w-full text-[16px]   rounded-[10px]'
                style={{
                  border: 'none',
                  outline: 'none',
                  borderRadius: '10px',
                }}
                onChange={handleChange}
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
                Phone Number <span className='text-red-600'>*</span>
              </legend>
              <input
                type="text"
                required
                placeholder="Enter phone number" name='phone' value={form.phone}  className='bg-gray-100 text-black p-2 w-full text-[16px]   rounded-[10px]'
                style={{
                  border: 'none',
                  outline: 'none',
                  borderRadius: '10px',
                }}
                onChange={handleChange}
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
                Email address <span className='text-red-600'>*</span>
              </legend>
              <input
                type="email"
                required
                placeholder="Enter email address" name='email' value={form.email} className='bg-gray-100 text-black p-2 w-full text-[16px]   rounded-[10px]'
                style={{
                  border: 'none',
                  outline: 'none',
                  borderRadius: '10px',
                }}
                onChange={handleChange}
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
                placeholder="Enter password" name='password' value={form.password}  className='bg-gray-100 text-black p-2 w-full text-[16px]   rounded-[10px]'
                style={{
                  border: 'none',
                  outline: 'none',
                  borderRadius: '10px',
                }}
                onChange={handleChange}
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
                Company Name
              </legend>
              <input
                type="text"
                placeholder="Enter company name" name='company' value={form.company}  className='bg-gray-100 text-black p-2 w-full text-[16px]   rounded-[10px]'
                style={{
                  border: 'none',
                  outline: 'none',
                  borderRadius: '10px',
                }}
                onChange={handleChange}
              />
            </fieldset>
            <div>
                <p className='text-black'>Are you an Agency?<span className='text-red-600'>*</span></p>
                <div className='flex items-center gap-8'>
                <label className='flex items-center gap-2'><input type='radio' name='agency' value={true} defaultChecked className='w-[20px] h-[20px]' checked={form.agency === "true"} onChange={handleChange}></input>Yes</label>
                <label className='flex items-center gap-2'><input type='radio' name='agency' value={false} className='w-[20px] h-[20px]' checked={form.agency === "false"} onChange={handleChange}></input>No</label>
                </div>
            </div>
            </div>
           <button type='submit' className='w-full mt-4 cursor-pointer font-semibold h-[45px] bg-[#6c25ff] text-white rounded-md'>Create Account</button>
        </form>
    </div>
  )
}

export default Register