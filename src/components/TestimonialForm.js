import React, { useState } from "react"
import { Form, Modal, Button } from 'semantic-ui-react'

function TestimonialForm({onAddNewTestimonial}){
    const formStyles = {
        margin: '10px 0px',
    };

    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState(false)
    const [formData, setFormData] = useState({
        "first_name": "",
        "last_initial": "",
        "testimonial": ""
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
          })
    }

    function handleSubmit(e){
        e.preventDefault()
        if(isChecked){
            const testimonialData = {
                "first_name": formData.first_name,
                "last_initial": formData.last_initial,
                "testimonial": formData.testimonial
            }
            fetch("http://localhost:3001/testimonials", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(testimonialData)
            })
            .then(res => res.json())
            .then(newTestimonial => onAddNewTestimonial(newTestimonial))
    
            setFormData({
                "first_name": "",
                "last_initial": "",
                "testimonial": ""
            })
            setIsChecked(false)
            setError(false)
        }
        else{
            setError(true)
        }
      }

    return(
        <Form style={formStyles} onSubmit={handleSubmit}>
            <Form.Group widths="equal">
                <Form.Input fluid label='First name' placeholder='First name' name="first_name" value={formData.first_name} onChange={handleChange}/>
                <Form.Input fluid label='Last initial' placeholder='Last initial'  name="last_initial"value={formData.last_initial} onChange={handleChange}/>
            </Form.Group>
            <Form.TextArea label='Testimonial' placeholder='Tell us what you think...' name="testimonial" value={formData.testimonial} onChange={handleChange}/>
            <Modal 
              size={"tiny"}
              open={error}
            >
                <Modal.Content>
                    <p>Please agree to the Terms and Conditions.</p>
                </Modal.Content>
                <Modal.Actions>
                <Button positive onClick={() => setError(false)}>
                    OK
                </Button>
                </Modal.Actions>
            </Modal>
            <Form.Checkbox label='I agree to the Terms and Conditions' checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
            <Form.Button>Submit</Form.Button>
        </Form>
    )
}

export default TestimonialForm;