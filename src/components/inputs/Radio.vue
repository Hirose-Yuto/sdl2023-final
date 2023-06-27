<template>
  <div class="block m-4">
    <span class="text-black text-base font-bold">{{ label }}<span v-if="required" class="text-red-500">*</span></span>
    <div :class="{'flex': !vertical}">
      <div class="flex items-center m-2 ml-0" v-for="option in options">
        <input type="radio"
               class="form-radio mr-2 "
               :required="required"
               :name="label"
               :id="option.id"
               :value="option.id"
               :checked="option.id === modelValue"
               @input="$emit('update:modelValue', $event.target.value)"
        >
        <label :for="option.id">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {RadioOption} from "../../external/formOptions/types";

export default defineComponent({
  name: "PostCode",
  props: {
    "label": {
      type: String
    },
    required: Boolean,
    vertical: Boolean,
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