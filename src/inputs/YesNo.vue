<template>
  <div class="block m-4">
    <span class="text-black text-base font-bold">{{ label }}</span>
    <div v-for="option in options">
      <input type="radio"
             :id="option.id"
             :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"
      >
      <label :for="option.id">{{ option.label }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export declare type RadioOption = {
  label: string
  id: boolean
}

export default defineComponent({
  name: "PostCode",
  props: {
    "label": {
      type: String
    },
    "modelValue": {
      type: Boolean
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      options: [
        {
          label: "はい",
          id: true
        },
        {
          label: "いいえ",
          id: true
        }
      ]
    }
  }
})
</script>