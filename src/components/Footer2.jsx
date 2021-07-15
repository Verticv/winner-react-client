import React from 'react'
import AsiaLogo from '../images/gray/asia_gray_logo.png'
import BigLogo from '../images/gray/big_gray_logo.png'
import DgLogo from '../images/gray/dg_gray_logo.png'
import EvoLogo from '../images/gray/evo_gray_logo.png'
import HabLogo from '../images/gray/hab_gray_logo.png'
import MavLogo from '../images/gray/mav_gray_logo.png'
import MicLogo from '../images/gray/mic_gray_logo.png'
import NetLogo from '../images/gray/net_gray_logo.png'
import PlgLogo from '../images/gray/plg_gray_logo.png'
import PltLogo from '../images/gray/plt_gray_logo.png'
import PraLogo from '../images/gray/pra_gray_logo.png'
import QusLogo from '../images/gray/qus_gray_logo.png'
import SexyLogo from '../images/gray/sexy_gray_logo.png'
import SpaLogo from '../images/gray/spa_gray_logo.png'
import TopLogo from '../images/gray/top_gray_logo.png'
import WmLogo from '../images/gray/wm_gray_logo.png'

const Footer2 = () => {

    const itemsClass = "flex items-center justify-center w-24 h-14"

    const logosArray = [
        { logo: AsiaLogo, id: 0 },
        { logo: BigLogo, id: 0 },
        { logo: DgLogo, id: 0 },
        { logo: EvoLogo, id: 0 },
        { logo: HabLogo, id: 0 },
        { logo: MavLogo, id: 0 },
        { logo: MicLogo, id: 0 },
        { logo: NetLogo, id: 0 },
        { logo: PlgLogo, id: 0 },
        { logo: PltLogo, id: 0 },
        { logo: PraLogo, id: 0 },
        { logo: QusLogo, id: 0 },
        { logo: SexyLogo, id: 0 },
        { logo: SpaLogo, id: 0 },
        { logo: TopLogo, id: 0 },
        { logo: WmLogo, id: 0 }        
    ];

    function LogosList({ items }) {
        return items.map(item => (
            <div className={itemsClass}><img src={item.logo} alt="logo" /></div>
        ));
    }

    return (
        <div className="flex items-center justify-center w-screen bg-gray-100 py-4">
            <div className="grid grid-cols-8 w-full xl:w-5/6 2xl:w-2/3 px-2">
                <LogosList items={logosArray} />
            </div>
        </div>
    )
}

export default Footer2
