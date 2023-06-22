<template>
  <div class="ml-auto flex flex-col items-end">
    <product-card v-for="product in products" :product="product"/>
  </div>
  <div class="flex justify-end my-2">
    <div>
      <div class="border-b border-black w-48 grid grid-cols-2 px-2">
        <div class="col-start-auto text-2xl font-bold">総額</div>
        <div class="col-end-auto text-end text-2xl font-bold">${{ sum }}</div>
      </div>
      <div class="text-end text-base text-gray-500 m-1">
        参考価格:{{ referencePrice }} 円
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {GaitameRateAPIResponse} from "../types/gaitame_rate_api";
import {Product, Products} from "../types/products";
import ProductCard from "./ProductCard.vue";

export default defineComponent({
  name: "ProductSection",
  components: {ProductCard},
  data() {
    return {
      products: [] as Products,
      referencePrice: "0",
      sum: 0,
    }
  },
  mounted() {
    this.updateProduct()
  },
  methods: {
    async updateProduct() {
      const products = (await chrome.storage.sync.get(["products"]))["products"] as Products
      this.products = products
      this.sum = products.reduce((ac: number, p: Product) => {
        ac += parseInt(p.total_price.trim().slice(1))
        return ac
      }, 0)
    },
    async updateReferencePrice(sum: number) {
      const res = await fetch('https://www.gaitameonline.com/rateaj/getrate')
      const response = (await res.json()) as GaitameRateAPIResponse
      const rate = response.quotes.find((r) => r.currencyPairCode === "USDJPY")
      if (!rate) return
      this.referencePrice = Math.round(parseFloat(rate.high) * sum).toLocaleString()
    }
  },
  watch: {
    sum: function (newVal, _) {
      this.updateReferencePrice(newVal)
    }
  }
})
</script>

<style scoped>

</style>