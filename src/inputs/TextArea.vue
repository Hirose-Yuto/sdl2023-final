<template>
  <label class="block m-4">
    <span class="text-black text-base font-bold">{{ label }}</span>
    <textarea type="text"
              name="deliver-appendix"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
              class="mt-1 block w-full rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
              rows="4"
              :placeholder="placeholder"></textarea>
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
    },
  },
  emits: ["update:modelValue"]
})
</script>

<style scoped>

</style>