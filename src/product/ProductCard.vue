<template>
  <div class="shadow-md my-4 border w-md">
    <div class="p-4 pb-2">
      <div class="font-bold text-base">{{ name}}</div>
      <div class="font-light text-base">{{ sku}}</div>
      <div class="text-xl text-pink-600 my-1 mt-2">{{ price}}</div>
      <div class="grid grid-cols-2 my-1">
        <p class="text-xl col-start-auto">{{ quantity}}個</p>
        <p class="text-xl col-end-auto text-end">合計: {{ total_price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    name: {
      required: true,
      type: String
    },
    sku: {
      required: true,
      type: String
    },
    price: {
      required: true,
      type: String
    },
    quantity: {
      required: true,
      type: String
    },
    total_price: {
      required: true,
      type: String
    },
  }
}
</script>

<style scoped>

</style>