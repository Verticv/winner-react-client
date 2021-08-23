import React from 'react'

const BetHistoryTable = () => {
    return (
        <table className="shadow-subNavbar rounded-3xl overflow-hidden">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <th className="w-235px">베팅시간</th>
                    <th className="w-170px">게임종류</th>
                    <th className="w-170px">티켓번호</th>
                    <th className="w-170px">베팅금액</th>
                    <th className="w-170px">적중/손실금액</th>
                    <th className="w-126px">상태</th>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-235px font-roboto h-56px text-center">2021-06-29 15:46:13</td>
                    <td className="w-170px h-56px text-center">에볼루션</td>
                    <td className="w-170px h-56px text-center">7193915</td>
                    <td className="w-170px h-56px text-right">12,000</td>
                    <td className="w-170px h-56px text-right">-12,000</td>
                    <td className="w-126px h-56px text-center">패</td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                    <td className="w-235px font-roboto h-56px text-center">2021-06-29 15:45:42</td>
                    <td className="w-170px h-56px text-center">에볼루션</td>
                    <td className="w-170px h-56px text-center">7193914</td>
                    <td className="w-170px h-56px text-right">900,000,000</td>
                    <td className="w-170px h-56px text-right text-red-600">+900,000,000</td>
                    <td className="w-126px h-56px text-center text-red-600">승</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full">
                    <td className="w-235px font-roboto h-56px text-center">2021-06-29 15:46:13</td>
                    <td className="w-170px h-56px text-center">프레그메틱플레이</td>
                    <td className="w-170px h-56px text-center">7193913</td>
                    <td className="w-170px h-56px text-right">800,000</td>
                    <td className="w-170px h-56px text-right">-800,000</td>
                    <td className="w-126px h-56px text-center">패</td>
                </tr>
            </tbody>
        </table>      
    )
}

export default BetHistoryTable
