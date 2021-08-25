import React from "react";
import UpcomingMatchCard from "./UpcomingMatchCard";

export default function UpcomingMatches() {
    return (
        <div
            className={'hide-scrollbar-bet-page'}
            style={{
                display: "flex",
                position: "absolute",
                height: "285px",
                overflowY: 'scroll',
                bottom: 0,
                left: 0,
                flexDirection: "column",
            }}
        >
            <UpcomingMatchCard />
            <UpcomingMatchCard />
            <UpcomingMatchCard />
            <UpcomingMatchCard />
            <UpcomingMatchCard />
        </div>
    );
}
