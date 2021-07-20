import React, { useState } from 'react'

const LoginPopup = ({setAuth}) => {
    
    const [selectedInput, setSelectedInput] = useState()

    return (
        <div className="w-124 h-112 bg-white rounded-xl">

            <div className="absolute w-124 -mt-16 flex justify-center">
                <div className="relative flex items-center justify-center h-32 w-32 rounded-full bg-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 z-20" viewBox="0 0 20 20" fill="#60A5FA">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                    <div className="absolute bg-white w-24 h-24 z-10 rounded-full"></div>
                </div>
            </div>
            {/* BREAK */}

            <div className="w-full h-full flex flex-col items-center justify-center space-y-8 px-24">
                <div className="w-full">
                    <input className="w-full h-12 text-xl text-black outline-b text-center outline-none" placeholder={"아이디"} onClick={() => setSelectedInput(0)}/>
                    <div className={`${selectedInput === 0 ? "border-blue-400" : "border-gray-200"} border w-full`} />
                </div>
                <div className="w-full">
                    <input className="w-full h-12 text-xl text-black outline-b text-center outline-none" placeholder={"비밀번호"} onClick={() => setSelectedInput(1)}/>
                    <div className={`${selectedInput === 1 ? "border-blue-400" : "border-gray-200"} border w-full`} />
                </div>
                <div className="w-full">
                    <button 
                        className="w-full h-16 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 text-xl"
                        onClick={() => setAuth(true)}
                    >로그인</button>
                </div>
                <div className="w-full space-x-2 text-center">
                    <span className="text-gray-600">아이디가 없으신가요?</span>
                    <button className="text-blue-400">회원가입</button>
                </div>
            </div>
            
        </div>
    )
}

export default LoginPopup
