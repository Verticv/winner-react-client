import React, { useState } from "react";
import BetNavListItem from "./BetNavListItem";

export default function BetNav() {
    const number = 80;
    const navListItemsDefinition = [
        {
            id: 0,
            icon: require("../imagesHold/ico_7.png").default,
            text: "즐겨찾기",
            number,
            active: false,
            marginLeft: "-553px",
        },
        {
            id: 1,
            icon: require("../imagesHold/ico_8.png").default,
            text: "전체",
            number,
            active: false,
            marginLeft: "-444px",
        },
        {
            id: 2,
            icon: require("../imagesHold/ico_9.png").default,
            text: "축구",
            number,
            active: true,
            marginLeft: "-335px",
        },
        {
            id: 3,
            icon: require("../imagesHold/ico_10.png").default,
            text: "야구",
            number,
            active: false,
            marginLeft: "-226px",
        },
        {
            id: 4,
            icon: require("../imagesHold/ico_11.png").default,
            text: "농구",
            number,
            active: false,
            marginLeft: "-117px",
        },
        {
            id: 5,
            icon: require("../imagesHold/ico_12.png").default,
            text: "배구",
            number,
            active: false,
            marginLeft: "-8px",
        },
        {
            id: 6,
            icon: require("../imagesHold/ico_13.png").default,
            text: "아이스하키",
            number,
            active: false,
            marginLeft: "101px",
        },
        {
            id: 7,
            icon: require("../imagesHold/image_27.png").default,
            text: "테니스",
            number,
            active: false,
            marginLeft: "210px",
        },
        {
            id: 8,
            icon: require("../imagesHold/ico_14.png").default,
            text: "핸드볼",
            number,
            active: false,
            marginLeft: "319px",
        },
        {
            id: 9,
            icon: require("../imagesHold/ico_15.png").default,
            text: "UFC",
            number,
            active: false,
            marginLeft: "428px",
        }
    ];
    const [navListItems, setNavListItems] = useState(navListItemsDefinition);
    const handleSetNavElementActive = (id) => {
        const navCopy = [...navListItems];
        const itemToSetActive = navCopy.find((a) => a.id === id);
        navCopy.forEach((navListItem) => (navListItem.active = false));
        itemToSetActive.active = true;
        setNavListItems(navCopy);
    };
    return (
        <>
            {navListItems.map((item) => {
                return (
                    <BetNavListItem
                        key={item.id}
                        icon={item.icon}
                        active={item.active}
                        number={item.number}
                        text={item.text}
                        marginLeft={item.marginLeft}
                        handleSetNavElementActive={() =>
                            handleSetNavElementActive(item.id)
                        }
                    />
                );
            })}
        </>
    );
}
