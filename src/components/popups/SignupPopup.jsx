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
        <div className="w-140px space-y-2 flex-shrink-0">
            <label className="text-gray-r393e41 font-spoqaMedium text-16px">{text}</label>
            <div className="border-b w-full border-gray-bebebe"></div>
        </div>
    )

    return (
        <>
            {toLogin ? (
                <LoginPopup setAuth={setAuth}/>
            ) : isSignedUp ? (
                <SignedUpPopup setToLogin={setToLogin} />
            ) : (
                <div className="relative w-840px h-820px bg-white rounded-xl shadow-xl mt-79px">
                    <div className="absolute w-840px -mt-79px flex justify-center">
                        <div className="flex items-center justify-center h-158px w-158px rounded-full">
                            <img src={SignupIcon} alt="signup_icon"/>
                        </div>
                    </div>
                    {/* BREAK */}
                    <div className="flex flex-col w-full text-center pt-85px items-center">
                        <label className="text-gray-r393e41 text-xl text-24px font-spoqaMedium">회원가입</label>
                        <span className="text-gray-r393e41 w-400px mt-10px font-spoqaMedium">회원가입 시 모든항목을 정확하게 기재하시기 바랍니다.</span>
                        <span className="text-gray-r393e41 w-400px font-spoqaMedium">회원데이터는 안전한 서버에서 안전하게 보관됩니다. </span>
                    </div>
                    {/* BREAK */}
                    <div className="w-full py-20px px-75px flex flex-col items-center">
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1 h-64px">
                            <div className="flex space-x-10px w-full">
                                <Title text="아이디" />
                                <div className="w-full space-y-2">
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                        onFocus={(e) => setSelectedInput(0)}
                                        onBlur={(e) => setSelectedInput(false)}
                                    />
                                    <div className={`${selectedInput === 0 ? "border-blue-r1ca7ec" : "border-gray-bebebe"} border-b w-full`} />
                                </div>
                            </div>
                            <span className="text-14px font-spoqaMedium text-gray-bebebe ml-150px">영문,숫자만 입력가능하며 최소 4자이상 입력하세요.</span>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1 h-64px">
                            <div className="flex space-x-10px w-full">
                                <Title text="비밀번호" />
                                <div className="w-full space-y-2">
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                        onFocus={(e) => setSelectedInput(1)}
                                        onBlur={(e) => setSelectedInput(false)}
                                    />
                                    <div className={`${selectedInput === 1 ? "border-blue-r1ca7ec" : "border-gray-bebebe"} border-b w-full`} />
                                </div>
                            </div>
                            <span className="text-14px font-spoqaMedium text-gray-bebebe ml-150px">영문 및 숫자를 1자 이상 반드시 포함하여 6~16자 내외로 입력해주세요. (특수문자 사용불가)</span>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1 h-64px">
                            <div className="flex space-x-10px w-full">
                                <Title text="환전 비밀번호" />
                                <div className="w-full space-y-2">
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                        onFocus={(e) => setSelectedInput(2)}
                                        onBlur={(e) => setSelectedInput(false)}
                                    />
                                    <div className={`${selectedInput === 2 ? "border-blue-r1ca7ec" : "border-gray-bebebe"} border-b w-full`} />
                                </div>
                            </div>
                            <span className="text-14px font-spoqaMedium text-gray-bebebe ml-150px">영문 및 숫자를 1자 이상 반드시 포함하여 4~8자 내외로 입력해주세요. (특수문자 사용불가)</span>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1 h-64px">
                            <div className="flex space-x-10px w-full">
                                <Title text="닉네임" />
                                <div className="w-full space-y-2">
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                        onFocus={(e) => setSelectedInput(3)}
                                        onBlur={(e) => setSelectedInput(false)}
                                    />
                                    <div className={`${selectedInput === 3 ? "border-blue-r1ca7ec" : "border-gray-bebebe"} border-b w-full`} />
                                </div>
                            </div>
                            <span className="text-14px font-spoqaMedium text-gray-bebebe ml-150px">한글, 영문, 숫자를 포함한 4~16자로 입력해주세요.</span>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1 h-64px">
                            <div className="flex space-x-10px w-full">
                                <Title text="휴대폰번호" />
                                <div className="w-170px flex-shrink-0 space-y-2">
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                        onFocus={() => setSelectedInput(4)}
                                        onBlur={(e) => setSelectedInput(false)}    
                                    />
                                    <div className={`${selectedInput === 4 ? "border-blue-r1ca7ec" : "border-gray-bebebe"} border-b w-full`} />
                                </div>
                                <div className="w-full space-y-2">
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none placeholder-gray-bebebe"
                                        placeholder="휴대폰번호(숫자만 입력)"
                                        onFocus={(e) => {
                                            e.target.placeholder = ""
                                            setSelectedInput(5)
                                        }} 
                                        onBlur={(e) => {
                                            e.target.placeholder = "휴대폰번호(숫자만 입력)"
                                            setSelectedInput(false)
                                        }}
                                    />
                                    <div className={`${selectedInput === 5 ? "border-blue-r1ca7ec" : "border-gray-bebebe"} border-b w-full`} />
                                </div>
                            </div>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1 h-64px">
                            <div className="flex space-x-10px w-full">
                                <Title text="추천인 아이디" />
                                <div className="w-full space-y-2">
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none placeholder-gray-bebebe" 
                                        placeholder="가입코드"
                                        onFocus={(e) => {
                                            e.target.placeholder = ""
                                            setSelectedInput(6)
                                        }} 
                                        onBlur={(e) => {
                                            e.target.placeholder = "가입코드"
                                            setSelectedInput(false)
                                        }}
                                    />
                                    <div className={`${selectedInput === 6 ? "border-blue-r1ca7ec" : "border-gray-bebebe"} border-b w-full`} />
                                </div>
                            </div>
                        </div>
                        {/* BREAK */}
                        <div className="w-full flex flex-col space-y-1 h-64px">
                            <div className="flex flex-col space-y-4">
                                <div className="flex space-x-10px w-full">
                                    <Title text="계좌번호" />
                                    <div className="w-170px flex-shrink-0 space-y-2">
                                        <input 
                                            className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none" 
                                            onFocus={() => setSelectedInput(7)}
                                            onBlur={(e) => setSelectedInput(false)}
                                        />
                                        <div className={`${selectedInput === 7 ? "border-blue-r1ca7ec" : "border-gray-bebebe"} border-b w-full`} />
                                    </div>
                                    <div className="w-full space-y-2">
                                        <input 
                                            className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none placeholder-gray-bebebe" 
                                            placeholder="예금주"
                                            onFocus={(e) => {
                                                e.target.placeholder = ""
                                                setSelectedInput(8)
                                            }} 
                                            onBlur={(e) => {
                                                e.target.placeholder = "예금주"
                                                setSelectedInput(false)
                                            }}
                                        />
                                        <div className={`${selectedInput === 8 ? "border-blue-r1ca7ec" : "border-gray-bebebe"} border-b w-full`} />
                                    </div>
                                </div>
                                <div className="w-full space-y-2 pl-150px pt-1">
                                    <input 
                                        className="w-full text-gray-r393e41 font-spoqaMedium text-16px outline-none placeholder-gray-bebebe" 
                                        placeholder="계좌번호 (숫자만 입력)"
                                        onFocus={(e) => {
                                            e.target.placeholder = ""
                                            setSelectedInput(9)
                                        }} 
                                        onBlur={(e) => {
                                            e.target.placeholder = "계좌번호 (숫자만 입력)"
                                            setSelectedInput(false)
                                        }}
                                    />
                                    <div className={`${selectedInput === 9 ? "border-blue-r1ca7ec" : "border-gray-bebebe"} border-b w-full`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BREAK */}
                    <div className="w-full px-75px flex flex-col items-center">
                        <button className="w-250px h-64px rounded-xl bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-20px font-spoqaMedium mt-14px mb-10px" onClick={() => setSignedUp(true)}>회원가입</button>
                        <div className="border-b w-full border-gray-bebebe" />
                        <div className="flex h-80px justify-center items-center">
                            <div className="flex items-center space-x-1 pr-10px">
                                <img className="object-none" src={KakaoLogo} alt="kakao-icon" />
                                <span className="text-brown-r351a1e font-roboto text-18px mb-6px">test1234</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <img className="object-none" src={TelegramLogo} alt="kakao-icon" />
                                <span className="text-blue-r2aa1d5 font-roboto text-18px mb-6px">test1234</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SignupPopup
