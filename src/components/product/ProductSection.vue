<template>
  <div class="ml-auto flex flex-col items-end">
    <product-card v-for="product in products" :product="product"/>
  </div>
  <div class="flex justify-end my-2">
    <div>
      <div class="border-b border-black w-48 grid grid-cols-2 px-2">
        <div class="col-start-auto text-2xl font-bold">総額</div>
        <div class="col-end-auto text-end text-2xl font-bold">${{ sumDollar }}</div>
      </div>
      <div class="text-end text-base text-gray-500 m-1">
        参考価格:{{ referencePriceYen }} 円
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {chromeProductsType} from "../../external/chromeExtension/types";
import ProductCard from "./ProductCard.vue";

export default defineComponent({
  name: "ProductSection",
  components: {ProductCard},
  props: {
    products: {
      required: true,
      type: Object as PropType<chromeProductsType>
    },
    referencePriceYen: {
      required: true,
      type: String
    },
    sumDollar: {
      required: true,
      type: Number
    },
  },
})
</script>
