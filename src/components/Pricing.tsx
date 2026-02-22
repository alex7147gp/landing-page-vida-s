import styles from "./Pricing.module.css";

const includes = [
    "Libro principal: Índice Glucémico y Diabetes",
    "Bono #1: Recetas Saludables (valor $27)",
    "Bono #2: Plan de Ejercicios (valor $37)",
    "Bono #3: Tabla de IG 200+ alimentos (valor $17)",
    "Bono #4: Diario de Control Semanal (valor $7)",
];

export default function Pricing() {
    return (
        <section className={styles.section} id="precio">
            <div className="container">
                <div className={styles.box}>
                    <div className={styles.left}>
                        <span className="section-tag">PRECIO ESPECIAL HOY</span>
                        <h2>Obtén todo por un precio ridículamente bajo</h2>
                        <ul className={styles.list}>
                            {includes.map(item => (
                                <li key={item}><span className={styles.check}>✔</span>{item}</li>
                            ))}
                        </ul>
                        <p className={styles.total}>Valor total: <s>$143 USD</s></p>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.card}>
                            <div className={styles.label}>TU PRECIO HOY</div>
                            <div className={styles.price}>$15 <span>USD</span></div>
                            <div className={styles.sub}>Pago único · Acceso de por vida</div>
                            <a href="https://payhip.com/b/s86Pi" className="btn btn-cta btn-full">🛒 ¡COMPRAR AHORA POR $15!</a>
                            <div className={styles.secure}>
                                <span>🔒 Pago 100% seguro</span>
                                <span>⚡ Acceso inmediato</span>
                            </div>
                            <div className={styles.methods}>
                                <span>💳 VISA</span><span>💳 Mastercard</span><span>🅿️ PayPal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
