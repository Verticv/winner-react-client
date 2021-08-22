import React from 'react'

const MyPageTitle = ({title}) => {
    return (
        <div className="flex h-21px w-full">
            <div className="w-8px h-20px bg-gradient-to-b from-blue-gradLight to-blue-gradDark rounded-sm mt-px"/>
            <label className="font-spoqaMedium text-22px text-gray-r585858 ml-4px -mt-5px">{title}</label>
        </div>
    )
}

export default MyPageTitle
