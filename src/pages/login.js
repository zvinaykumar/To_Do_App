import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login =()=> {

    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    })
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res =>{return res.json()})
        .then((resp) => {
            //console.log(resp)
            if (Object.keys(resp).length === 0) {
                toast.error('Please Enter valid username');
            } else {
                if (resp.password === formData.password) {
                    toast.success('Success! ');
                    localStorage.setItem('email',formData.email);
                    navigate('/profile')
                }else{
                    toast.error('Please Enter valid credentials');
                }
            }
        }).catch((err) => {
            toast.error('Failed !' + err.message);
        });
       
      
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
   
          <div className='center'>
          <h3>Login </h3>
      <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} />
          </Form.Group>
      
          <Button variant="primary" type="submit">
              Submit
          </Button>
      </Form>
      </div>
    )
}

export default Login