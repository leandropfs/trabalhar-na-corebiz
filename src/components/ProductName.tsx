import useProduct from "../hooks/useProduct"

function ProductName () {

    const { title } = useProduct()

    return title
}

export default ProductName