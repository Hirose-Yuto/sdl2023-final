<template>
  <div class="block m-4">
    <span class="text-black text-base font-bold">{{ label }}<span v-if="required" class="text-red-500">*</span></span>
    <select :required="required"
            class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
      <option value="">選択してください</option>
      <option v-for="option in options" :value="option.id">{{ option.label }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {SelectOption} from "../../external/formOptions/types";

export default defineComponent({
  name: "PostCode",
  props: {
    "label": {
      type: String
    },
    required: Boolean,
    "options": {
      type: Array<SelectOption>
    },
    "modelValue": {
      type: String
    },
  },
  emits: ["update:modelValue"]
})
</script>