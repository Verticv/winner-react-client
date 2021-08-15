import React from "react";
import jss from "jss";
import background from "../images/bet/nav-item-bg.png";
import backgroundSelected from "../images/bet/nav-item-bg-selected.png";

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
        background: url(${active ? backgroundSelected : background}) no-repeat;
        margin-left: ${marginLeft};
    `,
        group: `
        display: table;
        margin: 0 auto;
        position: relative;
        opacity: 0.45;
    `,
        text: `
        display: block;
        margin: 7px 0 0;
        color: #bebebe;
        font-weight: 900;
        font-size: 12px;
    `,
        numberGroup: `
        margin: 5px auto 0;
        max-width: 19px;
        min-height: 14px;
        width: 19px;
        background: url(images/bg_111.png) no-repeat;
        font-size: 12px; /* 12px / 16px = 0.75rem */
        letter-spacing: 0;
        line-height: 14px;
        text-align: center;
        color: #bebebe;
        font-weight: 900;
    `,
        icon: `
        display: block;
        margin: 0 auto;
        height: 23px;
        width: 18px;
    `,
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    return (
        <button onClick={handleSetNavElementActive} className={classes.holder}>
            <div className={classes.group}>
                <img className={classes.icon} src={icon} alt="" />
                <p className={classes.text}>{text}</p>
                <div className={classes.numberGroup}>{number}</div>
            </div>
        </button>
    );
}