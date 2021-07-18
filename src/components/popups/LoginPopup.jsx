import React, { useState } from 'react'

const LoginPopup = () => {
    
    const [selectedInput, setSelectedInput] = useState()

    return (
        <div className="w-124 h-124 bg-white rounded-xl">

            <div className="absolute w-124 -mt-16 flex justify-center">
                <div className="relative flex items-center justify-center h-32 w-32 rounded-full bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 z-20" viewBox="0 0 20 20" fill="#1e81e6">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                    <div className="absolute bg-white w-24 h-24 z-10 rounded-full"></div>
                </div>
            </div>
            {/* BREAK */}

            <div className="w-full h-full flex flex-col items-center justify-center space-y-8 px-24">
                {/* <InputList items={inputArray} /> */}
                <div>
                    <input className="w-full h-12 text-xl text-black outline-b text-center outline-none" placeholder={"asd"} onClick={() => setSelectedInput(0)}/>
                    <div className={`${selectedInput === 0 ? "border-blue-400" : "border-gray-200"} border w-full`} />
                </div>
                <div>
                    <input className="w-full h-12 text-xl text-black outline-b text-center outline-none" placeholder={"Asdasd"} onClick={() => setSelectedInput(1)}/>
                    <div className={`${selectedInput === 1 ? "border-blue-400" : "border-gray-200"} border w-full`} />
                </div>
            </div>
            
        </div>
    )
}

export default LoginPopup
