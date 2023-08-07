import useProduct from "../hooks/useProduct"

type ProductImageProps = {
    width: string,
    height: string
}

function ProductImage (props : ProductImageProps) {

    const { image, title } = useProduct()
    const imageSrc = image ? image : '/images/produtcs/product.jpg'

    return (
        <img src={imageSrc} alt={title} width={props.width} height={props.height} />
    ) 
}

ProductImage.defaultProps = {
    width: "200",
    height: "200"
};

export default ProductImage