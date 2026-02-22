"use client";

import { useEffect, useState } from "react";
import TrackedButton from "./TrackedButton";
import styles from "./StickyCtaClient.module.css";

export default function StickyCtaClient() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show the sticky CTA after scrolling down 500px
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={styles.stickyContainer}>
            <p className={styles.text}>
                ¿Estás listo para tomar el control de tu salud?
            </p>
            <TrackedButton
                href="https://payhip.com/b/s86Pi"
                className={styles.button}
                style={{ textDecoration: 'none', textAlign: 'center' }}
            >
                ¡Compra el libro ahora!
            </TrackedButton>
        </div>
    );
}
