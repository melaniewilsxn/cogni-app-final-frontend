import React from 'react'
import { Container, Header, Divider, Image } from 'semantic-ui-react'

function About(){
    return(
        <Container textAlign="left">
            <Header as='h2'>Meet Dr. Sophia Reynolds</Header>
            <Image src="https://images.unsplash.com/photo-1615538785945-6625ccdb4b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" size="medium"/>
            <Divider />
            <p>
            Dr. Sophia Reynolds, the visionary founder and CEO of Cogni, is a true advocate for empowering students to reach their full potential. With a profound passion for education and a deep understanding of the challenges faced by students in the modern learning landscape, Dr. Reynolds embarked on a mission to revolutionize the tutoring industry.
            </p>
            <p>
            Driven by her own experiences as a student and her unwavering belief in the transformative power of personalized learning, Dr. Reynolds embarked on a journey to create Cogni. Having witnessed firsthand the struggles faced by students who were falling through the cracks of traditional education systems, she recognized the need for a holistic approach that catered to individual needs and fostered a love for learning.
            </p>
            <p>
            As a former educator and researcher, Dr. Reynolds holds a Ph.D. in Educational Psychology. Her extensive knowledge in the field, coupled with her innovative thinking, led her to envision a tutoring platform that combined the best of technology and human expertise. She wanted to create a space where students could receive one-on-one attention, customized learning plans, and access to a network of highly qualified tutors passionate about making a difference.
            </p>
            <p>
            Driven by her unwavering commitment to educational equity and a vision of empowering every student to thrive academically, Dr. Reynolds assembled a team of dedicated educators and technologists to bring Cogni to life. Together, they designed a cutting-edge platform that seamlessly integrates advanced learning algorithms with personalized guidance, fostering a nurturing environment where students can grow, build confidence, and achieve remarkable academic success.
            </p>
            <p>
            Under Dr. Reynolds' leadership, Cogni has become a trusted name in the education industry, positively impacting countless students' lives and transforming the way tutoring is approached. Through her tireless dedication and unwavering commitment to excellence, Dr. Sophia Reynolds continues to shape the future of education, one student at a time.
            </p>
        </Container>
    )
}

export default About;