import { useEffect, useState } from "react"
import Slider from "react-slick"
import { api } from "../services/api"
import { slickShelf } from "../services/settings"

import Product from './Product'
import { ProductType } from "../typings/Product"

import styles from '../scss/components/Shelf.module.scss'

function Shelf () {

    const [products, setProducts] = useState([] as ProductType[])

    useEffect(() => {
        api.get('/products')
        .then(function (response) {
            setProducts(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    },[]) 

    return (
        <div className={styles.shelf}>
            <div className={styles.shelfContainer}>
                <header className={`heading ${styles.shelfHeading}`}>
                    <h1>Mais Vendidos</h1>
                </header>
                <main className={styles.shelfProducts}>
                    <ul className={styles.shelfProductsList}>
                        <Slider {...slickShelf}>

                            {products.map((item: ProductType) => (
                                <Product key={item.id} product={item} />
                            ))}
                        
                        </Slider>
                    </ul>
                </main>
            </div>
        </div>
    )
}

export default Shelf