import React from "react"
import { Card } from "semantic-ui-react";

function TutorCard({tutor}){

    return(
        <Card>
            <img className= "image" src={tutor.image} alt={tutor.name}/>
            <div className="content">
                <h2>{tutor.name}</h2>
            </div>
        </Card>
    )
}

export default TutorCard;