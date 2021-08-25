import getRandomNumberInInterval from "helpers/getRandomNumberInInterval";
import React from "react";
import UpcomingMatchCard from "./UpcomingMatchCard";

export default function UpcomingMatches() {
        const upcomingMatchCards = [
            {
                id: 10,
                league: "라리가",
                team1: "FC바로셀로나",
                team2: "레알마드리드",
                startDateAndTime: "02-06 21:00",
                tieKof: (Math.random() * 5).toFixed(2),
                team1WinKof: (Math.random() * 5).toFixed(2),
                team2WinKof: (Math.random() * 5).toFixed(2),
                team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
                team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
                team1Goals: Math.floor(Math.random() * 5),
                team2Goals: Math.floor(Math.random() * 3),
                isFavorite: Math.random() > 0.5,
            },
            {
                id: 11,
                league: "라리가",
                team1: "FC바로셀로나",
                team2: "레알마드리드",
                startDateAndTime: "02-08 02:00",
                tieKof: (Math.random() * 5).toFixed(2),
                team1WinKof: (Math.random() * 5).toFixed(2),
                team2WinKof: (Math.random() * 5).toFixed(2),
                team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
                team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
                team1Goals: Math.floor(Math.random() * 5),
                team2Goals: Math.floor(Math.random() * 3),
                isFavorite: Math.random() > 0.5,
            },
            {
                id: 12,
                league: "라리가",
                team1: "FC바로셀로나",
                team2: "레알마드리드",
                startDateAndTime: "02-09 12:00",
                tieKof: (Math.random() * 5).toFixed(2),
                team1WinKof: (Math.random() * 5).toFixed(2),
                team2WinKof: (Math.random() * 5).toFixed(2),
                team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
                team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
                team1Goals: Math.floor(Math.random() * 5),
                team2Goals: Math.floor(Math.random() * 3),
                isFavorite: Math.random() > 0.5,
            },
            {
                id: 13,
                league: "라리가",
                team1: "FC바로셀로나",
                team2: "레알마드리드",
                startDateAndTime: "02-10 23:00",
                tieKof: (Math.random() * 5).toFixed(2),
                team1WinKof: (Math.random() * 5).toFixed(2),
                team2WinKof: (Math.random() * 5).toFixed(2),
                team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
                team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
                team1Goals: Math.floor(Math.random() * 5),
                team2Goals: Math.floor(Math.random() * 3),
                isFavorite: Math.random() > 0.5,
            },
            {
                id: 14,
                league: "라리가",
                team1: "FC바로셀로나",
                team2: "레알마드리드",
                startDateAndTime: "02-11 07:00",
                tieKof: (Math.random() * 5).toFixed(2),
                team1WinKof: (Math.random() * 5).toFixed(2),
                team2WinKof: (Math.random() * 5).toFixed(2),
                team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
                team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
                team1Goals: Math.floor(Math.random() * 5),
                team2Goals: Math.floor(Math.random() * 3),
                isFavorite: Math.random() > 0.5,
            },
            {
                id: 15,
                league: "라리가",
                team1: "FC바로셀로나",
                team2: "레알마드리드",
                startDateAndTime: "02-12 13:00",
                tieKof: (Math.random() * 5).toFixed(2),
                team1WinKof: (Math.random() * 5).toFixed(2),
                team2WinKof: (Math.random() * 5).toFixed(2),
                team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
                team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
                team1Goals: Math.floor(Math.random() * 5),
                team2Goals: Math.floor(Math.random() * 3),
                isFavorite: Math.random() > 0.5,
            },
        ];
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
            {upcomingMatchCards.map(upcomingMatchCard => {
                return <UpcomingMatchCard key={upcomingMatchCard.id + "-upcoming-matches"} upcomingMatchCard={upcomingMatchCard} />;
            })}
        </div>
    );
}
