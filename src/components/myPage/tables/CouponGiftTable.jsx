import React from 'react'
import '../RadioButton.css'

const CouponGiftTable = () => {

    const RadioButton = (
        <input 
            className="radio" 
            type="radio" 
            name="radio" 
            // checked={isChecked === row}
            // onClick={() => setChecked(row)}
        />
    )

    return (
        <table className="shadow-subNavbar rounded-3xl overflow-hidden">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td className="w-79px text-center">선택</td>
                    <td className="w-340px text-center">쿠폰명</td>
                    <td className="w-143px text-center">쿠폰금액</td>
                    <td className="w-135px text-center">보낸회원아이디</td>
                    <td className="w-94px text-center">처리상태</td>
                    <td className="w-132px text-center">발급일</td>
                    <td className="w-119px text-center">만료일</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-79px text-center">{RadioButton}</td>
                    <td className="w-340px text-center">테스트쿠폰</td>
                    <td className="w-143px text-right text-red-e9441d pr-20px">10,000</td>
                    <td className="w-135px text-center">eric123</td>
                    <td className="w-94px text-center  text-blue-r0056a6">사용가능</td>
                    <td className="w-132px text-center">2021-06-29</td>
                    <td className="w-119px text-center">2021-07-29</td>
                </tr> 
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-79px text-center">{RadioButton}</td>
                    <td className="w-340px text-center">테스트쿠폰</td>
                    <td className="w-143px text-right text-red-e9441d pr-20px">10,000</td>
                    <td className="w-135px text-center">eric123</td>
                    <td className="w-94px text-center  text-blue-r0056a6">사용가능</td>
                    <td className="w-132px text-center">2021-06-29</td>
                    <td className="w-119px text-center">2021-07-29</td>
                </tr> 
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-79px text-center">{RadioButton}</td>
                    <td className="w-340px text-center">테스트쿠폰</td>
                    <td className="w-143px text-right text-red-e9441d pr-20px">10,000</td>
                    <td className="w-135px text-center">eric123</td>
                    <td className="w-94px text-center  text-blue-r0056a6">사용가능</td>
                    <td className="w-132px text-center">2021-06-29</td>
                    <td className="w-119px text-center">2021-07-29</td>
                </tr> 
            </tbody>
        </table> 
    )
}

export default CouponGiftTable