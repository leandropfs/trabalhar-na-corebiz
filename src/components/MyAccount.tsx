import styles from '../scss/components/MyAccount.module.scss'

function MyAccount () {
    return (
        <div className={styles.myAccount}>
            <a href='/'>
                <span>Minha Conta</span>
            </a>
        </div>
    )
}

export default MyAccount