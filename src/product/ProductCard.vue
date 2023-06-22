<template>
  <div class="shadow-md my-4 border min-w-full sm:w-md sm:min-w-0">
    <div class="p-4 pb-2">
      <div class="font-bold text-base">{{ product.name }}</div>
      <div class="font-light text-base">{{ product.sku }}</div>
      <div class="text-xl text-pink-600 my-1 mt-2">{{ product.price }}</div>
      <div class="grid grid-cols-2 my-1">
        <p class="text-xl col-start-auto">{{ product.quantity }}個</p>
        <p class="text-xl col-end-auto text-end">合計: {{ product.total_price }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Product} from "../types/products";
import {PropType} from "vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      required: true,
      type: Object as PropType<Product>
    }
  }
})
</script>

<style scoped>

</style>