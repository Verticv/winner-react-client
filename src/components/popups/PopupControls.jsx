import React, { useState, useRef, useCallback } from "react";
import { useOnClickOutside } from "../../helpers/functions";

export default function PopupControls({
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
            } flex items-center justify-center w-auto h-10 rounded-circle`}
        >
            <div
                className="flex items-center justify-center"
                onMouseDown={() => {
                    if (onClick) onClick();
                    setOpen(true);
                }}
            >{buttonChild}</div>
            {open && (
                <div className="absolute flex items-center justify-center w-screen h-screen bg-black bg-opacity-10 z-50 left-0 top-0" >
                    <div ref={ref}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
