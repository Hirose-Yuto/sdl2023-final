<template>
  <div class="container mx-auto py-10 max-w-lg">
    <thanks v-if="isOrderComplete" :email="inChargeEmail"/>
    <form v-else @submit.prevent="submit">
      <div class="my-12">
        <h2 class="text-4xl font-bold m-2">1. 商品情報</h2>
        <product-section :products="products" :sum-dollar="sumDollar" :reference-price-yen="referencePriceYen"/>
      </div>
      <div class="my-12">
        <h2 class="text-4xl font-bold m-2">2. 配送情報</h2>
        <div class="pl-4">
          <text-input label="氏名(フルネーム)" placeholder="例: 山田太郎" required v-model="fullName"/>
          <text-input label="電話番号" placeholder="例: 000-0000-0000" required v-model="phone"/>
          <post-code v-model:start="postCodeStart" v-model:end="postCodeEnd"/>
          <text-input label="住所" placeholder="例: 〇〇県〇〇市〇〇町1-2-3" required v-model="address"/>
          <check-box label="配送情報を記録する" v-model="saveDeliver"/>
          <text-area label="備考" v-model="deliverAppendix"/>
        </div>
      </div>
      <div class="my-12">
        <h2 class="text-4xl font-bold m-2">3. 団体情報</h2>
        <div class="pl-4">
          <radio label="団体としての購入ですか？" required v-model="isRobotTeam"
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
      <div class="my-12">
        <h2 class="text-4xl font-bold m-2">4. 注文情報</h2>
        <div class="pl-4">
          <text-input label="注文担当者名" required placeholder="例: 山田太郎" v-model="personInCharge"/>
          <text-input label="注文担当者メールアドレス" required placeholder="例: ~~~@~~~.com" v-model="inChargeEmail"
                      type="email"/>
          <radio label="注文種別" required vertical v-model="orderType"
                 :options='OrderTypes'/>
          <text-input label="その他見積もり等送付先" placeholder="" v-model="otherContact"/>
          <text-area label="備考" v-model="orderAppendix"/>
        </div>
      </div>
      <submit-button :sum-dollar="sumDollar" :reference-price-yen="referencePriceYen"
                     :estimated-shipping-fee-yen="estimatedShippingFeeYen"/>
    </form>
  </div>
</template>

<script lang="ts">
import TextInput from "./components/inputs/TextInput.vue";
import CheckBox from "./components/inputs/CheckBox.vue";
import PostCode from "./components/inputs/PostCode.vue";
import Radio from "./components/inputs/Radio.vue";
import TextArea from "./components/inputs/TextArea.vue";
import ProductSection from "./components/product/ProductSection.vue";
import CustomSelect from "./components/inputs/Select.vue";
import SubmitButton from "./components/SubmitButton.vue"
import {YesNoOptions} from './external/formOptions/YesNoOptions'
import {PurposesAsGroup} from "./external/formOptions/PurposesAsGroup.js";
import {OrderTypes} from "./external/formOptions/OrderTypes.js";
import {Product, Products} from "./types/products";
import {apiRequest} from "./external/formOptions/apiRequest";
import {defineComponent} from "vue";
import {calculateShippingFee, DomesticShippingFee, getUSDRateByAPI, OrderAPIURL} from "./external/constants";
import Thanks from "./pages/Thanks.vue";

export default defineComponent({
  components: {
    PostCode,
    Radio,
    TextInput,
    CheckBox,
    TextArea,
    ProductSection,
    CustomSelect,
    SubmitButton,
    Thanks
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

      personInCharge: "",
      inChargeEmail: "",
      orderType: "",
      otherContact: "",
      orderAppendix: "",

      YesNoOptions,
      PurposesAsGroup,
      OrderTypes,

      products: [] as Products,
      sumDollar: 0,
      rate: 0,

      isOrderComplete: false,
    }
  },
  async mounted() {
    await this.updateProduct()
    await this.getUSDRate()
  },
  computed: {
    referencePriceYen: function () {
      return Math.round(this.rate * this.sumDollar).toLocaleString()
    },
    estimatedShippingFeeYen: function () {
      return Math.round(this.rate * calculateShippingFee(this.sumDollar) + DomesticShippingFee).toLocaleString()
    },
  },
  methods: {
    async updateProduct() {
      const products = (await chrome.storage.sync.get(["products"]))["products"] as Products
      this.products = products
      this.sumDollar = products.reduce((ac: number, p: Product) => {
        ac += parseInt(p.total_price.trim().slice(1))
        return ac
      }, 0)
    },
    async getUSDRate() {
      this.rate = await getUSDRateByAPI()
    },
    async updateReferencePrice(sum: number) {
      this.referencePriceYen = Math.round(this.rate * sum).toLocaleString()
    },
    async submit() {
      // ToDo: 保存処理
      const response = await fetch(OrderAPIURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: this.fullName,
          phone: this.phone,
          postCodeStart: this.postCodeStart,
          postCodeEnd: this.postCodeEnd,
          address: this.address,
          saveDeliver: this.saveDeliver,
          deliverAppendix: this.deliverAppendix,

          isRobotTeam: this.isRobotTeam,
          purposeAsPerson: this.purposeAsPerson,
          purposeAsGroup: this.purposeAsGroup,
          teamNumber: this.teamNumber,
          teamName: this.teamName,
          saveGroup: this.saveGroup,
          groupAppendix: this.groupAppendix,

          personInCharge: this.personInCharge,
          inChargeEmail: this.inChargeEmail,
          orderType: this.orderType,
          otherContact: this.otherContact,
          orderAppendix: this.orderAppendix,

          products: this.products,
          sumDollar: this.sumDollar,
          rate: this.rate,

          referencePriceYen: this.referencePriceYen,
          estimatedShippingFeeYen: this.estimatedShippingFeeYen,
        } as apiRequest)
      })
      if (response.ok) {
        this.isOrderComplete = true
      }
      console.log(response)
      // ToDo: responseによって切り替え
    }
  }
})
</script>
