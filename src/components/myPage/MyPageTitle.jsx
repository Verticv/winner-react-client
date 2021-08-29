import React from 'react'

const MyPageTitle = ({
    title, 
    couponCount = null,
    couponText ="사용 가능한 쿠폰:",
    pointsFor = null
}) => {
    return (
        <div className="flex h-21px w-full">
            <div className="w-8px h-20px bg-gradient-to-b from-blue-gradLight to-blue-gradDark rounded-3px mt-px"/>
            <label className="font-spoqaMedium text-22px text-gray-r585858 ml-4px -mt-5px">{title}</label>
            {couponCount && (
                <>
                    <div className="ml-20px h-21px flex items-center space-x-20px">
                        <div className="h-12px w-px bg-gray-r8c8c8c" />
                        <div className="font-spoqaMedium tracking-tight text-gray-r8c8c8c space-x-2px">
                            <span>{couponText}</span>
                            <span className="text-red-500 font-spoqaBold">{couponCount}</span>
                            <span>장</span>
                        </div>
                    </div>
                </>
            )}
            {pointsFor && (
                <div className="ml-20px h-21px flex items-center space-x-20px">
                    <div className="h-12px w-px bg-gray-r8c8c8c" />
                    <div className="font-spoqaMedium tracking-tight text-gray-r8c8c8c space-x-2px">
                        <span className="font-spoqaBold text-blue-r0056a6">{pointsFor}</span>
                        <span className="">님의 포인트적립 정보입니다.</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MyPageTitle
