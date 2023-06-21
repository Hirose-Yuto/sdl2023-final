<template>
  <div class="container mx-auto py-10 max-w-lg">
    <form>
      <div class="my-12">
        <h2 class="text-4xl font-bold m-2">1. 商品情報</h2>
        <product-section/>
      </div>
      <div class="my-12">
        <h2 class="text-4xl font-bold m-2">2. 配送情報</h2>
        <div class="pl-4">
          <text-input label="氏名(フルネーム)" placeholder="例: 山田太郎" v-model="fullName"/>
          <text-input label="電話番号" placeholder="例: 000-0000-0000" v-model="phone"/>
          <label class="block m-4">
            <span class="text-black text-base font-bold">郵便番号</span>
            <span class="flex items-center">
                    <input type="number"
                           name="postcode-start"
                           required
                           pattern="\d{3}"
                           class="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           placeholder="例: 000">
                    <span class="mx-2">-</span>
                    <input type="number"
                           name="postcode-end"
                           required
                           pattern="\d{4}"
                           class="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           placeholder="例: 0000">
                </span>
          </label>
          <text-input label="住所" placeholder="例: 〇〇県〇〇市〇〇町1-2-3" v-model="address"/>
          <check-box label="配送情報を記録する" v-model="saveDeliver"/>
          <text-area label="備考" v-model="deliverAppendix"/>
        </div>
      </div>
      <div class="my-12">
        <h2 class="text-4xl font-bold m-2">3. チーム情報</h2>
        <div class="pl-4">
        </div>
      </div>
      <button type="submit" class="">aaaa</button>
    </form>
  </div>
</template>

<script>
import TextInput from "./inputs/TextInput.vue";
import CheckBox from "./inputs/CheckBox.vue";
import TextArea from "./inputs/TextArea.vue";
import ProductSection from "./product/ProductSection.vue";

export default {
  components: {
    TextInput,
    CheckBox,
    TextArea,
    ProductSection
  },

  data() {
    return {
      fullName: "",
      phone: "",
      address: "",
      saveDeliver: false,
      deliverAppendix: ""
    }
  },

  methods: {}
}
</script>
