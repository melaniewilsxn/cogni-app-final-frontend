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
                <Card.Header>{tutor.name}</Card.Header>
                <Card.Meta>{tutor.subject}</Card.Meta>
                {tutorClicked ? 
                <Card.Description>
                    Daniel is a comedian living in Nashville.
                </Card.Description>
                : null}
            </Card.Content>
            <Button onClick={handleClick}>See More</Button>
        </Card>
    )
}

export default TutorCard;

{/* <Card>
<img className= "image" src={tutor.image} alt={tutor.name}/>
<div className="content">
    <h2>{tutor.name}</h2>
</div>
</Card> */}