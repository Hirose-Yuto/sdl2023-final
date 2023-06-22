(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Vue));
})(this, (function (vue) { 'use strict';

  var script$8 = vue.defineComponent({
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
  });

  const _hoisted_1$8 = { class: "block m-4" };
  const _hoisted_2$8 = { class: "text-black text-base font-bold" };
  const _hoisted_3$8 = ["value", "placeholder"];

  function render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$8, [
      vue.createElementVNode("span", _hoisted_2$8, vue.toDisplayString(_ctx.label), 1 /* TEXT */),
      vue.createElementVNode("input", {
        type: "text",
        value: _ctx.modelValue,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
        required: "",
        class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
        placeholder: _ctx.placeholder
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$8)
    ]))
  }

  script$8.render = render$8;
  script$8.__file = "src/inputs/TextInput.vue";

  var script$7 = vue.defineComponent({
      name: "TextInput",
      props: {
          label: {
              required: true,
              type: String
          },
          "modelValue": {
              type: Boolean
          }
      },
      emits: ["update:modelValue"]
  });

  const _hoisted_1$7 = { class: "inline-flex items-center mx-2" };
  const _hoisted_2$7 = ["value"];
  const _hoisted_3$7 = { class: "text-base" };

  function render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$7, [
      vue.createElementVNode("input", {
        type: "checkbox",
        value: _ctx.modelValue,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
        class: "m-2 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$7),
      vue.createElementVNode("span", _hoisted_3$7, vue.toDisplayString(_ctx.label), 1 /* TEXT */)
    ]))
  }

  script$7.render = render$7;
  script$7.__file = "src/inputs/CheckBox.vue";

  var script$6 = vue.defineComponent({
      name: "PostCode",
      props: {
          "start": {
              type: String
          },
          "end": {
              type: String
          },
      },
      emits: ["update:start", "update:end"]
  });

  const _hoisted_1$6 = { class: "block m-4" };
  const _hoisted_2$6 = /*#__PURE__*/vue.createElementVNode("span", { class: "text-black text-base font-bold" }, "郵便番号", -1 /* HOISTED */);
  const _hoisted_3$6 = { class: "flex items-center" };
  const _hoisted_4$5 = ["value"];
  const _hoisted_5$5 = /*#__PURE__*/vue.createElementVNode("span", { class: "mx-2" }, "-", -1 /* HOISTED */);
  const _hoisted_6$4 = ["value"];

  function render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$6, [
      _hoisted_2$6,
      vue.createElementVNode("span", _hoisted_3$6, [
        vue.createElementVNode("input", {
          type: "number",
          value: _ctx.start,
          onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:start', $event.target.value))),
          required: "",
          pattern: "\\d{3}",
          class: "mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
          placeholder: "例: 000"
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_4$5),
        _hoisted_5$5,
        vue.createElementVNode("input", {
          type: "number",
          value: _ctx.start,
          onInput: _cache[1] || (_cache[1] = $event => (_ctx.$emit('update:end', $event.target.value))),
          required: "",
          pattern: "\\d{4}",
          class: "mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
          placeholder: "例: 0000"
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_6$4)
      ])
    ]))
  }

  script$6.render = render$6;
  script$6.__file = "src/inputs/PostCode.vue";

  var script$5 = vue.defineComponent({
      name: "PostCode",
      props: {
          "label": {
              type: String
          },
          "options": {
              type: (Array)
          },
          "modelValue": {
              type: String
          },
      },
      emits: ["update:modelValue"]
  });

  const _hoisted_1$5 = { class: "block m-4" };
  const _hoisted_2$5 = { class: "text-black text-base font-bold" };
  const _hoisted_3$5 = { class: "flex" };
  const _hoisted_4$4 = { class: "flex items-center m-2 ml-0" };
  const _hoisted_5$4 = ["name", "id", "value"];
  const _hoisted_6$3 = ["for"];

  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
      vue.createElementVNode("span", _hoisted_2$5, vue.toDisplayString(_ctx.label), 1 /* TEXT */),
      vue.createElementVNode("div", _hoisted_3$5, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.options, (option) => {
          return (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$4, [
            vue.createElementVNode("input", {
              type: "radio",
              class: "form-radio mr-2",
              required: "",
              name: _ctx.label,
              id: option.id,
              value: option.id,
              onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value)))
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5$4),
            vue.createElementVNode("label", {
              for: option.id
            }, vue.toDisplayString(option.label), 9 /* TEXT, PROPS */, _hoisted_6$3)
          ]))
        }), 256 /* UNKEYED_FRAGMENT */))
      ])
    ]))
  }

  script$5.render = render$5;
  script$5.__file = "src/inputs/Radio.vue";

  var script$4 = vue.defineComponent({
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
  });

  const _hoisted_1$4 = { class: "block m-4" };
  const _hoisted_2$4 = { class: "text-black text-base font-bold" };
  const _hoisted_3$4 = ["value", "placeholder"];

  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$4, [
      vue.createElementVNode("span", _hoisted_2$4, vue.toDisplayString(_ctx.label), 1 /* TEXT */),
      vue.createElementVNode("textarea", {
        type: "text",
        name: "deliver-appendix",
        value: _ctx.modelValue,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
        class: "mt-1 block w-full rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50",
        rows: "4",
        placeholder: _ctx.placeholder
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$4)
    ]))
  }

  script$4.render = render$4;
  script$4.__file = "src/inputs/TextArea.vue";

  var script$3 = vue.defineComponent({
      name: "ProductCard",
      props: {
          product: {
              required: true,
              type: Object
          }
      }
  });

  const _hoisted_1$3 = { class: "shadow-md my-4 border min-w-full sm:w-md sm:min-w-0" };
  const _hoisted_2$3 = { class: "p-4 pb-2" };
  const _hoisted_3$3 = { class: "font-bold text-base" };
  const _hoisted_4$3 = { class: "font-light text-base" };
  const _hoisted_5$3 = { class: "text-xl text-pink-600 my-1 mt-2" };
  const _hoisted_6$2 = { class: "grid grid-cols-2 my-1" };
  const _hoisted_7$1 = { class: "text-xl col-start-auto" };
  const _hoisted_8$1 = { class: "text-xl col-end-auto text-end" };

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
      vue.createElementVNode("div", _hoisted_2$3, [
        vue.createElementVNode("div", _hoisted_3$3, vue.toDisplayString(_ctx.product.name), 1 /* TEXT */),
        vue.createElementVNode("div", _hoisted_4$3, vue.toDisplayString(_ctx.product.sku), 1 /* TEXT */),
        vue.createElementVNode("div", _hoisted_5$3, vue.toDisplayString(_ctx.product.price), 1 /* TEXT */),
        vue.createElementVNode("div", _hoisted_6$2, [
          vue.createElementVNode("p", _hoisted_7$1, vue.toDisplayString(_ctx.product.quantity) + "個", 1 /* TEXT */),
          vue.createElementVNode("p", _hoisted_8$1, "合計: " + vue.toDisplayString(_ctx.product.total_price), 1 /* TEXT */)
        ])
      ])
    ]))
  }

  script$3.render = render$3;
  script$3.__file = "src/product/ProductCard.vue";

  var script$2 = vue.defineComponent({
      name: "ProductSection",
      components: { ProductCard: script$3 },
      data() {
          return {
              products: [],
              referencePrice: "0",
              sum: 0,
          };
      },
      mounted() {
          this.updateProduct();
      },
      methods: {
          async updateProduct() {
              const products = (await chrome.storage.sync.get(["products"]))["products"];
              this.products = products;
              this.sum = products.reduce((ac, p) => {
                  ac += parseInt(p.total_price.trim().slice(1));
                  return ac;
              }, 0);
          },
          async updateReferencePrice(sum) {
              const res = await fetch('https://www.gaitameonline.com/rateaj/getrate');
              const response = (await res.json());
              const rate = response.quotes.find((r) => r.currencyPairCode === "USDJPY");
              if (!rate)
                  return;
              this.referencePrice = Math.round(parseFloat(rate.high) * sum).toLocaleString();
          }
      },
      watch: {
          sum: function (newVal, _) {
              this.updateReferencePrice(newVal);
          }
      }
  });

  const _hoisted_1$2 = { class: "ml-auto flex flex-col items-end" };
  const _hoisted_2$2 = { class: "flex justify-end my-2" };
  const _hoisted_3$2 = { class: "border-b border-black w-48 grid grid-cols-2 px-2" };
  const _hoisted_4$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-start-auto text-2xl font-bold" }, "総額", -1 /* HOISTED */);
  const _hoisted_5$2 = { class: "col-end-auto text-end text-2xl font-bold" };
  const _hoisted_6$1 = { class: "text-end text-base text-gray-500 m-1" };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_product_card = vue.resolveComponent("product-card");

    return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("div", _hoisted_1$2, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.products, (product) => {
          return (vue.openBlock(), vue.createBlock(_component_product_card, { product: product }, null, 8 /* PROPS */, ["product"]))
        }), 256 /* UNKEYED_FRAGMENT */))
      ]),
      vue.createElementVNode("div", _hoisted_2$2, [
        vue.createElementVNode("div", null, [
          vue.createElementVNode("div", _hoisted_3$2, [
            _hoisted_4$2,
            vue.createElementVNode("div", _hoisted_5$2, "$" + vue.toDisplayString(_ctx.sum), 1 /* TEXT */)
          ]),
          vue.createElementVNode("div", _hoisted_6$1, " 参考価格:" + vue.toDisplayString(_ctx.referencePrice) + " 円 ", 1 /* TEXT */)
        ])
      ])
    ], 64 /* STABLE_FRAGMENT */))
  }

  script$2.render = render$2;
  script$2.__file = "src/product/ProductSection.vue";

  var script$1 = vue.defineComponent({
      name: "PostCode",
      props: {
          "label": {
              type: String
          },
          "options": {
              type: (Array)
          },
          "modelValue": {
              type: String
          },
      },
      emits: ["update:modelValue"]
  });

  const _hoisted_1$1 = { class: "block m-4" };
  const _hoisted_2$1 = { class: "text-black text-base font-bold" };
  const _hoisted_3$1 = {
    required: "",
    class: "block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  };
  const _hoisted_4$1 = /*#__PURE__*/vue.createElementVNode("option", { value: "" }, "選択してください", -1 /* HOISTED */);
  const _hoisted_5$1 = ["value"];

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
      vue.createElementVNode("span", _hoisted_2$1, vue.toDisplayString(_ctx.label), 1 /* TEXT */),
      vue.createElementVNode("select", _hoisted_3$1, [
        _hoisted_4$1,
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.options, (option) => {
          return (vue.openBlock(), vue.createElementBlock("option", {
            value: option.id
          }, vue.toDisplayString(option.label), 9 /* TEXT, PROPS */, _hoisted_5$1))
        }), 256 /* UNKEYED_FRAGMENT */))
      ])
    ]))
  }

  script$1.render = render$1;
  script$1.__file = "src/inputs/Select.vue";

  const YesNoOptions = [
      { label: "はい", id: "yes" },
      { label: "いいえ", id: "no" }
  ];

  const PurposesAsGroup = [
      { label: "FRC", id: "frc" },
      { label: "FTC", id: "ftc" },
      { label: "VEX", id: "vex" },
      { label: "高専ロボコン", id: "kosen" },
      { label: "学生ロボコン", id: "gakusei" },
      { label: "会社の業務", id: "company" },
      { label: "その他", id: "other" },
  ];

  var script = {
    components: {
      PostCode: script$6,
      Radio: script$5,
      TextInput: script$8,
      CheckBox: script$7,
      TextArea: script$4,
      ProductSection: script$2,
      CustomSelect: script$1
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
  };

  const _hoisted_1 = { class: "container mx-auto py-10 max-w-lg" };
  const _hoisted_2 = { class: "my-12" };
  const _hoisted_3 = /*#__PURE__*/vue.createElementVNode("h2", { class: "text-4xl font-bold m-2" }, "1. 商品情報", -1 /* HOISTED */);
  const _hoisted_4 = { class: "my-12" };
  const _hoisted_5 = /*#__PURE__*/vue.createElementVNode("h2", { class: "text-4xl font-bold m-2" }, "2. 配送情報", -1 /* HOISTED */);
  const _hoisted_6 = { class: "pl-4" };
  const _hoisted_7 = { class: "my-12" };
  const _hoisted_8 = /*#__PURE__*/vue.createElementVNode("h2", { class: "text-4xl font-bold m-2" }, "3. 団体情報", -1 /* HOISTED */);
  const _hoisted_9 = { class: "pl-4" };
  const _hoisted_10 = { key: 0 };
  const _hoisted_11 = { key: 1 };
  const _hoisted_12 = /*#__PURE__*/vue.createElementVNode("button", {
    type: "submit",
    class: ""
  }, "aaaa", -1 /* HOISTED */);

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_product_section = vue.resolveComponent("product-section");
    const _component_text_input = vue.resolveComponent("text-input");
    const _component_post_code = vue.resolveComponent("post-code");
    const _component_check_box = vue.resolveComponent("check-box");
    const _component_text_area = vue.resolveComponent("text-area");
    const _component_radio = vue.resolveComponent("radio");
    const _component_custom_select = vue.resolveComponent("custom-select");

    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
      vue.createElementVNode("form", null, [
        vue.createElementVNode("div", _hoisted_2, [
          _hoisted_3,
          vue.createVNode(_component_product_section)
        ]),
        vue.createElementVNode("div", _hoisted_4, [
          _hoisted_5,
          vue.createElementVNode("div", _hoisted_6, [
            vue.createVNode(_component_text_input, {
              label: "氏名(フルネーム)",
              placeholder: "例: 山田太郎",
              modelValue: $data.fullName,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.fullName) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_text_input, {
              label: "電話番号",
              placeholder: "例: 000-0000-0000",
              modelValue: $data.phone,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($data.phone) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_post_code, {
              start: $data.postCodeStart,
              "onUpdate:start": _cache[2] || (_cache[2] = $event => (($data.postCodeStart) = $event)),
              end: $data.postCodeEnd,
              "onUpdate:end": _cache[3] || (_cache[3] = $event => (($data.postCodeEnd) = $event))
            }, null, 8 /* PROPS */, ["start", "end"]),
            vue.createVNode(_component_text_input, {
              label: "住所",
              placeholder: "例: 〇〇県〇〇市〇〇町1-2-3",
              modelValue: $data.address,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($data.address) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_check_box, {
              label: "配送情報を記録する",
              modelValue: $data.saveDeliver,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($data.saveDeliver) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_text_area, {
              label: "備考",
              modelValue: $data.deliverAppendix,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($data.deliverAppendix) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ])
        ]),
        vue.createElementVNode("div", _hoisted_7, [
          _hoisted_8,
          vue.createElementVNode("div", _hoisted_9, [
            vue.createVNode(_component_radio, {
              label: "団体としての購入ですか？",
              modelValue: $data.isRobotTeam,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($data.isRobotTeam) = $event)),
              options: $data.YesNoOptions
            }, null, 8 /* PROPS */, ["modelValue", "options"]),
            ($data.isRobotTeam === 'yes')
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, [
                  vue.createVNode(_component_custom_select, {
                    label: "利用目的を教えてください",
                    modelValue: $data.purposeAsGroup,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($data.purposeAsGroup) = $event)),
                    options: $data.PurposesAsGroup
                  }, null, 8 /* PROPS */, ["modelValue", "options"]),
                  vue.createVNode(_component_text_input, {
                    label: "チーム番号・ID等",
                    placeholder: "例: 0000",
                    modelValue: $data.teamNumber,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($data.teamNumber) = $event))
                  }, null, 8 /* PROPS */, ["modelValue"]),
                  vue.createVNode(_component_text_input, {
                    label: "チーム名・会社名",
                    placeholder: "例: Redigiform",
                    modelValue: $data.teamName,
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($data.teamName) = $event))
                  }, null, 8 /* PROPS */, ["modelValue"])
                ]))
              : vue.createCommentVNode("v-if", true),
            ($data.isRobotTeam === 'no')
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_11, [
                  vue.createVNode(_component_text_input, {
                    label: "利用目的を教えてください",
                    modelValue: $data.purposeAsPerson,
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => (($data.purposeAsPerson) = $event))
                  }, null, 8 /* PROPS */, ["modelValue"])
                ]))
              : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_check_box, {
              label: "団体情報を記録する",
              modelValue: $data.saveGroup,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => (($data.saveGroup) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_text_area, {
              label: "備考",
              modelValue: $data.groupAppendix,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($data.groupAppendix) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ])
        ]),
        _hoisted_12
      ])
    ]))
  }

  script.render = render;
  script.__file = "src/App.vue";

  vue.createApp(script).mount('#app');

}));
//# sourceMappingURL=index.js.map
