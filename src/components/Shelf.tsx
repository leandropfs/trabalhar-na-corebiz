import { useEffect, useState } from "react"
import Slider from "react-slick"
import axios from "axios"

import Product from './Product'
import { ProductType } from "../typings/Product"

import styles from '../scss/components/Shelf.module.scss'


function Shelf () {

    var settings = {
        className: "slick-shelf",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                },
            },
        ]
    }

    const [products, setProducts] = useState([] as ProductType[])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
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
                        <Slider {...settings}>

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