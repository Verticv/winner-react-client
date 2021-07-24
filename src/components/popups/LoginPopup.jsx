import React, { useState } from 'react'
import LoginIcon from '../../images/login_icon.png'

const LoginPopup = ({setAuth}) => {
    
    const [selectedInput, setSelectedInput] = useState()

    return (
        <div className="w-124 h-112 bg-white rounded-xl">
            <div className="absolute w-124 -mt-16 flex justify-center">
                <div className="relative flex items-center justify-center h-32 w-32 rounded-full bg-blue-400">
                    <img src={LoginIcon} alt="login_icon"/>
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
                        className="w-full h-16 rounded-md bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-xl"
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
