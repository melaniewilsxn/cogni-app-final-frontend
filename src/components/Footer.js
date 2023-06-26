import React from 'react'
import { Container, Segment } from 'semantic-ui-react';

function Footer(){
    const footerStyles = {
        backgroundColor: '#333',
        color: 'white',
        padding: '0.5em 0em',
        margin: '20px 0px 0px 0px',
    };

    return(
        <Segment inverted vertical style={footerStyles}>
            <Container textAlign="left">
            Cogni LLC © 2023
            </Container>
        </Segment>
    )
}

export default Footer;