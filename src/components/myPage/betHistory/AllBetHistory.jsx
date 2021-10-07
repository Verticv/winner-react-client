import React from 'react'
import DateSearchBar from '../DateSearchBar'
import AllHistoryTable from '../tables/AllHistoryTable'

const AllBetHistory = () => {
    return (
        <div>
            <DateSearchBar isLeagueSearch={false} />
            <div className="w-full h-full mt-20px mb-60px">
                <AllHistoryTable />
            </div>
        </div>
    )
}

export default AllBetHistory
