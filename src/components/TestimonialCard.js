import React from "react"
import { Header, Divider } from "semantic-ui-react";

function TestimonialCard({testimonial}){

    return(
        <div>
            <Header as='h3'>Testimonial from {testimonial.first_name} {testimonial.last_initial}:</Header>
            <p>"{testimonial.testimonial}"</p>
            
            <Divider section />
        </div>
    )
}

export default TestimonialCard;