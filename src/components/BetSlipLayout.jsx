import React from 'react'

export default function BetSlipLayout() {
    const selected = true;
    return (
        <div
            style={{
                height: "40px",
                left: "0",
                position: "absolute",
                top: "41px",
                width: "360px",
            }}
        >
            <div
                style={{
                    height: "40px",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "179px",
                    background: "#1d1e22",
                }}
            >
                {selected && (
                    <div
                        style={{
                            height: "40px",
                            left: "0",
                            position: "absolute",
                            top: "0",
                            width: "179px",
                            background:
                                "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0, rgba(255, 255, 255, 0.1) 100%), #303035",
                            borderBottom: "1px solid #FCE7AA",
                        }}
                    >
                        <div className="col-10"></div>
                    </div>
                )}
                <p className="text-138">싱글</p>
            </div>
            <div
                style={{
                    height: "40px",
                    left: "180px",
                    position: "absolute",
                    top: "0",
                    width: "180px",
                    background: "#1d1e22",
                }}
            >
                <p
                    style={{
                        left: "77px",
                        position: "absolute",
                        opacity: 0.3,
                        color: "#909090",
                        lineHeight: "40px",
                        textAlign: "center",
                        textTransform: "uppercase",
                        fontFamily: "'NotoSansCJKkr-Regular'",
                        fontSize: "14px",
                    }}
                >
                    멀티
                </p>
            </div>
        </div>
    );
}
