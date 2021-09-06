import React from 'react'
import LiveCasinoHover from './LiveCasinoHover'
import SlotGameHover from './SlotGameHover'
import SportsHover from './SportsHover'
import EsportsHover from './EsportsHover'
import MinigamesHover from './MinigamesHover'
import ARHover from './ARHover'

const NavbarHover = ({selection, setHoveredTab}) => {

    return (
        <div 
            // className={`${selection && "w-full"} ${selection === 0 ? "h-340px" : "h-244px"}`} 
            onMouseLeave={() => setHoveredTab(false)}
        >
            <LiveCasinoHover selection={selection}/>
            <SlotGameHover selection={selection}/>
            <SportsHover selection={selection}/>
            <EsportsHover selection={selection}/>
            <MinigamesHover selection={selection}/>
            <ARHover selection={selection}/>
        </div>
    )
}

export default NavbarHover
