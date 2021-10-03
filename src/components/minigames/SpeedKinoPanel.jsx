import React from 'react'
import SpeedKinoGame from './game/SpeedKinoGame'
import PowerballHistory from './history/PowerballHistory'
import SpeedKinoResults from './results/SpeedKinoResults'

const SpeedKinoPanel = ({
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
                <SpeedKinoGame />
            ) : selectedTab === 1 ? (
                <SpeedKinoResults array={resultsArray} />
            ) : selectedTab === 2 ? (
                <PowerballHistory array={historyArray} checkedState={checkedState} setCheckedState={setCheckedState} />   
            ) : <></>}
        </>
    )
}

export default SpeedKinoPanel
