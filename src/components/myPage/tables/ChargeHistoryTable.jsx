import React from 'react'
import '../RadioButton.css'

const ChargeHistoryTable = () => {

    const RadioButton = (
        <input 
            className="radio" 
            type="checkbox" 
            name="radio" 
            // checked={isChecked === row}
            // onClick={() => setChecked(row)}
        />
    )

    return (
        <table className="shadow-subNavbar rounded-3xl overflow-hidden">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <th className="w-132px">선택</th>
                    <th className="w-181px">신청일시</th>
                    <th className="w-188px">충전금액</th>
                    <th className="w-205px">보너스금액</th>
                    <th className="w-180px">처리일시</th>
                    <th className="w-157px">처리상태</th>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-132px font-roboto h-56px text-center">{RadioButton}</td>
                    <td className="w-181px h-56px text-center">2021-06-29 15:45:41</td>
                    <td className="w-188px h-56px text-right pr-34px">12,000</td>
                    <td className="w-205px h-56px text-right pr-34px text-red-500">+1,000</td>
                    <td className="w-180px h-56px text-center">2021-06-29 15:45:41</td>
                    <td className="w-157px h-56px text-center text-blue-r0056a6">완료</td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                    <td className="w-132px font-roboto h-56px text-center">{RadioButton}</td>
                    <td className="w-181px h-56px text-center">2021-06-29 15:45:41</td>
                    <td className="w-188px h-56px text-right pr-34px">100,000</td>
                    <td className="w-205px h-56px text-right pr-34px text-red-500">+1,000</td>
                    <td className="w-180px h-56px text-center">2021-06-29 15:45:41</td>
                    <td className="w-157px h-56px text-center">취소</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full">
                    <td className="w-132px font-roboto h-56px text-center">{RadioButton}</td>
                    <td className="w-181px h-56px text-center">2021-06-29 15:45:41</td>
                    <td className="w-188px h-56px text-right pr-34px">50,000</td>
                    <td className="w-205px h-56px text-right pr-34px text-red-500">+1,000</td>
                    <td className="w-180px h-56px text-center">2021-06-29 15:45:41</td>
                    <td className="w-157px h-56px text-center text-blue-r0056a6">완료</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ChargeHistoryTable
