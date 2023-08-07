import styles from '../scss/components/LogoCorebiz.module.scss'
import logoSrc from '../assets/images/logo-corebiz.svg'

function LogoCorebiz () {
    return (
        <div className={styles.logo}>
            <a href='/'>
                <img src={logoSrc} alt="Corebiz" />
            </a>
        </div>
    )
}

export default LogoCorebiz