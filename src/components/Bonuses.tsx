import Image from "next/image";
import styles from "./Bonuses.module.css";

const bonuses = [
    {
        num: "1", img: "/bonus_book_1.png", alt: "Bono 1",
        title: "Reto de 7 Días \"Desintoxica tu Azúcar\"",
        desc: "Plan paso a paso para eliminar el azúcar de tu dieta en una semana con menús diarios y consejos prácticos.",
        value: "$12", featured: false,
    },
    {
        num: "2", img: "/bonus_book_2.png", alt: "Bono 2",
        title: "30 Recetas Rápidas de Bajo Índice Glucémico",
        desc: "Recetas deliciosas y fáciles de preparar en menos de 30 minutos, perfectas para tu día a día.",
        value: "$18", featured: true,
    },
    {
        num: "3", img: "/bonus_book_3.png", alt: "Bono 3",
        title: "Guía Práctica: 7 Hábitos Diarios para Controlar tu Azúcar Naturalmente",
        desc: "Rutinas simples que puedes implementar desde hoy para mantener estables tus niveles de glucosa.",
        value: "$15", featured: false,
    },
    {
        num: "4", img: "/bonus_book_4.png", alt: "Bono 4",
        title: "Tabla Completa del Índice Glucémico de más de 200 Alimentos",
        desc: "Referencia completa para tomar decisiones inteligentes en cada comida. Incluye frutas, verduras, granos y más.",
        value: "$20", featured: false,
    },
    {
        num: "5", img: "/bonus_book_5.png", alt: "Bono 5",
        title: "Lista de Compras Semanal de Bajo Índice Glucémico",
        desc: "Planificación semanal completa con listas organizadas por categorías para facilitar tus compras saludables.",
        value: "$10", featured: false,
    },
];

export default function Bonuses() {
    return (
        <section className={styles.section} id="bonos">
            <div className={styles.decor} />
            <div className="container">
                <div className={styles.header}>
                    <h2>¡Bonos Especiales <span className="highlight-yellow">GRATIS!</span></h2>
                    <p>Con tu compra hoy recibes estos bonos valorados en más de <strong>$87 USD</strong> — completamente gratis</p>
                </div>
                <div className={styles.grid}>
                    {bonuses.map(b => (
                        <div key={b.num} className={`${styles.card} ${b.featured ? styles.featured : ""}`}>
                            <div className={styles.num}>BONO {b.num}</div>
                            <Image src={b.img} alt={b.alt!} width={120} height={160} className={styles.img} />
                            <h3>{b.title}</h3>
                            <p>{b.desc}</p>
                            <div className={styles.value}><s>{b.value}</s><span>GRATIS</span></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
