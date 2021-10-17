import React from 'react'
import DateSearchBar from '../DateSearchBar'
import EsportsBetHistoryTable from '../tables/EsportsBetHistoryTable'

const ESportsBetHistory = () => {
    return (
        <div className="w-full">

            <DateSearchBar isLeagueSearch={false} />

            <div className="w-full h-full mt-20px">
                <EsportsBetHistoryTable />  
            </div>
        </div>
    )
}

export default ESportsBetHistory
