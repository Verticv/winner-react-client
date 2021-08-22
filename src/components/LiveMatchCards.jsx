import getRandomNumberInInterval from 'helpers/getRandomNumberInInterval';
import React, { useState } from 'react'
import LiveMatchCard from './LiveMatchCard';

export default function LiveMatchCards() {
    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */

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
            team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            isFavorite: Math.random() > 0.5,
            topOffset: "0",
            selected: false,
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
            team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            isFavorite: Math.random() > 0.5,
            topOffset: "155px",
            selected: false,
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
            team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            isFavorite: Math.random() > 0.5,
            topOffset: "310px",
            selected: false,
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
            team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            isFavorite: Math.random() > 0.5,
            topOffset: "465px",
            selected: false,
        },
    ];
    const [navListItems, setNavListItems] = useState(matchCards);
    const handleSetNavElementActive = (id) => {
        const navCopy = [...navListItems];
        const itemToSetActive = navCopy.find((a) => a.id === id);
        navCopy.forEach((navListItem) => (navListItem.selected = false));
        itemToSetActive.selected = true;
        setNavListItems(navCopy);
    };
    return (
        <>
            {navListItems.map((matchCard) => {
                return (
                    <LiveMatchCard
                        key={matchCard.id}
                        matchCard={matchCard}
                        handleSetNavElementActive={handleSetNavElementActive}
                    />
                );
            })}
        </>
    );
}
