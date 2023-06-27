<template>
  <label class="inline-flex items-center mx-2">
    <input type="checkbox"
           :required="required"
           :checked="modelValue"
           @input="$emit('update:modelValue', $event.target.checked)"
           class="m-2 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50">
    <span class="text-base">{{ label }}<span v-if="required" class="text-red-500">*</span> </span>
  </label>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "CheckBox",
  props: {
    label: {
      required: true,
      type: String
    },
    required: Boolean,
    "modelValue": {
      type: Boolean
    }
  },
  emits: ["update:modelValue"]
})
</script>

<style scoped>

</style>