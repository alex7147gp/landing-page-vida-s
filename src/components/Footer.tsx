import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>© 2026 Índice Glucémico y Diabetes. Todos los derechos reservados.</p>
                <div className={styles.links}>
                    <a href="#">Política de Privacidad</a>
                    <a href="#">Términos de Servicio</a>
                    <a href="#">Contacto</a>
                </div>
                <p className={styles.disclaimer}>
                    Los resultados pueden variar. Este libro no reemplaza el consejo médico profesional.
                    Siempre consulta a tu médico ante cualquier cambio en tu tratamiento.
                </p>
            </div>
        </footer>
    );
}
