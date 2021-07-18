import React, { useState, useRef, useCallback } from "react";
import { useOnClickOutside } from "../../helpers/functions";

export default function DropDownControls({
    children,
    onClose,
    onClick,
    buttonChild
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const handler = useCallback(() => {
        if (open) { 
            setOpen(false)
            if (onClose) { onClose() }
        }
    }, [onClose, open]);

    useOnClickOutside(ref, handler);

    return (
        <div
            className={`${
                open === true
                ? "text-white"
                : "cursor-pointer text-copy-secondary hover:filter-brightness-8 transition-all duration-100"
            } sm:relative flex items-center justify-center w-auto h-10 rounded-circle`}
        >
            <button
                className="flex relative items-center justify-center"
                onMouseDown={() => {
                    if (onClick) onClick();
                    setOpen(true);
                }}
            >{buttonChild}</button>
            {open && (
                <div className="absolute text-copy-primary sm:right-0 sm:top-0 sm:mt-10 fixed top-0 right-0 mt-12 justify-center z-50" ref={ref} >
                    {children}
                </div>
            )}
        </div>
    );
}
