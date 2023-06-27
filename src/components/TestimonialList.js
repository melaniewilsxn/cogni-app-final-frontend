import React, { useState, useEffect} from 'react'
import { Container, Divider, Segment } from 'semantic-ui-react'
import TestimonialCard from "./TestimonialCard"

function TestimonialList(){

    const [testimonialList, setTestimonialList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/testimonials")
        .then(res  => res.json())
        .then(data => setTestimonialList(data))
    }, [])

    const displayTestimonials = testimonialList.map((testimonial) => {
        return <TestimonialCard testimonial={testimonial} key={testimonial.id}/>
    })
    
    return(
        <Container>
            <h1>Testimonials</h1>
            <Divider />
            <Segment textAlign="left">
                {displayTestimonials}
            </Segment>
        </Container>
    )
}

export default TestimonialList;