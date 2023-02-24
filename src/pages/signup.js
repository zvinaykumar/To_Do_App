import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)

        })
            .then(res => {
                if (res.status === 201) {
                    toast.success('Success !', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    navigate("/login");
                }
            })
            .catch((error) =>{
                toast.error('Failed !'+error.message)
            })
    }

    const handleChange = (e) => {
        console.log("value", e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (

        <div className='center'>
            <h3>Sign Up</h3>
            <Form onSubmit={e => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="username" value={formData.username} name='username' onChange={e => handleChange(e)} required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={formData.email} name='email' onChange={e => handleChange(e)} required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={formData.password} name='password' onChange={e => handleChange(e)} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )
}

export default Signup
