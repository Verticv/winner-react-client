import React from 'react'
import LiveCasinoHover from './LiveCasinoHover'
import SlotGameHover from './SlotGameHover'
import SportsHover from './SportsHover'
import EsportsHover from './EsportsHover'
import MinigamesHover from './MinigamesHover'
import ARHover from './ARHover'

const NavbarHover = ({selection, setHoveredTab, setSelectedTab}) => {

    return (
        <div onMouseLeave={() => setSelectedTab()}>
            {selection === 0 ? (
                <LiveCasinoHover setHoveredTab={setHoveredTab} />
            ) : selection === 1 ? (
                <SlotGameHover setHoveredTab={setHoveredTab} />
            ) : selection === 2 ? (
                <SportsHover setHoveredTab={setHoveredTab} />
            ) : selection === 3 ? (
                <EsportsHover setHoveredTab={setHoveredTab} />
            ) : selection === 4 ? (
                <MinigamesHover setHoveredTab={setHoveredTab} />
            ) : selection === 5 ? (
                <ARHover setHoveredTab={setHoveredTab} />
            ) : (
                <></>
            )}
        </div>
    )
}

export default NavbarHover
