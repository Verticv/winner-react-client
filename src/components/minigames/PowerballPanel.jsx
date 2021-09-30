import React from 'react'

const PowerballPanel = () => {

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
        width = 208, 
        height = 83,
        gradient1 = "#fffad8",
        gradient2 = "#ffe9bf",
        titleBg = "#b4a289",
        titleNumber = 1,
        subText = "홀짝",
        subText2 = null
    }) => (
        <div
            style={{
                width: width + "px", 
                height: height+ "px",
                background: "linear-gradient(to bottom, #dddddd, #bcbcbc)"
            }}
            className={`overflow-hidden rounded-md flex justify-center border border-gray-dddddd flex items-center`} 
        >
            <div
                style={{
                    width: width - 0.5 + "px", 
                    height: height - 0.5 + "px",
                    backgroundColor: "#fdfdf8",
                }}
                className={`overflow-hidden rounded-md flex justify-end border border-gray-dddddd`} 
            >
                <div 
                    style={{
                        background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`
                    }}
                    className="mt-px w-full h-full rounded-b-md flex items-start justify-start"
                >

                    <div className="w-42px h-full flex flex-col">
                        <div 
                            style={{height:"38px", backgroundColor: titleBg}} 
                            className="flex-shrink-0 shadow-plain2 w-40px rounded-md border border-white ml-px flex flex-col items-center justify-center text-12px tracking-tight text-white -space-y-4px"
                        >
                            <p className="font-spoqaMedium">{titleNumber}</p>
                            <p className="font-spoqa">게임</p>
                        </div>

                        <div className="w-full h-full flex items-center justify-center">
                            <p className="text-12px tracking-tight text-gray-r585858 font-spoqaMedium">{subText}</p>
                        </div>
                    </div>

                    <div style={{height:"76px", width:"2px"}} className="flex">
                        <div style={{backgroundColor:"#c7b9a6"}} className="h-full w-px"></div>
                        <div style={{backgroundColor:"#ffffff"}} className="h-full w-px"></div>
                    </div>
                    
                </div>
            </div>

        </div>
    )

    return (
        <div 
            style={{height: "290px"}}
            className="flex w-full"
        >
            <div className="w-full flex flex-col pl-6px">
                <PanelTitle title="파워볼" />
                <div className="space-y-2px flex flex-col">
                    <div className="flex space-x-2px">
                        <BetOptions />
                        <BetOptions width={409}/>
                    </div>
                    <div className="flex space-x-2px">
                        <BetOptions />
                        <BetOptions width={409}/>
                    </div>
                    <BetOptions width={619} />
                </div>
            </div>
            <div className="w-full flex flex-col">
                <PanelTitle title="일반볼" />
                <div className="space-y-2px flex flex-col">
                    <div className="flex space-x-2px">
                        <BetOptions titleBg="#85a598" gradient1="#e5ffea" gradient2="#bfdccc" />
                        <BetOptions titleBg="#85a598" gradient1="#e5ffea" gradient2="#bfdccc" width={409}/>
                    </div>
                    <div className="flex space-x-2px">
                        <BetOptions titleBg="#85a598" gradient1="#e5ffea" gradient2="#bfdccc" />
                        <BetOptions titleBg="#85a598" gradient1="#e5ffea" gradient2="#bfdccc" width={409}/>
                    </div>
                    <BetOptions titleBg="#85a598" gradient1="#e5ffea" gradient2="#bfdccc" width={619} />
                </div>
            </div>

        </div>
    )
}

export default PowerballPanel
