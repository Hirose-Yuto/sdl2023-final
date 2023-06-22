<template>
  <div class="container mx-auto py-10 max-w-lg">
    <form>
      <div class="my-12">
        <h2 class="text-4xl font-bold m-2">1. 商品情報</h2>
        <product-section/>
      </div>
      <div class="my-12">
        <h2 class="text-4xl font-bold m-2">2. 配送情報</h2>
        <div class="pl-4">
          <text-input label="氏名(フルネーム)" placeholder="例: 山田太郎" v-model="fullName"/>
          <text-input label="電話番号" placeholder="例: 000-0000-0000" v-model="phone"/>
          <post-code v-model:start="postCodeStart" v-model:end="postCodeEnd"/>
          <text-input label="住所" placeholder="例: 〇〇県〇〇市〇〇町1-2-3" v-model="address"/>
          <check-box label="配送情報を記録する" v-model="saveDeliver"/>
          <text-area label="備考" v-model="deliverAppendix"/>
        </div>
      </div>
      <div class="my-12">
        <h2 class="text-4xl font-bold m-2">3. 団体情報</h2>
        <div class="pl-4">
          <radio label="団体としての購入ですか？" v-model="isRobotTeam"
                 :options='YesNoOptions'/>
          <div v-if="isRobotTeam === 'yes'">
            <custom-select label="利用目的を教えてください" v-model="purposeAsGroup" :options="PurposesAsGroup"/>
            <text-input label="チーム番号・ID等" placeholder="例: 0000" v-model="teamNumber"/>
            <text-input label="チーム名・会社名" placeholder="例: Redigiform" v-model="teamName"/>
          </div>
          <div v-if="isRobotTeam === 'no'">
            <text-input label="利用目的を教えてください" v-model="purposeAsPerson"/>
          </div>
          <check-box label="団体情報を記録する" v-model="saveGroup"/>
          <text-area label="備考" v-model="groupAppendix"/>

        </div>
      </div>
      <button type="submit" class="">aaaa</button>
    </form>
  </div>
</template>

<script>
import TextInput from "./inputs/TextInput.vue";
import CheckBox from "./inputs/CheckBox.vue";
import PostCode from "./inputs/PostCode.vue";
import Radio from "./inputs/Radio.vue";
import TextArea from "./inputs/TextArea.vue";
import ProductSection from "./product/ProductSection.vue";
import CustomSelect from "./inputs/Select.vue";
import {YesNoOptions} from './external/formOptions/YesNoOptions'
import {PurposesAsGroup} from "./external/formOptions/PurposesAsGroup.js";

export default {
  components: {
    PostCode,
    Radio,
    TextInput,
    CheckBox,
    TextArea,
    ProductSection,
    CustomSelect
  },

  data() {
    return {
      fullName: "",
      phone: "",
      postCodeStart: "",
      postCodeEnd: "",
      address: "",
      saveDeliver: false,
      deliverAppendix: "",

      isRobotTeam: "",
      purposeAsPerson: "",
      purposeAsGroup: "",
      teamNumber: "",
      teamName: "",
      saveGroup: false,
      groupAppendix: "",


      YesNoOptions,
      PurposesAsGroup
    }
  },
  methods: {}
}
</script>
