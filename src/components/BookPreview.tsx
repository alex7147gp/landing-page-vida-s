import Image from "next/image";
import styles from "./BookPreview.module.css";

export default function BookPreview() {
    return (
        <section className={styles.section} id="preview">
            <div className={`container ${styles.inner}`}>
                <div className={styles.imgWrap}>
                    <Image src="/open_book.png" alt="Vista interior del libro" width={500} height={380} className={styles.img} unoptimized />
                    <div className={styles.floatBadge}><span>📖</span><span>+180 páginas de contenido</span></div>
                </div>
                <div className={styles.content}>
                    <span className="section-tag">DENTRO DEL LIBRO</span>
                    <h2>Índice Glucémico y Combatir la Diabetes — Una Guía Práctica para Cambiar tu Nutrición</h2>
                    <p>Este libro fue creado para personas que quieren resultados reales. No más dietas imposibles ni información contradictoria — solo estrategias claras y aplicables desde el primer día.</p>
                    <ul className={styles.list}>
                        {[
                            "Cómo funciona el índice glucémico y por qué importa",
                            "Los alimentos que debes evitar y los que debes abrazar",
                            "Plan de alimentación semanal paso a paso",
                            "Señales de alerta que tu cuerpo te envía",
                            "Estrategias para estabilizar tu glucosa naturalmente",
                        ].map(item => (
                            <li key={item}><span className={styles.check}>✔</span>{item}</li>
                        ))}
                    </ul>
                    <a href="https://payhip.com/b/s86Pi" className="btn btn-primary">Ver precio especial →</a>
                </div>
            </div>
        </section>
    );
}
