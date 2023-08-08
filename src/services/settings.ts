export const slickShelf = {
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

export const slickBannerFull = {
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