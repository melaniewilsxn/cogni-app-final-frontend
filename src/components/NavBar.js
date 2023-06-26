import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <Menu>
            <Menu.Item as={NavLink} exact to="/" name="home">Home</Menu.Item>
            <Menu.Item as={NavLink} exact to="/about" name="home">About</Menu.Item>
            <Menu.Item as={NavLink} exact to="/tutors" name="home">Meet Our Tutors</Menu.Item>
            <Menu.Item as={NavLink} exact to="/contact" name="home">Contact Us</Menu.Item>
            <Menu.Item as={NavLink} exact to="/testimonials" name="home">Testimonials</Menu.Item>
        </Menu>
    )
}

export default NavBar;