import React, { useState } from 'react'

import PowerBallResults from './results/PowerBallResults'
import PowerballHistory from './history/PowerballHistory'
import PowerballGame from './game/PowerballGame'

const PowerballPanel = ({
    selectedTab, 
    setSelectedTab, 
    historyArray, 
    resultsArray,
    checkedState, 
    setCheckedState
}) => {

    const [chosen, setChosen] = useState("")


    return (
        <>
            {selectedTab === 0 ? (
                <PowerballGame state={chosen} setChosen={setChosen} />
            ) : selectedTab === 1 ? (
                <PowerBallResults array={resultsArray} />
            ) : (
                <PowerballHistory array={historyArray} checkedState={checkedState} setCheckedState={setCheckedState} />   
            )}


            
        </>
    )
}

export default PowerballPanel
