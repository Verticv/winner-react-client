import React from 'react'
import LiveMatchCard from './LiveMatchCard';

export default function LiveMatchCards() {
    const matchCards = [
        {
            id: 0,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            currentTime: "후반전 35",
            tieKof: Math.random() * 5,
            team1WinKof: Math.random() * 5,
            team2WinKof: Math.random() * 5,
            stats: Math.floor(Math.random() * 5000),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            isFavorite: Math.random() > 0.5,
        },
        {
            id: 1,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            currentTime: "후반전 35",
            tieKof: Math.random() * 5,
            team1WinKof: Math.random() * 5,
            team2WinKof: Math.random() * 5,
            stats: Math.floor(Math.random() * 5000),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            isFavorite: Math.random() > 0.5,
        },
        {
            id: 2,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            currentTime: "후반전 35",
            tieKof: Math.random() * 5,
            team1WinKof: Math.random() * 5,
            team2WinKof: Math.random() * 5,
            stats: Math.floor(Math.random() * 5000),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            isFavorite: Math.random() > 0.5,
        },
        {
            id: 3,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            currentTime: "후반전 35",
            tieKof: Math.random() * 5,
            team1WinKof: Math.random() * 5,
            team2WinKof: Math.random() * 5,
            stats: Math.floor(Math.random() * 5000),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            isFavorite: Math.random() > 0.5,
        },
    ];
    return (
        <>
            <LiveMatchCard />
        </>
    );
}
