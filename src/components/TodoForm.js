import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const FormTodo =({ addTodo })=> {
    const [formData, setFormData] = useState({
        taskname: '',
        description: '',
        time: '',
        Category:''

    })
const options=[
    {
        label: "office",
        value: "office",
      },
      {
        label: "teem",
        value: "teem",
      },
      {
        label: "study",
        value: "study",
      }
]

    const handleChange = (e) => {
        console.log("value", e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSelect =(e,filed)=>{
        console.log(filed)
        setFormData({ ...formData, [filed]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        fetch('http://localhost:3000/Task', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)

        })
            .then(res => {
                if (res.status === 201) {
                    toast.success('Success !', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                   
                }
            })
            .catch((error) =>{
                toast.error('Failed !'+error.message)
            })
    }
  
    return (
      <Form onSubmit={handleSubmit} className="w-50 mx-auto"> 
      <Form.Group className="mb-3">
        <Form.Label><b>Task Name</b></Form.Label>
        <Form.Control type="text" className="input" name="taskname" value={formData.taskname} onChange={e => handleChange(e)} placeholder="Add new todo" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label><b>Description</b></Form.Label>
        <Form.Control type="text" className="input" name="description" value={formData.description} onChange={e => handleChange(e)} placeholder="Category" required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label ><b>ETA (Estimate Time of completion)</b></Form.Label>
        <Form.Control type="text" className="input" name="time" value={formData.time} onChange={e => handleChange(e)} placeholder="Add new todo" required />
      </Form.Group>
      

      <Form.Group className="mb-3">
        <Form.Label ><b>Category</b></Form.Label>
        <Form.Select aria-label="Default select example" onChange={e=> handleSelect(e,"Category")}>
        
            {options.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
       
    </Form.Select>
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
  

  export default FormTodo