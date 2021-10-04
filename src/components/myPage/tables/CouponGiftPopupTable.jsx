import React from 'react'

const CouponGiftPopupTable = () => {

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
        <table className="shadow-subNavbar rounded-3xl">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td className="w-143px text-center">선택</td>
                    <td className="w-198px text-center">아이디</td>
                    <td className="w-199px text-center">별명</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="bg-gray-fefefe rounded-3xl font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </tr>
            </tbody>
        </table> 
    )
}

export default CouponGiftPopupTable
