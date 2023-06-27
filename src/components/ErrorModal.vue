<template>
  <div id="modal">
    <div id="modal-content"
         class=" bg-white z-2 text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-xs  sm:w-72">
      <div class="p-4">
        <warning width="60" class="mx-auto"/>
        <div class="text-lg">エラーが発生しました</div>
        <div class="text-gray-500">{{ message || "しばらく待ってからやり直してください" }}</div>
      </div>
      <button class="inline-block w-full bg-red-400 h-7 text-white border rounded text-center align-middle bg-white"
              @click="closeModal">
        閉じる
      </button>
    </div>
    <div id="modal-overlay"
         class="block fixed top-0 left-0 w-full h-full bg-black opacity-75 z-1"
         @click="closeModal"
    ></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Warning from "../images/Warning.vue";

export default defineComponent({
  name: "Modal",
  components: {Warning},
  props: {
    "message": {
      required: true,
      type: String
    }
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
});
</script>

<style scoped>
</style>