import React from 'react'
import { Container, Header, Divider } from 'semantic-ui-react'

function Contact(){
    return(
        <Container textAlign="left">
            <Header as='h2'>We are thrilled to hear from you!</Header>
            <Divider />
            <h3>Whether you have questions, want to learn more about our tutoring services, or are ready to get started, our team is here to assist you. Feel free to reach out to us through any of the following channels.</h3>
            <h3>Office Hours:</h3>
            <p>Monday-Friday: 9:00 AM - 6:00 PM<br></br>
            Saturday: 10:00 AM - 4:00 PM
            </p>
            <p>Our dedicated support team is available during office hours to provide you with prompt assistance and answer any inquiries you may have.</p>
            <h3>Mailing Address:</h3>
            <p>Cogni Tutoring Services<br></br>
                1234 Elm Street<br></br>
                New York, NY, 10010
            </p>
            <h3>Connect with us on Social Media</h3>
            <p>Follow us on Facebook, Twitter, and Instagram to stay updated with the latest news, educational resources, and success stories. Join our vibrant community and be a part of the Cogni family!</p>
            <h3>We're Hiring!</h3>
            <p>Passionate about education and making a difference in students' lives? We are always looking for talented tutors to join our team. If you are interested in becoming a part of Cogni, please email your resume to careers@cognitutoring.com.</p>
            <h3>We value your feedback!</h3>
            <p>Your feedback helps us continuously improve our services and better serve our students. If you have any suggestions, comments, or testimonials, please email us at feedback@cognitutoring.com, or leave a review on our Testimonials page on our website. We greatly appreciate your input.</p>
            <p>At Cogni, we are committed to providing exceptional tutoring services and outstanding customer support. Don't hesitate to get in touch with us. We look forward to assisting you on your educational journey!</p>
        </Container>
    )
}

export default Contact;