import React from 'react'

const BetHistoryTable = () => {
    return (
        <table className="shadow-subNavbar rounded-3xl overflow-hidden">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaBold text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td className="w-235px text-center">베팅시간</td>
                    <td className="w-170px text-center">게임종류</td>
                    <td className="w-170px text-center">티켓번호</td>
                    <td className="w-170px text-center">베팅금액</td>
                    <td className="w-170px text-center">적중/손실금액</td>
                    <td className="w-126px text-center">상태</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-235px font-roboto h-56px text-center">2021-06-29 15:46:13</td>
                    <td className="w-170px h-56px text-center">에볼루션</td>
                    <td className="w-170px h-56px text-center font-roboto">7193915</td>
                    <td className="w-170px h-56px text-right font-roboto">12,000</td>
                    <td className="w-170px h-56px text-right font-roboto">-12,000</td>
                    <td className="w-126px h-56px text-center">패</td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px border-b border-gray-dddddd">
                    <td className="w-235px font-roboto h-56px text-center">2021-06-29 15:45:42</td>
                    <td className="w-170px h-56px text-center">에볼루션</td>
                    <td className="w-170px h-56px text-center font-roboto">7193914</td>
                    <td className="w-170px h-56px text-right font-roboto">900,000,000</td>
                    <td className="w-170px h-56px text-right text-red-600 font-roboto">+900,000,000</td>
                    <td className="w-126px h-56px text-center text-red-600">승</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px w-full">
                    <td className="w-235px font-roboto h-56px text-center">2021-06-29 15:46:13</td>
                    <td className="w-170px h-56px text-center">프레그메틱플레이</td>
                    <td className="w-170px h-56px text-center font-roboto">7193913</td>
                    <td className="w-170px h-56px text-right font-roboto">800,000</td>
                    <td className="w-170px h-56px text-right font-roboto">-800,000</td>
                    <td className="w-126px h-56px text-center">패</td>
                </tr>
            </tbody>
        </table>      
    )
}

export default BetHistoryTable
