import Slider from "react-slick";

import styles from '../scss/components/Banner.module.scss'

function Banner() {

    var settings = {
        className: "slick-banner",
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className={styles.bannerFull}>
            <Slider {...settings}>
                <picture className={styles.bannerFullItem}>
                    <source srcSet="/images/banners/banner-1-desktop.jpg" media="(min-width: 1024px)" type="image/jpeg" />
                    <source srcSet="/images/banners/banner-1-mobile.jpg" media="(max-width: 1023px)" type="image/jpeg" />
                    <img src="/images/banners/banner-1-desktop.jpg" width="1920" height="400" alt="Olá, o que você está buscando? Criar ou migrar seu e-commerce?" title="Olá, o que você está buscando? Criar ou migrar seu e-commerce?" />
                </picture>
                <picture className={styles.bannerFullItem}>
                    <source srcSet="/images/banners/banner-1-desktop.jpg" media="(min-width: 1024px)" type="image/jpeg" />
                    <source srcSet="/images/banners/banner-1-mobile.jpg" media="(max-width: 1023px)" type="image/jpeg" />
                    <img src="/images/banners/banner-1-desktop.jpg" width="1920" height="400" alt="Olá, o que você está buscando? Criar ou migrar seu e-commerce?" title="Olá, o que você está buscando? Criar ou migrar seu e-commerce?" />
                </picture>
            </Slider>
        </div>
    )
}

export default Banner