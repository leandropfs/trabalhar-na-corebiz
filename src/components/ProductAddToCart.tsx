import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import useProduct from "../hooks/useProduct"

import styles from '../scss/components/Product.module.scss'


function ProductAddToCart () {

    const product = useProduct()
    const { items, addToCart } = useContext(CartContext)

    const isCurrentProductAlreadyAddToCart = items.find(item => item.id == product.id)

    function addProductToCart(e: React.SyntheticEvent) {
        e.preventDefault()
        addToCart(product)
    }

    return isCurrentProductAlreadyAddToCart ? (
        <button disabled className={`button button-success ${styles.productButtonAddToCart}`}>
            Adicionado
        </button>
    ) : (
        <button 
            onClick={addProductToCart}
            className={`button button-primary ${styles.productButtonAddToCart}`}
        >
            Comprar
        </button>
    )

}

export default ProductAddToCart