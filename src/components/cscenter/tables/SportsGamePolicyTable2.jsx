import React from 'react'

const SportsGamePolicyTable2 = () => {
    return (
        <table className="shadow-subNavbar rounded-3xl overflow-hidden">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaBold text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td style={{width: "248px"}} className="text-center pl-20px">타입및 경기시간</td>
                    <td style={{width: "792px"}} className="text-center">결과적용기준</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                    <td style={{width: "248px"}} className="font-spoqaBold h-56px text-center pl-20px flex justify-around items-center">
                        <p style={{color: "#dbae00"}}>연장제외</p>
                        <p>연장없음</p>
                    </td>
                    <td style={{width: "792px"}} className="h-56px pl-20px">정규시간 (전반전/후반전)의 경기결과만 적용 합니다. (연장전 및 승부차기는 제외 됩니다)</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                    <td style={{width: "248px", color: "#905a12"}} className="font-spoqaBold h-56px text-center pl-20px">핸디캡 (전체)</td>
                    <td style={{width: "792px"}} className="h-56px pl-20px">선택한 기준점수는 미만 또는 초과 이므로, 연장을 포함하여 핸디캡 적용 결과가 무승부일 경우는 미당첨 처리됨</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                    <td style={{width: "248px", color: '#75942d'}} className="font-spoqaBold h-56px text-center pl-20px">언더오버 (전체)</td>
                    <td style={{width: "792px"}} className="h-56px pl-20px">선택한 기준점수는 연장을 포함하여 동일한 기준점수로 종료 될 경우 적중특례 처리됨</td>
                </tr>
            </tbody>
        </table>     
    )
}

export default SportsGamePolicyTable2
