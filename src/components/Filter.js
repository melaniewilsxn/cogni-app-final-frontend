import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'

function Filter({ filter, setFilter}){

    const filterStyle = {
        margin: '0px 0px 15px 0px',
        textAlign: 'center'
    };

    const options = [
        { key: 1, text: `Show All Tutors`, value: " "},
        { key: 2, text: `Humanities`, value: 'humanities' },
        { key: 3, text: `Language`, value: `language` },
        { key: 4, text: `Math`, value: `math` },
        { key: 5, text: `Science`, value: `science` },
    ]

    const handleFilterChange = ( event, data ) => setFilter(data.value)

    return(
        <Dropdown
            placeholder='Filter Tutors'
            icon='filter'
            className='icon'
            button
            floating
            labeled
            selection
            options={options}
            value={filter}
            style={filterStyle}
            onChange={handleFilterChange}
        />        
    )
}

export default Filter;