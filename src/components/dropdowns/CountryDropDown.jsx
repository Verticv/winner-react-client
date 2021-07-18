import React, { useState } from 'react'
import Koreaflag from '../../images/korea_flag.png'
import UKflag from '../../images/uk_flag.png'

const CountryDropDown = ({setCountry, country}) => {

    const [selectedTab, setSelectedTab] = useState(country === "KR" ? 0 : 1)

    const countriesArray = [
        { icon: Koreaflag, text: "KR", id: 0 },
        { icon: UKflag, text: "EN", id: 1 },
    ];

    function CountriesList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${selectedTab === item.id ? "bg-blue-500" : "bg-white"} flex w-full items-center p-1 h-12 rounded-full`} 
                onClick={
                    () => {setSelectedTab(item.id)
                    setCountry(item.text)}
                }
            >
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 border">
                    <img className="h-auto w-10 bg-white rounded-full flex items-center justify-center" src={item.icon} alt="flag"></img>
                </div>
                <div className="w-full flex justify-center mr-3">                
                    <label className={`${selectedTab === item.id ? "text-white" : "text-gray-500"} font-bold cursor-pointer`}>{item.text}</label>
                </div>
            </button>
        ));
    }

    return (
        <div className="bg-white shadow-plain rounded-3xl bg-white w-40 p-2 space-y-1">
            <CountriesList items={countriesArray} />
        </div>
    )
}

export default CountryDropDown
