import useProduct from "../hooks/useProduct"

import styles from '../scss/components/Product.module.scss'

function ProductBadges () {

    const { id } = useProduct()

    const hasOldPrice = id == 2 ? true : false

    return hasOldPrice && <span className={styles.productBadgeOffer}>OFF</span>
}

export default ProductBadges