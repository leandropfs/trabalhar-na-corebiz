import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

function useProduct () {

    const { product } = useContext(ProductContext)

    return product
}

export default useProduct