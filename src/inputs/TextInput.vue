<script setup>
</script>
<template>
  <label class="block m-4">
    <span class="text-black text-base font-bold">{{ label }}</span>
    <input type="text"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           required
           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
           :placeholder="placeholder">
  </label>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "TextInput",
  props: {
    label: {
      required: true,
      type: String
    },
    placeholder: {
      type: String
    },
    "modelValue": {
      type: String
    }
  },
  emits: ["update:modelValue"]
})
</script>

<style scoped>

</style>