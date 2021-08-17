import React, { useState } from "react";
import ufc from ".././images/bet/icon-ufc.png"
import basketball from ".././images/bet/icon-ufc.png"
import "./BetNavItem.css";
import BetNavListItem from "./BetNavListItem";

export default function BetNav() {
    const number = 80;
    const navListItemsDefinition = [
        {
            id: 0,
            icon: basketball,
            text: "basketball",
            number,
            active: false,
            marginLeft: "-553px",
        },
        {
            id: 1,
            icon: basketball,
            text: "basketball",
            number,
            active: false,
            marginLeft: "-444px",
        },
        {
            id: 2,
            icon: basketball,
            text: "basketball",
            number,
            active: false,
            marginLeft: "-335px",
        },
        {
            id: 3,
            icon: ufc,
            text: "UFC",
            number,
            active: false,
            marginLeft: "-226px",
        },
        {
            id: 4,
            icon: basketball,
            text: "basketball",
            number,
            active: false,
            marginLeft: "-226px",
        },
        {
            id: 5,
            icon: basketball,
            text: "basketball",
            number,
            active: false,
            marginLeft: "-117px",
        },
        {
            id: 6,
            icon: basketball,
            text: "basketball",
            number,
            active: false,
            marginLeft: "-8px",
        },
        {
            id: 7,
            icon: basketball,
            text: "basketball",
            number,
            active: false,
            marginLeft: "101px",
        },
        {
            id: 8,
            icon: basketball,
            text: "basketball",
            number,
            active: false,
            marginLeft: "210px",
        },
        {
            id: 9,
            icon: basketball,
            text: "basketball",
            number,
            active: false,
            marginLeft: "319px",
        },
        {
            id: 10,
            icon: basketball,
            text: "basketball",
            number,
            active: false,
            marginLeft: "428px",
        },
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
        <div class="group-2 group">
            <div class="col-24">
                <div class="wrapper-28">
                    <div className="">
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
                    </div>
                </div>
            </div>
        </div>
    );
}
