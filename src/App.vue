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
          <check-box label="注文情報を記録する" v-model="saveOrder"/>
          <text-area label="備考" v-model="orderAppendix"/>
        </div>
      </div>
      <submit-button :sum-dollar="sumDollar" :reference-price-yen="referencePriceYen"
                     :estimated-shipping-fee-yen="estimatedShippingFeeYen"/>
      <modal :message="errorMessage" v-show="isShowErrorModal" @close-modal="closeErrorModal"/>
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
import {chromeProductType, chromeProductsType} from "./external/chromeExtension/types";
import {apiRequest} from "./external/formOptions/apiRequest";
import {defineComponent} from "vue";
import {calculateShippingFee, DomesticShippingFee, getUSDRateByAPI, OrderAPIURL} from "./external/constants";
import Thanks from "./pages/Thanks.vue";
import Modal from "./components/ErrorModal.vue";
import {
  getChromeDeliver,
  getChromeGroup,
  getChromeOrder,
  getChromeProducts
} from "./external/chromeExtension/getChromeData";
import {
  clearChromeDeliver, clearChromeGroup, clearChromeOrder,
  clearChromeProduct,
  saveChromeDeliver,
  saveChromeGroup,
  saveChromeOrder
} from "./external/chromeExtension/saveChromeData";

export default defineComponent({
  components: {
    Modal,
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
      saveOrder: false,
      orderAppendix: "",

      YesNoOptions,
      PurposesAsGroup,
      OrderTypes,

      products: [] as chromeProductsType,
      sumDollar: 0,
      rate: 0,

      isOrderComplete: false,
      isShowErrorModal: false,
      errorMessage: "",
    }
  },
  mounted() {
    this.loadProduct().then()
    this.loadDeliver().then()
    this.loadGroup().then()
    this.loadOrder().then()
    this.getUSDRate().then()

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
    async submit() {
      if (this.saveDeliver) {
        saveChromeDeliver({
          fullName: this.fullName,
          phone: this.phone,
          postCodeStart: this.postCodeStart,
          postCodeEnd: this.postCodeEnd,
          address: this.address,
          saveDeliver: this.saveDeliver,
          deliverAppendix: this.deliverAppendix,
        }).then(() => {
          console.log("deliver information successfully saved!")
        })
      } else {
        clearChromeDeliver().then()
      }

      if (this.saveGroup) {
        saveChromeGroup({
          isRobotTeam: this.isRobotTeam,
          purposeAsPerson: this.purposeAsPerson,
          purposeAsGroup: this.purposeAsGroup,
          teamNumber: this.teamNumber,
          teamName: this.teamName,
          saveGroup: this.saveGroup,
          groupAppendix: this.groupAppendix,
        }).then(() => {
          console.log("group information successfully saved!")
        })
      } else {
        clearChromeGroup().then()
      }

      if (this.saveOrder) {
        saveChromeOrder({
          personInCharge: this.personInCharge,
          inChargeEmail: this.inChargeEmail,
          orderType: this.orderType,
          otherContact: this.otherContact,
          saveOrder: this.saveOrder,
          orderAppendix: this.orderAppendix,
        }).then(() => {
          console.log("order information successfully saved!")
        })
      } else {
        clearChromeOrder().then()
      }

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
          saveOrder: this.saveOrder,
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
        await clearChromeProduct()
      } else {
        let errorRes = await response.json()
        this.errorMessage = errorRes['message']
        this.showErrorModal()
      }
    },
    showErrorModal: function () {
      this.isShowErrorModal = true
    },
    closeErrorModal: function () {
      this.isShowErrorModal = false
    },

    async loadProduct() {
      const products = await getChromeProducts()
      if (!products) return
      this.products = products
      this.sumDollar = products.reduce((ac: number, p: chromeProductType) => {
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

    async loadDeliver() {
      const deliver = await getChromeDeliver()
      if (!deliver) return
      this.fullName = deliver.fullName
      this.phone = deliver.phone
      this.postCodeStart = deliver.postCodeStart
      this.postCodeEnd = deliver.postCodeEnd
      this.address = deliver.address
      this.saveDeliver = Boolean(deliver.saveDeliver)
      this.deliverAppendix = deliver.deliverAppendix
    },
    async loadGroup() {
      const group = await getChromeGroup()
      if (!group) return
      this.isRobotTeam = group.isRobotTeam
      this.purposeAsPerson = group.purposeAsPerson
      this.purposeAsGroup = group.purposeAsGroup
      this.teamNumber = group.teamNumber
      this.teamName = group.teamName
      this.saveGroup = Boolean(group.saveGroup)
      this.groupAppendix = group.groupAppendix
    },
    async loadOrder() {
      const order = await getChromeOrder()
      if (!order) return
      this.personInCharge = order.personInCharge
      this.inChargeEmail = order.inChargeEmail
      this.orderType = order.orderType
      this.otherContact = order.otherContact
      this.saveOrder = Boolean(order.saveOrder)
      this.orderAppendix = order.orderAppendix
    }
  }
})
</script>
