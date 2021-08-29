import React from 'react'

const PointsAccumulateTable = () => {
    return (
        <table className="shadow-subNavbar rounded-3xl overflow-hidden">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td className="w-152px text-center">적립일</td>
                    <td className="w-133px text-center">제목</td>
                    <td className="w-129px text-center">아이디</td>
                    <td className="w-136px text-center">종류</td>
                    <td className="w-141px text-center">베팅금액</td>
                    <td className="w-116px text-center">퍼센트</td>
                    <td className="w-102px text-center">보너스퍼센트</td>
                    <td className="w-133px text-center">적립포인트</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-152px text-center">2021-06-30</td>
                    <td className="w-133px text-center">Rolling Bonus</td>
                    <td className="w-129px text-center">louie3</td>
                    <td className="w-136px text-center">스포츠</td>
                    <td className="w-141px text-right pr-14px">5,000</td>
                    <td className="w-116px text-center">1.00%</td>
                    <td className="w-102px text-center">100%</td>
                    <td className="w-133px text-center">50P</td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-152px text-center">2021-06-30</td>
                    <td className="w-133px text-center">Rolling Bonus</td>
                    <td className="w-129px text-center">louie3</td>
                    <td className="w-136px text-center">스포츠</td>
                    <td className="w-141px text-right pr-14px">5,000</td>
                    <td className="w-116px text-center">1.00%</td>
                    <td className="w-102px text-center">100%</td>
                    <td className="w-133px text-center">50P</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-152px text-center">2021-06-30</td>
                    <td className="w-133px text-center">Rolling Bonus</td>
                    <td className="w-129px text-center">louie3</td>
                    <td className="w-136px text-center">스포츠</td>
                    <td className="w-141px text-right pr-14px">5,000</td>
                    <td className="w-116px text-center">1.00%</td>
                    <td className="w-102px text-center">100%</td>
                    <td className="w-133px text-center">50P</td>
                </tr>
            </tbody>
        </table> 
    )
}

export default PointsAccumulateTable
