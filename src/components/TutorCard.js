import React, { useState } from "react"
import { Card, Image, Button } from "semantic-ui-react";

function TutorCard({tutor}){

    const [tutorClicked, setTutorClicked] = useState(false)

    function handleClick(){
        setTutorClicked(!tutorClicked)
    }

    return(
        <Card>
            <Image src={tutor.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{tutor.first_name} {tutor.last_name}</Card.Header>
                <Card.Meta>{tutor.subject}</Card.Meta>
                {tutorClicked ? 
                <Card.Description>
                    Grade tutored: {tutor.grade} <br></br>
                    Email: {tutor.email} <br></br>
                    Fun fact: {tutor.fun_fact}
                </Card.Description>
                : null}
            </Card.Content>
            <Button onClick={handleClick}>See More</Button>
        </Card>
    )
}

export default TutorCard;