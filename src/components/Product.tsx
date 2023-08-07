import { ProductContextProvider } from '../context/ProductContext'
import { ProductType } from '../typings/Product'

import ProductName from './ProductName'
import ProductImage from './ProductImage'
import ProductRating from './ProductRating'
import { ProductPrice, ProductPriceInstallments, ProductPriceOld } from './ProductPrice'
import ProductBadges from './ProductBadges'
import ProductAddToCart from './ProductAddToCart'

import styles from '../scss/components/Product.module.scss'


type ProductProps = {
    product: ProductType
}

function Product (props : ProductProps) {
    return (
        <ProductContextProvider product={props.product}>
            <li className={styles.productItem}>
                <a href="/">
                    <div className={styles.productContainer}>
                        <div className={styles.productImage}>
                            <ProductImage width="215" height="200" />
                            <ProductBadges />
                        </div>
                        <div className={styles.productName}>
                            <h2><ProductName /></h2>
                        </div>
                        <div className={styles.productRating}>
                            <ProductRating />
                        </div>
                        <div className={styles.productPrice}>
                            <div className={styles['productPrice-old']}>
                                <ProductPriceOld />
                            </div>
                            <div className={styles['productPrice-price']}>
                                <ProductPrice />
                            </div>
                            <div className={styles['productPrice-installments']}>
                                <ProductPriceInstallments />
                            </div>
                        </div>
                        <div className={styles.productAddToCart}>
                            <ProductAddToCart />
                        </div>
                    </div>
                </a>
            </li>
        </ProductContextProvider>
    )
}

export default Product