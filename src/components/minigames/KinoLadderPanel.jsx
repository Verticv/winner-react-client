import React from 'react'
import KinoLadderGame from './game/KinoLadderGame'
import PowerballHistory from './history/PowerballHistory'
import SpeedKinoResults from './results/SpeedKinoResults'

const KinoLadderPanel = ({
    selectedTab, 
    setSelectedTab, 
    historyArray, 
    resultsArray,
    checkedState, 
    setCheckedState
}) => {

    return (
        <>
            {selectedTab === 0 ? (
                <KinoLadderGame />
            ) : selectedTab === 1 ? (
                <SpeedKinoResults array={resultsArray} />
            ) : selectedTab === 2 ? (
                <PowerballHistory array={historyArray} checkedState={checkedState} setCheckedState={setCheckedState} />   
            ) : <></>}
        </>
    )
}

export default KinoLadderPanel
