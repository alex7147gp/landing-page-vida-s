"use client";
import { useState, useEffect } from "react";
import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
    const [time, setTime] = useState({ h: 23, m: 59, s: 42 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => {
                let { h, m, s } = prev;
                s--;
                if (s < 0) { s = 59; m--; }
                if (m < 0) { m = 59; h--; }
                if (h < 0) { h = 23; }
                return { h, m, s };
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const pad = (n: number) => String(n).padStart(2, "0");

    return (
        <>
            <div className={styles.announcement}>
                ⚡ OFERTA LIMITADA — Obtén el libro + todos los bonos por solo{" "}
                <strong>$15 USD</strong>
            </div>
            <div className={styles.countdown}>
                ⏰ Oferta especial expira en:{" "}
                <strong>{pad(time.h)}:{pad(time.m)}:{pad(time.s)}</strong>
            </div>
        </>
    );
}
