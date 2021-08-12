import React from 'react'
import LiveCasinoHover from './LiveCasinoHover'
import SlotGameHover from './SlotGameHover'
import SportsHover from './SportsHover'
import EsportsHover from './EsportsHover'
import MinigamesHover from './MinigamesHover'
import ARHover from './ARHover'

const NavbarHover = ({selection, setHoveredTab}) => {

    return (
        <div className={`w-full ${selection === 0 ? "h-340px" : "h-244px"}`} onMouseLeave={() => setHoveredTab(false)}>
            <LiveCasinoHover setHoveredTab={setHoveredTab} selection={selection}/>
            <SlotGameHover setHoveredTab={setHoveredTab} selection={selection}/>
            <SportsHover setHoveredTab={setHoveredTab} selection={selection}/>
            <EsportsHover setHoveredTab={setHoveredTab} selection={selection}/>
            <MinigamesHover setHoveredTab={setHoveredTab} selection={selection}/>
            <ARHover setHoveredTab={setHoveredTab} selection={selection}/>
        </div>
    )
}

export default NavbarHover
