import React from "react"
import { Form } from 'semantic-ui-react'

function TestimonialForm(){
    const formStyles = {
        margin: '10px 0px',
    };

    return(
        <Form style={formStyles}>
            <Form.Group widths="equal">
                <Form.Input fluid label='First name' placeholder='First name'/>
                <Form.Input fluid label='Last initial' placeholder='Last initial'/>
            </Form.Group>
            <Form.TextArea label='Testimonial' placeholder='Tell us what you think...' />
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Form.Button>Submit</Form.Button>
        </Form>
    )
}

export default TestimonialForm;