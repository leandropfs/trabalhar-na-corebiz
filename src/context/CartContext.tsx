import { ReactNode, createContext, useState } from "react";


type CartItem = {
    id: number
    title: string
    image: string
}

type CartContextType = {
    items: CartItem[]
    addToCart: (item : CartItem) => void
}

type CartContextProviderProps = {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider ({children} : CartContextProviderProps) {

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart') || "[]") as CartItem[])

    function addToCart (item : CartItem) {
        const actualCartItems = JSON.parse(localStorage.getItem('cart') || "[]")
        actualCartItems.push(item)
        localStorage.setItem('cart', JSON.stringify(actualCartItems))
        setCartItems(JSON.parse(localStorage.getItem('cart') || "[]"))
    }

    return (
        <CartContext.Provider
            value={
                {
                    items : cartItems,
                    addToCart
                }
            }
        >
            {children}
        </CartContext.Provider>
    )
}