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
        { logo: EvoLogo, id: 0 },
        { logo: MicLogo, id: 1 },
        { logo: BigLogo, id: 2 },
        { logo: AsiaLogo, id: 3 },
        { logo: SexyLogo, id: 4 },
        { logo: DgLogo, id: 5 },
        { logo: PltLogo, id: 6 },
        { logo: PraLogo, id: 7 },
        { logo: SpaLogo, id: 8 },
        { logo: TopLogo, id: 9 },
        { logo: HabLogo, id: 10 },
        { logo: WmLogo, id: 11 },        
        { logo: NetLogo, id: 12 },
        { logo: MavLogo, id: 13 },
        { logo: QusLogo, id: 14 },
        { logo: PlgLogo, id: 15 },
    ];

    function LogosList({ items }) {
        return items.map(item => (
            <div className={itemsClass} key={item.id}><img src={item.logo} alt="logo" /></div>
        ));
    }

    return (
        <div className="flex justify-start limit:justify-center w-screen bg-gray-f9f9f9 py-4">
            <div className="grid grid-cols-8 w-default flex-shrink-0 px-2">
                <LogosList items={logosArray} />
            </div>
        </div>
    )
}

export default Footer2
