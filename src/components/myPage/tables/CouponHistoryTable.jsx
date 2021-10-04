import React from 'react'

const CouponHistoryTable = () => {
    return (
        <table className="shadow-subNavbar rounded-3xl overflow-hidden">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td className="w-292px text-center">쿠폰명</td>
                    <td className="w-119px text-center">쿠폰금액</td>
                    <td className="w-140px text-center">받는회원아이디</td>
                    <td className="w-137px text-center">보낸일시</td>
                    <td className="w-141px text-center">처리상태</td>
                    <td className="w-88px text-center">발급일</td>
                    <td className="w-124px text-center">만료일</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="bg-gray-fefefe rounded-3xl font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-292px text-center">테스트쿠폰</td>
                    <td className="w-119px text-right text-red-e9441d font-robotoRegular pr-10px">10,000</td>
                    <td className="w-140px text-center">eric123</td>
                    <td className="w-137px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{color:"#92278f"}} className="w-141px text-center">선물완료</td>
                    <td className="w-88px text-center font-robotoRegular">2021-06-29</td>
                    <td className="w-124px text-center font-robotoRegular">2021-07-29</td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-292px text-center">테스트쿠폰</td>
                    <td className="w-119px text-right text-red-e9441d font-robotoRegular pr-10px">10,000</td>
                    <td className="w-140px text-center">eric123</td>
                    <td className="w-137px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{color:"#92278f"}} className="w-141px text-center">선물완료</td>
                    <td className="w-88px text-center font-robotoRegular">2021-06-29</td>
                    <td className="w-124px text-center font-robotoRegular">2021-07-29</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-292px text-center">테스트쿠폰</td>
                    <td className="w-119px text-right text-red-e9441d font-robotoRegular pr-10px">10,000</td>
                    <td className="w-140px text-center">eric123</td>
                    <td className="w-137px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{color:"#92278f"}} className="w-141px text-center">선물완료</td>
                    <td className="w-88px text-center font-robotoRegular">2021-06-29</td>
                    <td className="w-124px text-center font-robotoRegular">2021-07-29</td>
                </tr>
            </tbody>
        </table> 
    )
}

export default CouponHistoryTable
