import useProduct from "../hooks/useProduct"

export function ProductPriceOld () {

    const { id } = useProduct()

    const oldPrice = id == 2 ? 25.9 : null

    return oldPrice && `de ${oldPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
}

export function ProductPrice () {

    const { price } = useProduct()

    return `por ${price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
}

export function ProductPriceInstallments () {

    const { price } = useProduct()
    const installmentPrice = price / 4

    return `ou em 4x de ${installmentPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
}