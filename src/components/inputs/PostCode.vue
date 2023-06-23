<template>
  <label class="block m-4">
    <span class="text-black text-base font-bold">郵便番号<span class="text-red-500">*</span></span>
    <span class="flex items-center">
      <input type="number"
             :value="start"
             @input="$emit('update:start', $event.target.value)"
             required
             pattern="\d{3}"
             class="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
             placeholder="例: 000">
      <span class="mx-2">-</span>
      <input type="number"
             :value="end"
             @input="$emit('update:end', $event.target.value)"
             required
             pattern="\d{4}"
             class="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
             placeholder="例: 0000">
    </span>
  </label>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "PostCode",
  props: {
    "start": {
      type: String
    },
    "end": {
      type: String
    },
  },
  emits: ["update:start", "update:end"]
})
</script>