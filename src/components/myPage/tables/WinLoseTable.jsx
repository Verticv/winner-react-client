import React from 'react'

const WinLoseTable = () => {

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
        <div className="shadow-subNavbar rounded-3xl overflow-hidden">
            <table >
                <thead className="bg-gray-fafafa rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                    <tr>
                        <th className="w-100px">선택</th>
                        <th className="w-64px">번호</th>
                        <th className="w-176px">정산시작일</th>
                        <th className="w-136px">정산종료일</th>
                        <th className="w-265px">분류</th>
                        <th className="w-170px">금액</th>
                        <th className="w-128px">처리상태</th>
                    </tr>
                </thead>
                <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                    <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                        <td className="w-100px font-roboto h-56px text-center">{RadioButton}</td>
                        <td className="w-64px h-56px text-center">1</td>
                        <td className="w-176px h-56px text-center">2021-06-29</td>
                        <td className="w-136px h-56px text-center">2021-07-29</td>
                        <td className="w-265px h-56px text-center">스포츠</td>
                        <td className="w-170px h-56px text-center">78,308</td>
                        <td className="w-128px h-56px text-center">진행중인 금액</td>
                    </tr>
                    <tr className="bg-gray-f7f9fc rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                        <td className="w-100px font-roboto h-56px text-center">{RadioButton}</td>
                        <td className="w-64px h-56px text-center">2</td>
                        <td className="w-176px h-56px text-center">2021-06-29</td>
                        <td className="w-136px h-56px text-center">2021-07-29</td>
                        <td className="w-265px h-56px text-center">미니게임</td>
                        <td className="w-170px h-56px text-center text-red-500">+9,900</td>
                        <td className="w-128px h-56px text-center">정산완료</td>
                    </tr>
                    <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                        <td className="w-100px font-roboto h-56px text-center">{RadioButton}</td>
                        <td className="w-64px h-56px text-center">3</td>
                        <td className="w-176px h-56px text-center">2021-06-29</td>
                        <td className="w-136px h-56px text-center">2021-07-29</td>
                        <td className="w-265px h-56px text-center">에볼루션</td>
                        <td className="w-170px h-56px text-center text-red-500">+32,510</td>
                        <td className="w-128px h-56px text-center">정산완료</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px">
                <div className="w-full bg-gray-dee6ef h-56px flex items-center justify-center font-spoqaMedium text-16px tracking-tight border-r border-gray-dddddd">합계</div>
                <div className="w-full h-56px text-center flex items-center justify-center font-roboto tracking-tight text-red-500">+120,718</div>
            </div>
        </div>
    )
}

export default WinLoseTable
