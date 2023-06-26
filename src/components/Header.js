import React from 'react'
import { Image } from 'semantic-ui-react'

function Header(){
    return(
        <header>
            <Image src="/images/cogni.png" alt="Cogni Logo" size="medium"/>
        </header>
    )
}

// const HeaderImage = () => (
//     <header>

//     </header>
//     <Image src="/images/cogni.png" alt="Cogni Logo" size="medium"/>
//     // <Header as="h1" image="/images/cogni.png" alt="Cogni Logo" size={500}/>
// )

export default Header;