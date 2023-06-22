<template>
  <div class="block m-4">
    <span class="text-black text-base font-bold">{{ label }}</span>
    <div class="flex">
      <div class="flex items-center m-2 ml-0" v-for="option in options" >
        <input type="radio"
               class="form-radio mr-2"
               :name="label"
               :id="option.id"
               :value="option.id"
               @input="$emit('update:modelValue', $event.target.value)"
        >
        <label :for="option.id">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export declare type RadioOption = {
  label: string
  id: string
}

export default defineComponent({
  name: "PostCode",
  props: {
    "label": {
      type: String
    },
    "options": {
      type: Array<RadioOption>
    },
    "modelValue": {
      type: String
    },
  },
  emits: ["update:modelValue"]
})
</script>