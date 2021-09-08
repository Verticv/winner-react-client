import React from 'react'
import useStore from 'store/useStore';
import BetSlipBet from './BetSlipBet';

export default function BetSlipBets() {
    const betSlipBets = useStore(s=>s.betSlipBets)
    return (
        <div
            style={{
                left: "0",
                position: "absolute",
                top: "82px",
                width: "360px",
            }}
        >
            {betSlipBets.map(bet => {
                return <BetSlipBet/>
            })}
        </div>
    );
}
