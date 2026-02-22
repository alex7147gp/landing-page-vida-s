import styles from "./Stats.module.css";

const stats = [
    { icon: "⚠️", value: "1 de cada 10", desc: "adultos en el mundo padece diabetes", cls: "red" },
    { icon: "🌍", value: "537 Millones", desc: "de personas viven con diabetes en el mundo", cls: "blue" },
    { icon: "✅", value: "70% Prevenible", desc: "de los casos se pueden prevenir con dieta y estilo de vida", cls: "green" },
];

export default function Stats() {
    return (
        <section className={styles.section} id="stats">
            <div className="container">
                <p className={styles.label}>
                    La realidad que <em>nadie</em> te cuenta sobre la diabetes
                </p>
                <div className={styles.grid}>
                    {stats.map(s => (
                        <div key={s.value} className={`${styles.card} ${styles[s.cls]}`}>
                            <div className={styles.icon}>{s.icon}</div>
                            <div className={styles.value}>{s.value}</div>
                            <div className={styles.desc}>{s.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
