import styles from "./Guarantee.module.css";

export default function Guarantee() {
    return (
        <section className={styles.section} id="garantia">
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.badge}>
                        <div className={styles.circle}>
                            <span>🛡️</span>
                            <strong>30</strong>
                            <span className={styles.word}>DÍAS</span>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <h2>Garantía de Satisfacción de 30 Días</h2>
                        <p>Si en los próximos 30 días no estás completamente satisfecho con los resultados, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones. Tu inversión está completamente protegida.</p>
                        <p className={styles.note}>Nuestra confianza en el contenido de este libro es absoluta. Si no funciona para ti, simplemente escríbenos y recibirás tu reembolso completo en menos de 24 horas.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
