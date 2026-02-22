import styles from "./FinalCta.module.css";

export default function FinalCta() {
    return (
        <section className={styles.section} id="cta-final">
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.logo}>📗</div>
                    <span className={styles.eyebrow}>TOMA ACCIÓN AHORA</span>
                    <h2>No esperes más para tomar el control de tu salud</h2>
                    <p>Cada día que pasa con niveles de glucosa descontrolados es un día que tu cuerpo sufre. La solución está en este libro y empieza hoy.</p>
                    <div className={styles.price}>
                        <span className={styles.oldPrice}>Valor: $143 USD</span>
                        <div className={styles.newPrice}>$15<span>.40</span> <small>USD</small></div>
                    </div>
                    <a href="https://payhip.com/b/s86Pi" className={`btn btn-cta btn-xl ${styles.cta}`}>✅ QUIERO TRANSFORMAR MI SALUD</a>
                    <div className={styles.row}>
                        <span>🔒 Pago seguro</span>
                        <span>⚡ Acceso inmediato</span>
                        <span>💰 Garantía 30 días</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
