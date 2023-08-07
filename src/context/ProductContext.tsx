import { ReactNode, createContext } from "react";
import { ProductType } from "../typings/Product";

type ProductContextType = {
    product: ProductType
}

type ProductContextProviderProps = {
    children: ReactNode,
    product: ProductType
}

export const ProductContext = createContext({} as ProductContextType)

export function ProductContextProvider ({product, children} : ProductContextProviderProps) {
    return (
        <ProductContext.Provider
            value = {
                {
                    product
                }
            }
        >
            {children}
        </ProductContext.Provider>
    )
}