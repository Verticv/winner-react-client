import React from 'react'

const CouponGiftPopupTable = () => {

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
        <div style={{borderRadius:"0.5rem"}} className="shadow-subNavbar overflow-y-scroll">
            <div className="bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd flex items-center">
                <div>
                    <td className="w-143px text-center">선택</td>
                    <td className="w-198px text-center">아이디</td>
                    <td className="w-199px text-center">별명</td>
                </div>
            </div>
            <div style={{height:"280px"}} className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <div className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-f7f9fc font-spoqa text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd flex items-center">
                    <td className="w-143px text-center">{RadioButton}</td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
            </div>
        </div> 
    )
}

export default CouponGiftPopupTable
