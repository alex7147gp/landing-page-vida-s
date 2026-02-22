import Image from "next/image";
import styles from "./FinalDark.module.css";

const checks = [
    "Sin medicamentos adicionales",
    "Sin dietas imposibles de seguir",
    "Sin conocimientos médicos previos",
    "Resultados visibles desde la primera semana",
    "Acceso inmediato tras la compra",
    "Satisfacción garantizada o te devolvemos tu dinero",
];

export default function FinalDark() {
    return (
        <section className={styles.section} id="final">
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2>Tu vida y tu salud comienzan hoy</h2>
                        <p>Únete a miles de personas que ya tomaron el control de su salud con este método.</p>
                        <ul className={styles.list}>
                            {checks.map(c => (
                                <li key={c}><span>✔</span>{c}</li>
                            ))}
                        </ul>
                        <a href="https://payhip.com/b/s86Pi" className="btn btn-cta btn-large">¡EMPEZAR AHORA! →</a>
                    </div>
                    <div className={styles.imageWrap}>
                        <Image src="/book_cover.png" alt="Libro Índice Glucémico" width={340} height={440} className={styles.book} unoptimized />
                    </div>
                </div>
            </div>
        </section>
    );
}
