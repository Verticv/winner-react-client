import React, { useState } from 'react'
import LoginIcon from '../../images/login_icon.png'
import SignupPopup from './SignupPopup'
import CloseIcon from '../../images/close_icon.png'

const LoginPopup = ({setAuth, setPopupOpen}) => {
    
    const [selectedInput, setSelectedInput] = useState()
    const [toSignup, setToSignup] = useState(false)

    return (
        <>
            {toSignup ? (
                <SignupPopup />
            ) : (
                <div className="relative w-630px h-513px bg-white rounded-xl">
                    <button className="w-29 h-29 absolute top-0 right-0 mt-20px mr-19px cursor-pointer z-20" onClick={()=> setPopupOpen(false)}>
                        <img src={CloseIcon} alt="close_icon" />
                    </button>
                    <div className="absolute w-630px -mt-79px flex justify-center">
                        <div className="flex items-center justify-center h-158px w-158px">
                            <img src={LoginIcon} alt="login_icon"/>
                        </div>
                    </div>
                    {/* BREAK */}
                    <div className="w-full h-full flex flex-col items-center justify-end space-y-40px pb-66px">
                        <div className="w-480px">
                            <input 
                                className="w-full h-12 text-25px text-center outline-none font-spoqaMedium tracking-tight placeholder-gray-bebebe pb-10px tracking-mimus05" 
                                placeholder={"아이디"} 
                                onFocus={(e) => {
                                    e.target.placeholder = ""
                                    setSelectedInput(0)
                                }} 
                                onBlur={(e) => {
                                    e.target.placeholder = "아이디"
                                    setSelectedInput(false)
                                }}
                            />
                            <div className={`${selectedInput === 0 ? "border-blue-r1ca7ec" : "border-gray-bebebe"} border-b w-full`} />
                        </div>
                        <div className="w-480px">
                            <input 
                                className="w-full h-12 text-25px text-center outline-none font-spoqaMedium tracking-tight placeholder-gray-bebebe pb-10px tracking-mimus05" 
                                placeholder={"비밀번호"} 
                                onFocus={(e) => {
                                    e.target.placeholder = ""
                                    setSelectedInput(1)
                                }} 
                                onBlur={(e) => {
                                    e.target.placeholder = "비밀번호"
                                    setSelectedInput(false)
                                }}
                            />
                            <div className={`${selectedInput === 1 ? "border-blue-r1ca7ec" : "border-gray-bebebe"} border-b w-full`} />
                        </div>
                        <div className="w-480px">
                            <button 
                                className="w-full h-74px rounded-md bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-xl text-27px font-spoqaMedium text-white"
                                onClick={() => setAuth(true)}
                            >로그인</button>
                        </div>
                        <div className="w-full space-x-2 text-center font-spoqaMedium text-20px tracking-minus05">
                            <span className="text-gray-600">아이디가 없으신가요?</span>
                            <button className="text-blue-r1ca7ec" onClick={() => setToSignup(true)}>회원가입</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default LoginPopup
