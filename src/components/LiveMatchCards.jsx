import React from 'react'
import LiveMatchCard from './LiveMatchCard';

export default function LiveMatchCards() {
    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    const matchCards = [
        {
            id: 0,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            currentTime: "후반전 35",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            team1stats: Math.floor(getRandomArbitrary(1000, 5000)),
            team2stats: Math.floor(getRandomArbitrary(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            isFavorite: Math.random() > 0.5,
            topOffset: "0",
        },
        {
            id: 1,
            league: "프리미어리그",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            currentTime: "후반전 35",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            team1stats: Math.floor(getRandomArbitrary(1000, 5000)),
            team2stats: Math.floor(getRandomArbitrary(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            isFavorite: Math.random() > 0.5,
            topOffset: "155px",
        },
        {
            id: 2,
            league: "분데스리가",
            team1: "바이헤른뮌헨",
            team2: "프랑크푸르트",
            currentTime: "후반전 35",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            team1stats: Math.floor(getRandomArbitrary(1000, 5000)),
            team2stats: Math.floor(getRandomArbitrary(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            isFavorite: Math.random() > 0.5,
            topOffset: "310px",
        },
        {
            id: 3,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            currentTime: "후반전 35",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            team1stats: Math.floor(getRandomArbitrary(1000, 5000)),
            team2stats: Math.floor(getRandomArbitrary(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            isFavorite: Math.random() > 0.5,
            topOffset: "465px",
        },
    ];
    return (
        <>
            {matchCards.map(matchCard => {
                return <LiveMatchCard matchCard={matchCard} />; 
            })}
        </>
    );
}
