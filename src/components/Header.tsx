import styles from '../scss/components/Header.module.scss'
import LogoCorebiz from './LogoCorebiz'
import MiniCart from './MiniCart'
import MyAccount from './MyAccount'
import SearchBox from './SearchBox'

function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <LogoCorebiz />
                <SearchBox />
                <MyAccount />
                <MiniCart />
            </div>
        </header>
    )
}

export default Header