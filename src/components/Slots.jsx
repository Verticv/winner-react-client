import React from 'react'
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'
// import slotBackground from '../images/slot_background.png'
// import seven from '../images/seven.png'

const Slots = () => {

    const boxClass = "flex items-center justify-center cursor-pointer"

    // const Slot = () => (
    //     <div className="relative flex items-center justify-center">
    //         <img className="z-10 object-fill" src={slotBackground} alt="background" />
    //         <div className="absolute flex space-x-4 z-20 top-0 mt-8">
    //             <img className="h-8" src={seven} alt="seven" />
    //             <label className={titleClass}>슬롯잭팟</label>
    //         </div>
    //         <div className="absolute w-11/12 bg-gray-600 h-16 z-20 bottom-0 mb-8 rounded-md shadow-inner">

    //         </div>
            
    //     </div>
    // )

    return (
        <div className="grid grid-cols-4 w-full items-center justify-center space-x-4">
            <div className={boxClass}><img className="object-contain w-full" src={image1} alt="1" /></div>
            <div className={boxClass}><img className="object-contain w-full" src={image2} alt="2" /></div>
            <div className={boxClass}><img className="object-contain w-full" src={image3} alt="3" /></div>
            <div className={boxClass}><img className="object-contain w-full" src={image4} alt="4" /></div>
        </div>
    )
}

export default Slots
