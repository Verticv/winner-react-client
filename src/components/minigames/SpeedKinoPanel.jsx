import React, { useState } from 'react'
import BlueButton from '../../images/minigames/blue_sq.png'
import RedButton from '../../images/minigames/red_sq.png'
import BlueSMButton from '../../images/minigames/blue_sm.png'
import RedSMButton from '../../images/minigames/red_sm.png'
import BlueButtonPressed from '../../images/minigames/blue_sq_pressed.png'

const SpeedKinoPanel = () => {

    const [state, setstate] = useState("")

    const PanelTitle = ({title}) => (
        <div className="w-full h-30px flex items-center pl-3px space-x-5px">
            <div
                style={{background: "linear-gradient(to bottom, #2087f0, #1873cf"}}
                className="h-17px w-5px rounded-3px"
            />
            <p style={{color:"#5b5b5b"}} className="font-spoqaMedium text-14px tracking-tight">{title}</p>
        </div>
    )

    const BetOptions = ({
        width = 414, 
        height = 168,
        gradient1 = "#ffece3",
        gradient2 = "#ffbda6",
        titleBg = "#ea8668",
        titleNumber = 1,
        subText = "홀짝",
        subText2 = null,
    }) => (
        <div
            style={{
                width: width + "px", 
                height: height+ "px",
                background: "linear-gradient(to bottom, #b8d5e6, #b7c7d4)"
            }}
            className={`overflow-hidden rounded-md flex justify-center border border-gray-dddddd flex items-center`} 
        >
            <div
                style={{
                    width: width - 0.5 + "px", 
                    height: height - 0.5 + "px",
                    backgroundColor: "#fdfdf8",
                }}
                className={`rounded-md flex justify-end border border-gray-dddddd`} 
            >
                <div 
                    style={{
                        background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`
                    }}
                    className="mt-px w-full h-full rounded-b-md flex items-start justify-start"
                >

                    <div className="w-42px h-full flex flex-col  flex-shrink-0">
                        <div 
                            style={{height:"38px", backgroundColor: titleBg}} 
                            className="flex-shrink-0 shadow-plain2 w-40px rounded-md border border-white ml-px flex flex-col items-center justify-center text-12px tracking-tight text-white -space-y-4px"
                        >
                            <p className="font-spoqaMedium">{titleNumber}</p>
                            <p className="font-spoqa">게임</p>
                        </div>

                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <div className="text-12px tracking-tight text-gray-r585858 font-spoqaMedium h-12px flex items-center">{subText}</div>
                            {subText2 !== null && (
                                <div className="text-12px tracking-tight text-gray-r585858 font-spoqaMedium h-12px flex items-center mt-2px">{subText2}</div>
                            )}
                        </div>
                    </div>

                    <div style={{height:"162px", width:"2px"}} className="flex flex-shrink-0 pt-px">
                        <div style={{backgroundColor:"#abc7db"}} className="h-full w-px"></div>
                        <div style={{backgroundColor:"#ffffff"}} className="h-full w-px"></div>
                    </div>

                    {titleNumber === 1 || titleNumber === 2 ? (
                        <div className="flex justify-center w-full h-full items-start">
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => setstate(`${titleNumber}-1`)} 
                                    style={{width:"121px", height:"127px", marginTop:"14px"}} 
                                    className="relative flex items-center justify-center cursor-pointer"
                                >
                                    <img className="absolute object-none" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                    <p 
                                        style={{textShadow: "2px 2px 2px #00000050", fontSize: "48px"}} 
                                        className="z-20 font-swagger text-white"
                                    >
                                        {titleNumber === 1 ? "홀" :"언더"}
                                    </p>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858 mt-4px h-12px flex items-center">1.95</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => setstate(`${titleNumber}-2`)} 
                                    style={{width:"121px", height:"127px", marginTop: "14px"}} 
                                    className="relative flex items-center justify-center cursor-pointer"
                                >
                                    <img className="absolute object-none" src={state === `${titleNumber}-2` ? RedButton : RedButton} alt="" />
                                    <p 
                                        style={{textShadow: "2px 2px 2px #00000050", fontSize: "48px"}} 
                                        className="z-20 font-swagger text-white text-20px"
                                    >
                                        {titleNumber === 1 ? "짝" : "오버"}
                                    </p>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858 mt-4px h-12px flex items-center">1.95</p>
                            </div>
                        </div>
                    ) : titleNumber === 3 ? (
                        <div className="flex flex-col items-center w-full h-full">
                            <div className="flex space-x-30px pt-7px"> 
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => setstate(`${titleNumber}-1`)} 
                                        style={{width:"56px", height:"59px"}} 
                                        className="relative flex items-center justify-center cursor-pointer"
                                    >
                                        <img className="absolute object-none" src={state === `${titleNumber}-1` ? RedSMButton : RedSMButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">홀언더</p>
                                    </div>
                                    <div className="text-12px font-robotoRegular tracking-tight text-gray-r585858 h-12px flex items-center">3.80</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => setstate(`${titleNumber}-2`)} 
                                        style={{width:"56px", height:"59px"}} 
                                        className="relative flex items-center justify-center cursor-pointer"
                                    >
                                        <img className="absolute object-none" src={state === `${titleNumber}-2` ? BlueSMButton : BlueSMButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">홀오버</p>
                                    </div>
                                    <div className="text-12px font-robotoRegular tracking-tight text-gray-r585858 h-12px flex items-center">3.80</div>
                                </div>
                            </div>
                            <div className="flex space-x-30px mt-10px"> 
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => setstate(`${titleNumber}-1`)} 
                                        style={{width:"56px", height:"59px"}} 
                                        className="relative flex items-center justify-center cursor-pointer"
                                    >
                                        <img className="absolute object-none" src={state === `${titleNumber}-1` ? BlueSMButton : BlueSMButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">짝언더</p>
                                    </div>
                                    <div className="text-12px font-robotoRegular tracking-tight text-gray-r585858 h-12px flex items-center">3.80</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => setstate(`${titleNumber}-2`)} 
                                        style={{width:"56px", height:"59px"}} 
                                        className="relative flex items-center justify-center cursor-pointer"
                                    >
                                        <img className="absolute object-none" src={state === `${titleNumber}-2` ? RedSMButton : RedSMButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">짝오버</p>
                                    </div>
                                    <div className="text-12px font-robotoRegular tracking-tight text-gray-r585858 h-12px flex items-center">3.80</div>
                                </div>
                            </div>
                        </div>
                    ) : <></> }
                    
                </div>
            </div>
        </div>
    )

    return (
        <div 
            style={{height: "205px"}}
            className="flex w-full"
        >
            <div className="w-full flex flex-col px-7px pb-7px">
                <PanelTitle title="스피드키노" />
                <div className="flex space-x-2px">
                    <BetOptions titleNumber={1} subText="홀짝" />
                    <BetOptions titleNumber={2} subText="언더" subText2="오버"/>
                    <BetOptions titleNumber={3} subText="홀짝" subText2="언오버" />
                </div>
            </div>
        </div>
    )
}

export default SpeedKinoPanel
