import React from "react";
import jss from "jss";
import clsx from "clsx";
const selectedBg = require("../imagesHold/bg_114.png").default;
const bg = require("../imagesHold/bg_110.png").default

export default function BetNavListItem({
    icon,
    text,
    number,
    active,
    marginLeft,
    handleSetNavElementActive,
}) {
    const styles = {
        holder: `
            left: 50%;
            padding: 11px 0 7px;
            position: absolute;
            top: 0;
            width: 125px;
            background: url(${active ? selectedBg : bg}) no-repeat;
            margin-left: ${marginLeft};
        `,
        group: `
        display: table;
        margin: 0 auto;
        position: relative;
        ${active ? "opacity: 0.85;" : "opacity: 0.45;"}
    `,
        text: `
        display: block;
        margin: 7px 0 0;
        ${active ? "color: #000000;" : "color: #bebebe;"}
    `,
        numberGroup: `
        margin: 5px auto 0;
        max-width: 19px;
        min-height: 14px;
        width: 19px;
        background: url(../imagesHold/bg_111.png) no-repeat;
        font-size: 12px; /* 12px / 16px = 0.75rem */
        letter-spacing: 0;
        line-height: 14px;
        text-align: center;
        font-family: roboto;
        ${active ? "color: #000000;" : "color: #bebebe;"}
    `,
        icon: `
        display: block;
        margin: 0 auto;
        height: 23px;
        ${active ? "filter: invert(1);" : ""}
    `,
        hoverBackground: {
            "&:hover": {
                background: `url(${selectedBg}) no-repeat`,
            },
            "&:hover $group": {
                opacity: 0.85,
            },
            "&:hover $icon": {
                filter: "invert(1)",
            },
            "&:hover $numberGroup, &:hover $text": {
                color: "#000000",
            },
        },
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    return (
        <button
            onClick={handleSetNavElementActive}
            className={clsx(classes.holder, classes.hoverBackground)}
            >
            <div className={classes.group}>
            <img className={classes.icon} src={icon} alt="" />
                <p className={classes.text}>{text}</p>
                <div className={classes.numberGroup}>{number}</div>
            </div>
        </button>
    );
}