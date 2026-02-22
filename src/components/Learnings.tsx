import styles from "./Learnings.module.css";

const items = [
    { icon: "🔬", title: "La ciencia detrás del azúcar", desc: "Entiende cómo la glucosa afecta cada célula de tu cuerpo y qué puedes hacer al respecto." },
    { icon: "🥗", title: "Alimentación estratégica", desc: "Descubre qué comer, cuándo y en qué combinaciones para estabilizar tu glucosa." },
    { icon: "📊", title: "Monitoreo inteligente", desc: "Aprende a interpretar tus niveles sin depender del médico cada semana." },
    { icon: "💪", title: "Hábitos que transforman", desc: "Implementa micro-hábitos con impacto masivo en tu nivel de glucosa y energía." },
    { icon: "🧘", title: "Estilo de vida antidiabético", desc: "Crea una rutina sostenible que trabaje con tu biología, no en contra de ella." },
    { icon: "🍎", title: "Recetas y menús prácticos", desc: "Menús diseñados para ser deliciosos y funcionar perfectamente con el índice glucémico." },
];

export default function Learnings() {
    return (
        <section className={styles.section} id="contenido">
            <div className="container">
                <span className="section-tag center-tag">LO QUE APRENDERÁS</span>
                <h2 className="center-title">En este libro descubrirás</h2>
                <div className={styles.grid}>
                    {items.map(item => (
                        <div key={item.title} className={styles.card}>
                            <div className={styles.icon}>{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
