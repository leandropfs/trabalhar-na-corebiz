import styles from '../scss/components/Footer.module.scss'
import logoCorebizSrc from '../assets/images/logo-corebiz-white.svg'
import logoVtexSrc from '../assets/images/logo-vtex.svg'



function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>

                <div className={styles["footer-location"]}>
                    <header className={`heading ${styles["footer-location-heading"]}`}>
                        <h2>Localização</h2>
                    </header>
                    <main className={styles["footer-location-content"]}>
                        <address>
                            <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
                            <p>Alphavile SP</p>
                            <p>brasil@corebiz.ag</p>
                            <p>+55 11 3090 1039</p>
                        </address>
                    </main>
                </div>

                <div className={styles["footer-contact"]}>
                    <a href="/" className={styles["footer-contact-mail"]}>
                        <span>ENTRE EM CONTATO</span>
                    </a>
                    <a href="/" className={styles["footer-contact-callcenter"]}>
                        <span>FALE COM O NOSSO <br/> CONSULTOR ONLINE</span>
                    </a>
                </div>

                <div className={styles["footer-copyright"]}>
                    <a href="https://corebiz.ag" target="_blank" className={styles["footer-copyright-corebiz"]}>
                        <span>Created by</span>
                        <img src={logoCorebizSrc} alt="Corebiz" />
                    </a>
                    <a href="https://www.vtex.com" target="_blank" className={styles["footer-copyright-vtex"]}>
                        <span>Powered by</span>
                        <img src={logoVtexSrc} alt="Vtex" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer