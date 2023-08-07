import useProduct from "../hooks/useProduct"

import styles from '../scss/components/Product.module.scss'

function ProductRating () {

    const { rating } = useProduct()
    const rate = rating ?  Math.round(rating.rate) : 5

    let rateStars = []

    for (let i = 0; i < 5; i++) {
        rateStars.push(rate >= i ? "productRatingOn" : "productRatingOff")
    }

    return rateStars.map((rate, i) => (
                <i key={i} className={styles[rate]}></i>
            ))
}

export default ProductRating