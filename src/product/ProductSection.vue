<template>
  <div class="ml-auto flex flex-col items-end">
    ${getProductRows(products)}
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

<script>
export default {
  name: "ProductSection",
  data() {
    return {
      products: [],
      referencePrice: 0,
      sum: 0,
    }
  },
  async mounted() {
    console.log(await chrome.storage.sync.get(["products"]))
  }
}
</script>

<style scoped>

</style>