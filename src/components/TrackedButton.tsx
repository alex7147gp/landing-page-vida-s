"use client";

import React from "react";

interface TrackedButtonProps {
    href: string;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    eventName?: string;
}

export default function TrackedButton({
    href,
    className,
    style,
    children,
    eventName = "InitiateCheckout",
}: TrackedButtonProps) {
    const handleClick = () => {
        if (typeof window !== "undefined" && (window as any).fbq) {
            (window as any).fbq("track", eventName);
        }
    };

    return (
        <a href={href} className={className} style={style} onClick={handleClick}>
            {children}
        </a>
    );
}
