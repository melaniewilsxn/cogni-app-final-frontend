import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

function Filter(){
    const filterStyle = {
        margin: '0px 0px 15px 0px',
    };

    return(
        <Dropdown
            text='Filter Tutors'
            icon='filter'
            floating
            labeled
            button
            className='icon'
            style={filterStyle}
        >
            <Dropdown.Menu>
                <Dropdown.Header content="By subject"/>
                <Dropdown.Menu scrolling>
                    <Dropdown.Item key="Humanities" text="Humanities" value="Humanities"/>
                    <Dropdown.Item key="Language" text="Language" value="Language"/>
                    <Dropdown.Item key="Math" text="Math" value="Math"/>
                    <Dropdown.Item key="Science" text="Science" value="Science"/>
                </Dropdown.Menu>
                <Dropdown.Header content="By grade"/>
                <Dropdown.Menu scrolling>
                    <Dropdown.Item key="Elementary" text="Elementary" value="Elementary"/>
                    <Dropdown.Item key="Middle" text="Middle" value="Middle"/>
                    <Dropdown.Item key="High" text="High" value="High"/>
                </Dropdown.Menu>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Filter;