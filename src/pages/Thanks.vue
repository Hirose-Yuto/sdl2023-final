<template>
  <div class="text-center">
    <green-check width="161" class="mx-auto my-4"/>
    <span class="text-2xl m-2">ご注文ありがとうございます！</span>
    <div class="text-gray-500">
      <div class="m-2 text-sm">
        <div>下記のメールアドレスにご注文の確認メールを送信しました</div>
        <div>{{ email }}</div>
      </div>
      <div class="m-2 mt-4 text-sm">
        <div class="m-1">
          担当者からの発注完了メールをお待ち下さい
        </div>
        <div>
          キャンセルされる場合は、<br>
          contact@redigiform.com<br>
          までお問い合わせください
        </div>
      </div>
    </div>
    <button @click="closeWindow" class="mt-10 p-3 border border-black rounded w-56">画面を閉じる</button>
  </div>

</template>

<script lang="ts">

import GreenCheck from "../images/GreenCheck.vue";

import {defineComponent} from "vue";

export default defineComponent({
  name: "Thanks",
  components: {
    GreenCheck
  },
  props: {
    email: {
      type: String,
      required: true,
    }
  },
  methods: {
    closeWindow: function () {
      window.close()
    }
  }
})
</script>
