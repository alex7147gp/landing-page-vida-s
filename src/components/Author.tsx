import Image from "next/image";
import styles from "./Author.module.css";

export default function Author() {
    return (
        <section className={styles.section} id="autor">
            <div className={`container ${styles.inner}`}>
                <div className={styles.imageWrap}>
                    <Image src="/author_photo.png" alt="Dra. María González" width={380} height={460} className={styles.photo} unoptimized />
                    <div className={styles.creds}>
                        <div className={styles.cred}>🎓 PhD en Nutrición Clínica</div>
                        <div className={styles.cred}>🏆 15 años de experiencia</div>
                        <div className={styles.cred}>📚 Autora de 3 libros</div>
                    </div>
                </div>
                <div className={styles.content}>
                    <span className="section-tag">SOBRE EL AUTOR</span>
                    <h2>Andrés Diabetes control</h2>
                    <p>Médico Especialista en Endocrinología y Nutrición con más de 15 años de experiencia ayudando a pacientes a controlar y prevenir la diabetes a través de la alimentación.</p>
                    <p>Graduado de la Universidad de Medicina con especialización en Endocrinología, ha dedicado su carrera a investigar la relación entre el índice glucémico de los alimentos y el control de la diabetes.</p>
                    <div className={styles.achievements}>
                        {[
                            { num: "5,000+", label: "Pacientes ayudados" },
                            { num: "15 años", label: "De experiencia" },
                            { num: "97%", label: "Tasa de éxito" },
                        ].map(a => (
                            <div key={a.label} className={styles.achievement}>
                                <strong>{a.num}</strong>
                                <span>{a.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
