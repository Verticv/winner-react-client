import React, { useState } from 'react'
import SignupIcon from '../../images/sign_up_icon.png'
import KakaoLogo from '../../images/footer/kakao.png'
import TelegramLogo from '../../images/footer/telegram.png'
import SignedUpPopup from './SignedUpPopup'
import LoginPopup from './LoginPopup'

const SignupPopup = ({setAuth}) => {

    const [selectedInput, setSelectedInput] = useState()
    const [isSignedUp, setSignedUp] = useState()
    const [toLogin, setToLogin] = useState()

    const Title = ({text}) => (
        <div className="w-150px space-y-2 flex-shrink-0">
            <label className="text-gray-700 font-semibold">{text}</label>
            <div className="border w-full border-gray-300"></div>
        </div>
    )

    return (
        <>
            {toLogin ? (
                <LoginPopup setAuth={setAuth}/>
            ) : isSignedUp ? (
                <SignedUpPopup setToLogin={setToLogin} />
            ) : (
                <div className="w-840px h-820px bg-white rounded-xl shadow-xl">
                    <div className="absolute w-800px -mt-16 flex justify-center">
                        <div className="relative flex items-center justify-center h-32 w-32 rounded-full bg-blue-400">
                            <img src={SignupIcon} alt="signup_icon"/>
                        </div>
                    </div>
                    {/* BREAK */}
                    <div className="flex flex-col w-full text-center pt-16 items-center">
                        <label className="text-gray-700 text-xl pt-1 font-medium">회원가입</label>
                        <span className="text-gray-500 w-400px">회원가입 시 모든항목을 정확하게 기재하시기 바랍니다.</span>
                        <span className="text-gray-500 w-400px">회원데이터는 안전한 서버에서 안전하게 보관됩니다. </span>
                    </div>
                    {/* BREAK */}
                    <div className="w-full pt-6 flex flex-col items-center justify-center space-y-3 px-20">
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1">
                            <div className="flex space-x-3 w-full">
                                <Title text="아이디" />
                                <div className="w-full space-y-2">
                                    <input className="w-full text-black outline-none" onClick={() => setSelectedInput(0)}/>
                                    <div className={`${selectedInput === 0 ? "border-blue-400" : "border-gray-300"} border w-full`} />
                                </div>
                            </div>
                            <span className="text-xs text-gray-400 ml-40">영문,숫자만 입력가능하며 최소 4자이상 입력하세요.</span>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1">
                            <div className="flex space-x-3 w-full">
                                <Title text="비밀번호" />
                                <div className="w-full space-y-2">
                                    <input className="w-full text-black outline-none" onClick={() => setSelectedInput(1)}/>
                                    <div className={`${selectedInput === 1 ? "border-blue-400" : "border-gray-300"} border w-full`} />
                                </div>
                            </div>
                            <span className="text-xs text-gray-400 ml-40">영문 및 숫자를 1자 이상 반드시 포함하여 6~16자 내외로 입력해주세요. (특수문자 사용불가)</span>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1">
                            <div className="flex space-x-3 w-full">
                                <Title text="환전 비밀번호" />
                                <div className="w-full space-y-2">
                                    <input className="w-full text-black outline-none" onClick={() => setSelectedInput(2)}/>
                                    <div className={`${selectedInput === 2 ? "border-blue-400" : "border-gray-300"} border w-full`} />
                                </div>
                            </div>
                            <span className="text-xs text-gray-400 ml-40">영문 및 숫자를 1자 이상 반드시 포함하여 4~8자 내외로 입력해주세요. (특수문자 사용불가)</span>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1">
                            <div className="flex space-x-3 w-full">
                                <Title text="닉네임" />
                                <div className="w-full space-y-2">
                                    <input className="w-full text-black outline-none" onClick={() => setSelectedInput(3)}/>
                                    <div className={`${selectedInput === 3 ? "border-blue-400" : "border-gray-300"} border w-full`} />
                                </div>
                            </div>
                            <span className="text-xs text-gray-400 ml-40">한글, 영문, 숫자를 포함한 4~16자로 입력해주세요.</span>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1">
                            <div className="flex space-x-3 w-full">
                                <Title text="휴대폰번호" />
                                <div className="w-170px flex-shrink-0 space-y-2">
                                    <input className="w-full text-black outline-none" onClick={() => setSelectedInput(4)}/>
                                    <div className={`${selectedInput === 4 ? "border-blue-400" : "border-gray-300"} border w-full`} />
                                </div>
                                <div className="w-full space-y-2">
                                    <input className="w-full text-black outline-none" onClick={() => setSelectedInput(5)} placeholder="휴대폰번호(숫자만 입력)"/>
                                    <div className={`${selectedInput === 5 ? "border-blue-400" : "border-gray-300"} border w-full`} />
                                </div>
                            </div>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1 pt-3">
                            <div className="flex space-x-3 w-full">
                                <Title text="추천인 아이디" />
                                <div className="w-full space-y-2">
                                    <input className="w-full text-black outline-none" onClick={() => setSelectedInput(6)} placeholder="가입코드"/>
                                    <div className={`${selectedInput === 6 ? "border-blue-400" : "border-gray-300"} border w-full`} />
                                </div>
                            </div>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1 pt-3">
                            <div className="flex flex-col space-y-4">
                                <div className="flex space-x-3 w-full">
                                    <Title text="계좌번호" />
                                    <div className="w-170px flex-shrink-0 space-y-2">
                                        <input className="w-full text-black outline-none" onClick={() => setSelectedInput(7)}/>
                                        <div className={`${selectedInput === 7 ? "border-blue-400" : "border-gray-300"} border w-full`} />
                                    </div>
                                    <div className="w-full space-y-2">
                                        <input className="w-full text-black outline-none" onClick={() => setSelectedInput(8)} placeholder="예금주"/>
                                        <div className={`${selectedInput === 8 ? "border-blue-400" : "border-gray-300"} border w-full`} />
                                    </div>
                                </div>
                                <div className="w-full space-y-2 pl-40 pt-1">
                                    <input className="w-full text-black outline-none" onClick={() => setSelectedInput(9)} placeholder="계좌번호"/>
                                    <div className={`${selectedInput === 9 ? "border-blue-400" : "border-gray-300"} border w-full`} />
                                </div>
                            </div>
                        </div>
                        <button className="w-250px h-16 rounded-xl bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-xl" onClick={() => setSignedUp(true)}>회원가입</button>
                        <div className="border w-full border-gray-300" />
                        <div className="flex">
                            <div className="flex items-center space-x-1 pr-3">
                                <img className="object-contain h-full" src={KakaoLogo} alt="kakao-icon" />
                                <span className="font-semibold text-red-900">test1234</span>
                            </div>
                            <div className="flex items-center space-x-1 pr-3">
                                <img src={TelegramLogo} alt="kakao-icon" />
                                <span className="font-semibold text-blue-400">test1234</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SignupPopup
