import jss from "jss";
import React from "react";

export default function MatchBetTab({ tab, handleSelectTab }) {
    const styles = {
        tab: `
        padding: 0 16px;
        height: 40px;
        min-width: 66px;
        background: url(${
            tab.selected
                ? require("../imagesHold/bg_150.jpg").default
                : require("../imagesHold/match_bet_background.png").default
        });
        background-size: cover;
        background-position: top;
        margin-left: 2px;
        z-index: 3;
        border-left: 1px solid;
        border-right: 1px solid;
        border-bottom: none;
        border-top: 1px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(270deg, rgba(255,255,240,0.1) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(255,255,240,0.1) 100%);
        `,
        tabText: `
            left: 19px;
            ${tab.selected ? "opacity: 1.0;" : "opacity: 0.4;"}
            ${tab.selected ? "color: black;" : "color: white;"}
            line-height: 40px;
            text-align: center;
            text-transform: uppercase;
            `,
    };
    const { classes } = jss.createStyleSheet(styles).attach();

    return (
        <button onClick={handleSelectTab} className={classes.tab}>
            <p className={classes.tabText}>{tab.name}</p>
        </button>
    );
}
