<template>
  <div class="shadow-md rounded-sm p-3 border grid grid-cols-2 gap-4 min-w-full sm:w-2xl sm:min-w-0">
    <div class="text-gray-700">
      「注文を確定」ボタンを押してご注文いただくことで、
      お客様はRedigiformの
      <a href="https://www.redigiform.com/terms-of-service/"
         class="text-blue-600 hover:underline"
      >
        各種規約
      </a>、
      <a href="https://www.redigiform.com/privacy/"
         class="text-blue-600 hover:underline"
      >
        プライバシー規約
      </a>
      および当サイト上の販売条件に同意の上、商品をご注文されたことになります。
      価格については必ず当サイト及び利用規約をご確認ください。
    </div>
    <div class="pl-5 pr-3">
      <button
          type="submit"
          :disabled="disabled"
          class="rounded-xl text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-100 font-medium text-sm px-5 py-1.5 text-center w-full">
        注文を確定
      </button>
      <div class="mt-1">
        <span class="text-lg text-pink-600 my-1 mt-2">
          ご請求額: ${{ sumDollar }}
        </span>
        <span class="text-gray-400">
          + 配送料・手数料 + 税
        </span>
      </div>
      <div class="mt-1">
        <span class="text-gray-400 text-base">
          参考価格: {{ referencePriceYen }}円
        </span>
        <span class="text-gray-400">
          + {{ estimatedShippingFeeYen }}円 + 税
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "SubmitButton",
  props: {
    sumDollar: {
      required: true,
      type: Number,
    },
    referencePriceYen: {
      required: true,
      type: String,
    },
    estimatedShippingFeeYen: {
      required: true,
      type: String
    },
    disabled: {
      required: true,
      type: Boolean,
    },
  }
})
</script>