import jss from "jss";
import React from "react";
const bg = require("../imagesHold/layout_button_background.png").default;
const activeBg = require("../imagesHold/bg_134.png").default;
export default function SelectLayoutButton({
    text,
    image,
    offset,
    active,
    handleSetLayoutActive,
}) {
    const styles = {
        background: `
                height: 73px;
                left: ${offset};
                position: absolute;
                top: 0;
                width: 64px;
                -webkit-border-radius: 10px;
                -moz-border-radius: 10px;
                border-radius: 10px;
                background: url(${active ? activeBg : bg}) no-repeat;
                -webkit-box-shadow: 0 3px 0 0 #351a27;
                -moz-box-shadow: 0 3px 0 0 #351a27;
                box-shadow: 0 3px 0 0 #351a27; /*drop shadow*/
           `,
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    return (
        <button className={classes.background} onClick={handleSetLayoutActive}>
            <div
                style={{
                    height: "38px",
                    left: "8px",
                    position: "absolute",
                    top: "19px",
                    width: "48px",
                }}
            >
                <img
                    style={{
                        position: "absolute",
                        right: "16px",
                        top: "0",
                        filter: active ? "brightness(0%)" : "none",
                    }}
                    src={image}
                    alt=""
                    width="16"
                    height="16"
                />
                <p
                    style={{
                        left: "4px",
                        position: "absolute",
                        top: "23px",
                        opacity: active ? "1" : "0.4",
                        color: active ? "#000000" : "#fefefe",
                        textAlign: "center",
                        textTransform: "uppercase",
                    }}
                >
                    {text}
                </p>
            </div>
        </button>
    );
}
