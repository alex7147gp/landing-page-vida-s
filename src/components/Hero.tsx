import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.blob1} />
            <div className={styles.blob2} />
            <div className={`container ${styles.inner}`}>
                <div className={styles.content}>
                    <div className={styles.badge}>📚 GUÍA DEFINITIVA DE SALUD</div>
                    <h1 className={styles.title}>
                        ¿Sabías que el{" "}
                        <span className="highlight">índice glucémico</span>{" "}
                        puede cambiar tu vida?
                    </h1>
                    <p className={styles.subtitle}>
                        Descubre el método científicamente comprobado para controlar y combatir la
                        diabetes sin medicamentos agresivos — usando el poder de la alimentación
                        inteligente.
                    </p>
                    <div className={styles.ctaGroup}>
                        <a href="https://payhip.com/b/s86Pi" className={`btn btn-primary btn-large pulse-btn ${styles.cta}`}>
                            ¡QUIERO MI LIBRO AHORA! →
                        </a>
                        <p className={styles.ctaNote}>
                            🔒 Acceso inmediato · Garantía 30 días · Solo $15 USD
                        </p>
                    </div>
                    <div className={styles.socialProof}>
                        <div className={styles.avatars}>
                            {["av1", "av2", "av3", "av4"].map(c => (
                                <div key={c} className={`${styles.avatar} ${styles[c]}`} />
                            ))}
                        </div>
                        <p>+2,400 personas ya transformaron su salud</p>
                    </div>
                </div>
                <div className={styles.imageWrap}>
                    <div className={styles.glow} />
                    <Image
                        src="/book_cover.png"
                        alt="Libro Índice Glucémico y Diabetes"
                        width={320}
                        height={420}
                        className={styles.book}
                        priority
                        unoptimized
                    />
                    <div className={styles.bookBadge}>BESTSELLER</div>
                </div>
            </div>
            <div className={styles.wave}>
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L1440 0L1440 40C1200 80 240 80 0 40L0 0Z" fill="#fff" />
                </svg>
            </div>
        </section>
    );
}
