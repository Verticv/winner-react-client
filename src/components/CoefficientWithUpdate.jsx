import clsx from "clsx";
import jss from "jss";
import React from "react";

export default function CoefficientWithUpdate(props) {
    const displayOptions = {
        up: "up",
        down: "down",
        middle: "middle",
    };
    const display = 'middle';
    const styles = {
        redNeonBorder: `
            border: 1px solid #ffbc93; /*stroke*/
            border-radius: 3.88px/3.81px;
            background: #7c2323;
            background-clip: padding-box; /*Will not allow bg color to leak outside borders*/
            box-shadow: 0 0 10.92px 1.08px #ff4c23; /*outer glow*/
    `,
        blueNeonBorder: `
                border: 1px solid #93d0ff; /*stroke*/
                border-radius: 3.88px/3.81px;
                background: #293868;
                background-clip: padding-box; /*Will not allow bg color to leak outside borders*/
                box-shadow: 0 0 10.92px 1.08px #236bff; /*outer glow*/
         `,
        blueNeonBorderContainer: `
         height: 32px;
         left: 11px;
         position: absolute;
         top: 0;
         width: 45px;
         `,
        greenNeonBorderContainer: `
         height: 32px;
         left: 23px;
         position: absolute;
         top: 0;
         width: 45px;
         `,
        greenNeonBorder: `
                height: 32px;
                left: 0;
                position: absolute;
                top: 0;
                width: 45px;
                border: 1px solid #4ef11a; /*stroke*/
                -webkit-border-radius: 3.88px/3.81px;
                -moz-border-radius: 3.88px/3.81px;
                border-radius: 3.88px/3.81px;
                background: #246210;
                -moz-background-clip: padding;
                -webkit-background-clip: padding-box;
                background-clip: padding-box; /*Will not allow bg color to leak outside borders*/
                -webkit-box-shadow: 0 0 10.92px 1.08px #48cb1e;
                -moz-box-shadow: 0 0 10.92px 1.08px #48cb1e;
                box-shadow: 0 0 10.92px 1.08px #48cb1e; /*outer glow*/
         `,
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    return (
        <div
            className={clsx(
                display === displayOptions.up && classes.redNeonBorder,
                display === displayOptions.down && classes.blueNeonBorder,
            )}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "32px",
                width: "45px",
            }}
        >
            <p>1.23</p>
            {display === displayOptions.up && (
                <img
                    style={{
                        position: "absolute",
                        top: "-6px",
                    }}
                    src={require("../imagesHold/up_arrow.png").default}
                    alt=""
                />
            )}
            {display === displayOptions.down && (
                <img
                    style={{
                        position: "absolute",
                        top: "22px",
                    }}
                    src={require("../imagesHold/down_arrow.png").default}
                    alt=""
                />
            )}
        </div>
    );
}