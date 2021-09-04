import jss from "jss";
import React from "react";

export default function LiveMatchCardButton() {
    const styles = {
        buttonContainer: {
            height: "145px",
            left: "638px",
            position: "absolute",
            top: "0",
            width: "43px",
            background: `url(${
                require("../imagesHold/big_red_button_bg.png").default
            })`,
            mozBackgroundClip: "padding",
            webkitBackgroundClip: "padding-box",
            backgroundClip: "padding-box",
            zIndex: "1",
            boxShadow: "-5px 1px 16px 0px rgb(8 8 8 / 74%)",
        },
        container: {
            "&:hover": {},
            "&:hover $inlay": {},
        },
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    const handlePlusButton = (event) => {
        event.stopPropagation();
    };
    return (
        <button onClick={handlePlusButton} className={classes.buttonContainer}>
            <p className="text-78">+</p>
            <p className="text-79">23</p>
        </button>
    );
}
