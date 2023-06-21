document.addEventListener("DOMContentLoaded",async function(){const s=document.querySelector("#products");if(!s)return;const e=(await chrome.storage.sync.get(["products"])).products,t=e.reduce((r,d)=>(r+=parseInt(d.total_price.trim().slice(1)),r),0);s.innerHTML=`
<div class="ml-auto flex flex-col items-end">
    ${a(e)}
</div>
<div class="flex justify-end my-2">
    <div>
        <div class="border-b border-black w-48 grid grid-cols-2 px-2">
            <div class="col-start-auto text-2xl font-bold">総額</div>
            <div class="col-end-auto text-end text-2xl font-bold">$${t}</div>
        </div>
        <div class="text-end text-base text-gray-500 m-1">
            参考価格:<span id="reference-price">????</span> 円
        </div>
    </div>
</div>
`,fetch("https://www.gaitameonline.com/rateaj/getrate").then(async r=>{const o=(await r.json()).quotes.find(i=>i.currencyPairCode==="USDJPY");if(!o)return;const n=Math.round(parseFloat(o.high)*t),c=document.querySelector("#reference-price");c&&(c.innerHTML=n.toLocaleString())})});const a=s=>{let e="";for(const t of s)e+=`
<div class="shadow-md my-4 border w-md">
    <div class="p-4 pb-2">
        <div class="font-bold text-base">${t.name}</div>
        <div class="font-light text-base">${t.sku}</div>
        <div class="text-xl text-pink-600 my-1 mt-2">${t.price}</div>
        <div class="grid grid-cols-2 my-1">
            <p class="text-xl col-start-auto">${t.quantity}個</p>
            <p class="text-xl col-end-auto text-end">合計: ${t.total_price}</p>
        </div>
    </div>
</div>
        `;return e};
