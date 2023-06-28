import React, { useState, useEffect} from 'react'
import { Container, Divider, Segment, Button } from 'semantic-ui-react'
import TestimonialCard from "./TestimonialCard"
import TestimonialForm from './TestimonialForm'

function TestimonialList(){

    const [testimonialList, setTestimonialList] = useState([])
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3001/testimonials")
        .then(res  => res.json())
        .then(data => setTestimonialList(data))
    }, [])

    const displayTestimonials = testimonialList.map((testimonial) => {
        return <TestimonialCard testimonial={testimonial} key={testimonial.id}/>
    })

    function handleClick(){
        setClicked(!clicked)
    }

    function handleNewTestimonial(newTestimonial){
        setTestimonialList([...testimonialList, newTestimonial])
    }
    
    return(
        <Container>
            <h1>Testimonials</h1>
            <Divider />
            {clicked ? <TestimonialForm onAddNewTestimonial={handleNewTestimonial}/> : null}
            {clicked ? <Button color='yellow' onClick={handleClick}>Hide Testimonial Form</Button> : <Button color='yellow' onClick={handleClick}>Add Testimonial</Button>}
            <Segment textAlign="left">
                {displayTestimonials}
            </Segment>
        </Container>
    )
}

export default TestimonialList;