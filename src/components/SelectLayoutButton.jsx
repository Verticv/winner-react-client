import jss from "jss";
import React from "react";
const bg = require("../imagesHold/bg_135.png").default;
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
                background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjUwJSIgeTE9IjEwMCUiIHgyPSI1MCUiIHkyPSIwJSI+CjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjI4IiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC40IiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2JnKSIgLz48L3N2Zz4=), url(${
                    active ? activeBg : bg
                }) no-repeat;
                background: -moz-linear-gradient(90deg, rgba(0, 0, 0, 0.28) 0, rgba(255, 255, 255, 0.4) 100%), url(${
                    active ? activeBg : bg
                }) no-repeat;
                background: -o-linear-gradient(90deg, rgba(0, 0, 0, 0.28) 0, rgba(255, 255, 255, 0.4) 100%), url(${
                    active ? activeBg : bg
                }) no-repeat;
                background: -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0.28) 0, rgba(255, 255, 255, 0.4) 100%), url(${
                    active ? activeBg : bg
                }) no-repeat;
                background: -webkit-gradient(linear, left bottom, left top, color-stop(0, rgba(0, 0, 0, 0.28)), to(rgba(255, 255, 255, 0.4))), url(${
                    active ? activeBg : bg
                }) no-repeat;
                background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.28) 0, rgba(255, 255, 255, 0.4) 100%), url(${
                    active ? activeBg : bg
                }) no-repeat;
                background: -moz-linear-gradient(bottom, rgba(0, 0, 0, 0.28) 0, rgba(255, 255, 255, 0.4) 100%), url(${
                    active ? activeBg : bg
                }) no-repeat;
                background: -o-linear-gradient(bottom, rgba(0, 0, 0, 0.28) 0, rgba(255, 255, 255, 0.4) 100%), url(${
                    active ? activeBg : bg
                }) no-repeat;
                background: linear-gradient(0deg, rgba(0, 0, 0, 0.28) 0, rgba(255, 255, 255, 0.4) 100%), url(${
                    active ? activeBg : bg
                }) no-repeat;
                -webkit-box-shadow: 0 3px 0 0 #351a27;
                -moz-box-shadow: 0 3px 0 0 #351a27;
                box-shadow: 0 3px 0 0 #351a27; /*drop shadow*/
           `,
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    return (
        <button className={classes.background} onClick={handleSetLayoutActive}>
            <div className="group-24">
                <img
                    className="ico-11"
                    src={image}
                    alt=""
                    width="16"
                    height="16"
                />
                <p className="text-22">{text}</p>
            </div>
        </button>
    );
}
