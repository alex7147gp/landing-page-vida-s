import Image from "next/image";
import styles from "./Testimonials.module.css";

const reviews = [
    { img: "/testimonial_1.png", init: "MR", color: "ta1", name: "María Rodríguez", loc: "Bogotá, Colombia", featured: false, text: `"En solo 3 semanas bajé mis niveles de glucosa de 180 a 105. Jamás pensé que cambiar mi alimentación pudiera tener un efecto tan poderoso y rápido."` },
    { img: "/testimonial_2.png", init: "CP", color: "ta2", name: "Carlos Pérez", loc: "Ciudad de México", featured: true, text: `"Mi médico quedó impresionado con mis análisis. Llevo 4 meses aplicando lo del libro y ya reducí a la mitad mi medicación. Este libro vale mucho más de lo que cuesta."` },
    { img: "/testimonial_3.png", init: "LV", color: "ta3", name: "Laura Vásquez", loc: "Lima, Perú", featured: false, text: `"Lo recomiendo a toda mi familia. La tabla de alimentos del bono es lo que más uso. Ahora ir al supermercado es completamente diferente."` },
];

export default function Testimonials() {
    return (
        <section className={styles.section} id="testimonios">
            <div className="container">
                <span className="section-tag center-tag">TESTIMONIOS REALES</span>
                <h2 className="center-title">Lo que dicen nuestros lectores</h2>
                <div className={styles.grid}>
                    {reviews.map(r => (
                        <div key={r.name} className={`${styles.card} ${r.featured ? styles.featured : ""}`}>
                            <div className={styles.stars}>★★★★★</div>
                            <p className={styles.text}>{r.text}</p>
                            <div className={styles.author}>
                                <Image src={r.img} alt={r.name} width={44} height={44} className={styles.avatarImg} unoptimized />
                                <div>
                                    <strong>{r.name}</strong>
                                    <span>{r.loc}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
