import React from 'react'

const CouponUsageTable = () => {

    const UseButton = () => (
        <button className="w-73px h-29px bg-red-e9441d rounded-full flex justify-center items-center">
            <span className="text-white text-14px font-spoqaMedium tracking-tight">사용하기</span>
        </button>
    )

    return (
        <table className="shadow-subNavbar rounded-3xl overflow-hidden">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td className="w-313px text-center">쿠폰명</td>
                    <td className="w-172px text-center">쿠폰금액</td>
                    <td className="w-111px text-center">보낸회원아이디</td>
                    <td className="w-108px text-center">처리상태</td>
                    <td className="w-122px text-center">발급일</td>
                    <td className="w-111px text-center">만료일</td>
                    <td className="w-103px text-center">쿠폰사용</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-313px text-center">테스트쿠폰</td>
                    <td className="w-172px text-right text-red-e9441d pr-20px">10,000</td>
                    <td className="w-111px text-center">eric123</td>
                    <td className="w-108px text-center text-blue-r0056a6">사용가능</td>
                    <td className="w-122px text-center">2021-06-29</td>
                    <td className="w-111px text-center">2021-07-29</td>
                    <td className="w-103px pl-13px"><UseButton /></td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                    <td className="w-313px text-center">테스트쿠폰</td>
                    <td className="w-172px text-right text-red-e9441d pr-20px">10,000</td>
                    <td className="w-111px text-center">eric123</td>
                    <td className="w-108px text-center text-blue-r0056a6">사용가능</td>
                    <td className="w-122px text-center">2021-06-29</td>
                    <td className="w-111px text-center">2021-07-29</td>
                    <td className="w-103px pl-13px"><UseButton /></td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full">
                    <td className="w-313px text-center">테스트쿠폰</td>
                    <td className="w-172px text-right text-red-e9441d pr-20px">10,000</td>
                    <td className="w-111px text-center">eric123</td>
                    <td className="w-108px text-center text-blue-r0056a6">사용가능</td>
                    <td className="w-122px text-center">2021-06-29</td>
                    <td className="w-111px text-center">2021-07-29</td>
                    <td className="w-103px pl-13px"><UseButton /></td>
                </tr>
            </tbody>
        </table>   
    )
}

export default CouponUsageTable
