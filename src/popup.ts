import {Product, Products} from "./types/products";
import {GaitameRateAPIResponse} from "./types/gaitame_rate_api";
document.addEventListener('DOMContentLoaded', async function () {
    const productsElement = document.querySelector('#products')
    if (!productsElement) return
    const products =  (await chrome.storage.sync.get(["products"]))["products"] as Products
    const sum = products.reduce((ac: number, p: Product) => {
        ac += parseInt(p.total_price.trim().slice(1))
        return ac
    }, 0)

    productsElement.innerHTML = `
<div class="ml-auto flex flex-col items-end">
    ${getProductRows(products)}
</div>
<div class="flex justify-end my-2">
    <div>
        <div class="border-b border-black w-48 grid grid-cols-2 px-2">
            <div class="col-start-auto text-2xl font-bold">総額</div>
            <div class="col-end-auto text-end text-2xl font-bold">$${sum}</div>
        </div>
        <div class="text-end text-base text-gray-500 m-1">
            参考価格:<span id="reference-price">????</span> 円
        </div>
    </div>
</div>
`;
    fetch("https://www.gaitameonline.com/rateaj/getrate").then(async (res: Response) => {
        const response = (await res.json()) as GaitameRateAPIResponse
        const rate = response.quotes.find((r) => r.currencyPairCode === "USDJPY")
        if(!rate) return
        const price = Math.round(parseFloat(rate.high) * sum)
        const referencePrice = document.querySelector('#reference-price')
        if (!referencePrice) return
        referencePrice.innerHTML = price.toLocaleString()
    })
})

const getProductRows = (products: Products) => {
    let res = ""
    for (const product of products) {
        res += `
<div class="shadow-md my-4 border w-md">
    <div class="p-4 pb-2">
        <div class="font-bold text-base">${product.name}</div>
        <div class="font-light text-base">${product.sku}</div>
        <div class="text-xl text-pink-600 my-1 mt-2">${product.price}</div>
        <div class="grid grid-cols-2 my-1">
            <p class="text-xl col-start-auto">${product.quantity}個</p>
            <p class="text-xl col-end-auto text-end">合計: ${product.total_price}</p>
        </div>
    </div>
</div>
        `
    }
    return res
}