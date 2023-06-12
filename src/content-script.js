const read_docs = async () => {
    const items = document.getElementsByClassName("product-list__item")
    for (const item of items) {
        const product_name = item.getElementsByClassName("product-list__name").item(0).textContent
        const SKU = item.getElementsByClassName("product-list__id").item(0).textContent
        const value_tables = item.getElementsByTagName('tbody').item(0).getElementsByTagName('td');
        const price = value_tables.item(0).textContent
        const total_price = value_tables.item(2).textContent
        const quantity = value_tables.item(1).getElementsByTagName('input').namedItem('quantity').getAttribute("value")
        console.log(quantity)
    }
    chrome.storage.sync.set({"product": "bbb"}).then()


    chrome.storage.sync.get("product").then((result) => {
        console.log(result);
    });
    // console.log(chrome.runtime.getURL("popup.html"))
    chrome.runtime.sendMessage({greeting: "hello"}, function (response) {
        console.log(response)
    })
}

const checkoutElements = document.getElementsByClassName('cart__checkout-action')
for (const checkoutElement of checkoutElements) {
    const button = document.createElement('a')
    button.textContent = 'Checkout via Redigiform'
    button.classList.add('button', 'button--large')
    button.style.background = "orangered"
    button.addEventListener('click', read_docs)
    checkoutElement.appendChild(button)
}