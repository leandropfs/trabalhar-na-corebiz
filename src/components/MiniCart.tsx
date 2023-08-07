import { useContext } from 'react'
import styles from '../scss/components/MiniCart.module.scss'
import { CartContext } from '../context/CartContext'

function MiniCart () {

    const { items }  = useContext(CartContext)
    return (
        <div className={styles.miniCart}>
            <a href='/'>
                <span>{items.length}</span>
            </a>
        </div>
    )
}

export default MiniCart