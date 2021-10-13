import React from 'react'
import DateSearchBar from '../DateSearchBar'

const ESportsBetHistory = () => {
    return (
        <div className="w-full">
            <DateSearchBar isLeagueSearch={false} />

            <div className="my-60px flex w-full justify-center text-14px font-spoqaMedium text-gray-r454545">이 기간에 베팅이 이루어지지 않았습니다.</div>
            
        </div>
    )
}

export default ESportsBetHistory
