import MyPageTitle from 'components/myPage/MyPageTitle'
import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import AlertIcon from '../../images/myPage/alert.png'

const MoneyExchange = () => {
    
    const [page, setPage] = useState(0)

    return (
        <div className="flex flex-col items-center">
            
            <MyPageTitle title="보유머니 환전" />

            <div className="mt-20px w-full h-157px rounded-2xl border border-red-e8c2b3 bg-red-ffe9de px-19px pt-17px">
                <div className="flex items-center h-26px space-x-10px">
                    <img src={AlertIcon} alt="" />
                    <span className="text-red-ee3c62 font-spoqaMedium text-20px tracking-tight">확인/필독사항</span>
                </div>
                <div className="mt-18px flex flex-col space-y-14px text-red-ac6d6d tracking-tight font-spoqaMedium text-16px">
                    <span className="h-14px"><span className="font-bold">✓</span>  환전 신청 시 현재 보유머니에서 차감되며, 회원님의 계좌번호로 입금됩니다.</span>
                    <span className="h-14px"><span className="font-bold">✓</span>  은행 점검 시간을 확인하신 후 해당 시간에는 입금이 지연될 수 있으니 점검 시간을 피해 신청해 주시기 바랍니다.</span>
                    <span className="h-14px"><span className="font-bold">✓</span>  자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.</span>
                </div>
            </div>

            <div style={{height: "474px"}} className="mt-20px w-full rounded-2xl shadow-subNavbar p-10px">
                <div style={{height: "128px"}} className="w-full rounded-2xl border border-gray-dddddd bg-gray-f9f9f9"></div>
            </div>

            <button style={{width: "228px"}} className="flex items-center justify-center h-52px rounded-4px bg-blue-r0070d9 mt-20px">
                <div style={{width: "226px"}} className="flex items-center justify-center h-50px rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                    <span className="font-spoqaMedium tracking-tight text-16px text-white">신청하기</span>
                </div>
            </button>

            <div className="mt-20px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

            <div style={{height: "344px"}} className="w-full rounded-2xl border border-gray-dddddd mb-60px -mt-20px" ></div>
        </div>
    )
}

export default MoneyExchange
