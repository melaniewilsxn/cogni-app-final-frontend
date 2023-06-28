import React, { useState, useEffect} from 'react'
import { Card, Divider } from 'semantic-ui-react'
import TutorCard from "./TutorCard"
import Filter from "./Filter"

function TutorList(){

    const [tutorList, setTutorList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/tutors")
        .then(res  => res.json())
        .then(data => setTutorList(data))
    }, [])

    const displayTutors = tutorList.map((tutor) => {
        return <TutorCard tutor={tutor} key={tutor.id}/>
    })
    
    return(
        <div>
            <h1>Our Tutors</h1>
            <Divider />
            <p>
            At Cogni, we prioritize building strong student-tutor relationships as the foundation of our work. We are committed to selecting only the most highly qualified tutors who possess a bachelor's degree or higher. We firmly believe that effective teaching requires not only intellectual ability and enthusiasm but also maturity and experience. Our tutors bring a wealth of subject expertise, often holding advanced degrees in their respective disciplines, coupled with a genuine passion for the subjects they teach. This unique combination of deep subject knowledge and extensive teaching experience enables our tutors to excel in their role. Many of them have valuable experience as seasoned classroom teachers, while others have dedicated themselves to volunteering or teaching outside traditional classroom settings. Above all, our tutors have a remarkable track record of success in improving student performance. We take immense pride in presenting our exceptional team of tutors who are dedicated to guiding students towards academic excellence.
            </p>
            <Divider />
            <Filter />
            <Card.Group centered>
                {displayTutors}
            </Card.Group>
        </div>
    )
}

export default TutorList;