(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Vue));
})(this, (function (vue) { 'use strict';

  var script$9 = vue.defineComponent({
      name: "TextInput",
      props: {
          label: {
              required: true,
              type: String
          },
          required: Boolean,
          type: String,
          placeholder: {
              type: String
          },
          "modelValue": {
              type: String
          }
      },
      emits: ["update:modelValue"]
  });

  const _hoisted_1$9 = { class: "block m-4" };
  const _hoisted_2$9 = { class: "text-black text-base font-bold" };
  const _hoisted_3$9 = {
    key: 0,
    class: "text-red-500"
  };
  const _hoisted_4$9 = ["type", "value", "required", "placeholder"];

  function render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$9, [
      vue.createElementVNode("span", _hoisted_2$9, [
        vue.createTextVNode(vue.toDisplayString(_ctx.label), 1 /* TEXT */),
        (_ctx.required)
          ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$9, "*"))
          : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("input", {
        type: _ctx.type ?? 'text',
        value: _ctx.modelValue,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
        required: _ctx.required,
        class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
        placeholder: _ctx.placeholder
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_4$9)
    ]))
  }

  script$9.render = render$9;
  script$9.__file = "src/components/inputs/TextInput.vue";

  var script$8 = vue.defineComponent({
      name: "TextInput",
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
  });

  const _hoisted_1$8 = { class: "inline-flex items-center mx-2" };
  const _hoisted_2$8 = ["required", "value"];
  const _hoisted_3$8 = { class: "text-base" };
  const _hoisted_4$8 = {
    key: 0,
    class: "text-red-500"
  };

  function render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$8, [
      vue.createElementVNode("input", {
        type: "checkbox",
        required: _ctx.required,
        value: _ctx.modelValue,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
        class: "m-2 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$8),
      vue.createElementVNode("span", _hoisted_3$8, [
        vue.createTextVNode(vue.toDisplayString(_ctx.label), 1 /* TEXT */),
        (_ctx.required)
          ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$8, "*"))
          : vue.createCommentVNode("v-if", true)
      ])
    ]))
  }

  script$8.render = render$8;
  script$8.__file = "src/components/inputs/CheckBox.vue";

  var script$7 = vue.defineComponent({
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

  const _hoisted_1$7 = { class: "block m-4" };
  const _hoisted_2$7 = /*#__PURE__*/vue.createElementVNode("span", { class: "text-black text-base font-bold" }, [
    /*#__PURE__*/vue.createTextVNode("郵便番号"),
    /*#__PURE__*/vue.createElementVNode("span", { class: "text-red-500" }, "*")
  ], -1 /* HOISTED */);
  const _hoisted_3$7 = { class: "flex items-center" };
  const _hoisted_4$7 = ["value"];
  const _hoisted_5$6 = /*#__PURE__*/vue.createElementVNode("span", { class: "mx-2" }, "-", -1 /* HOISTED */);
  const _hoisted_6$6 = ["value"];

  function render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$7, [
      _hoisted_2$7,
      vue.createElementVNode("span", _hoisted_3$7, [
        vue.createElementVNode("input", {
          type: "number",
          value: _ctx.start,
          onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:start', $event.target.value))),
          required: "",
          pattern: "\\d{3}",
          class: "mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
          placeholder: "例: 000"
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_4$7),
        _hoisted_5$6,
        vue.createElementVNode("input", {
          type: "number",
          value: _ctx.end,
          onInput: _cache[1] || (_cache[1] = $event => (_ctx.$emit('update:end', $event.target.value))),
          required: "",
          pattern: "\\d{4}",
          class: "mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
          placeholder: "例: 0000"
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_6$6)
      ])
    ]))
  }

  script$7.render = render$7;
  script$7.__file = "src/components/inputs/PostCode.vue";

  var script$6 = vue.defineComponent({
      name: "PostCode",
      props: {
          "label": {
              type: String
          },
          required: Boolean,
          vertical: Boolean,
          "options": {
              type: (Array)
          },
          "modelValue": {
              type: String
          },
      },
      emits: ["update:modelValue"]
  });

  const _hoisted_1$6 = { class: "block m-4" };
  const _hoisted_2$6 = { class: "text-black text-base font-bold" };
  const _hoisted_3$6 = {
    key: 0,
    class: "text-red-500"
  };
  const _hoisted_4$6 = { class: "flex items-center m-2 ml-0" };
  const _hoisted_5$5 = ["required", "name", "id", "value"];
  const _hoisted_6$5 = ["for"];

  function render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [
      vue.createElementVNode("span", _hoisted_2$6, [
        vue.createTextVNode(vue.toDisplayString(_ctx.label), 1 /* TEXT */),
        (_ctx.required)
          ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$6, "*"))
          : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("div", {
        class: vue.normalizeClass({'flex': !_ctx.vertical})
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.options, (option) => {
          return (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$6, [
            vue.createElementVNode("input", {
              type: "radio",
              class: "form-radio mr-2",
              required: _ctx.required,
              name: _ctx.label,
              id: option.id,
              value: option.id,
              onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value)))
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5$5),
            vue.createElementVNode("label", {
              for: option.id
            }, vue.toDisplayString(option.label), 9 /* TEXT, PROPS */, _hoisted_6$5)
          ]))
        }), 256 /* UNKEYED_FRAGMENT */))
      ], 2 /* CLASS */)
    ]))
  }

  script$6.render = render$6;
  script$6.__file = "src/components/inputs/Radio.vue";

  var script$5 = vue.defineComponent({
      name: "TextInput",
      props: {
          label: {
              required: true,
              type: String
          },
          required: Boolean,
          placeholder: {
              type: String
          },
          "modelValue": {
              type: String
          },
      },
      emits: ["update:modelValue"]
  });

  const _hoisted_1$5 = { class: "block m-4" };
  const _hoisted_2$5 = { class: "text-black text-base font-bold" };
  const _hoisted_3$5 = {
    key: 0,
    class: "text-red-500"
  };
  const _hoisted_4$5 = ["value", "placeholder", "required"];

  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$5, [
      vue.createElementVNode("span", _hoisted_2$5, [
        vue.createTextVNode(vue.toDisplayString(_ctx.label), 1 /* TEXT */),
        (_ctx.required)
          ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$5, "*"))
          : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("textarea", {
        type: "text",
        name: "deliver-appendix",
        value: _ctx.modelValue,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
        class: "mt-1 block w-full rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50",
        rows: "4",
        placeholder: _ctx.placeholder,
        required: _ctx.required
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_4$5)
    ]))
  }

  script$5.render = render$5;
  script$5.__file = "src/components/inputs/TextArea.vue";

  var script$4 = vue.defineComponent({
      name: "ProductCard",
      props: {
          product: {
              required: true,
              type: Object
          }
      }
  });

  const _hoisted_1$4 = { class: "shadow-md my-4 border min-w-full sm:w-md sm:min-w-0" };
  const _hoisted_2$4 = { class: "p-4 pb-2" };
  const _hoisted_3$4 = { class: "font-bold text-base" };
  const _hoisted_4$4 = { class: "font-light text-base" };
  const _hoisted_5$4 = { class: "text-xl text-pink-600 my-1 mt-2" };
  const _hoisted_6$4 = { class: "grid grid-cols-2 my-1" };
  const _hoisted_7$2 = { class: "text-xl col-start-auto" };
  const _hoisted_8$2 = { class: "text-xl col-end-auto text-end" };

  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
      vue.createElementVNode("div", _hoisted_2$4, [
        vue.createElementVNode("div", _hoisted_3$4, vue.toDisplayString(_ctx.product.name), 1 /* TEXT */),
        vue.createElementVNode("div", _hoisted_4$4, vue.toDisplayString(_ctx.product.sku), 1 /* TEXT */),
        vue.createElementVNode("div", _hoisted_5$4, vue.toDisplayString(_ctx.product.price), 1 /* TEXT */),
        vue.createElementVNode("div", _hoisted_6$4, [
          vue.createElementVNode("p", _hoisted_7$2, vue.toDisplayString(_ctx.product.quantity) + "個", 1 /* TEXT */),
          vue.createElementVNode("p", _hoisted_8$2, "合計: " + vue.toDisplayString(_ctx.product.total_price), 1 /* TEXT */)
        ])
      ])
    ]))
  }

  script$4.render = render$4;
  script$4.__file = "src/components/product/ProductCard.vue";

  var script$3 = vue.defineComponent({
      name: "ProductSection",
      components: { ProductCard: script$4 },
      props: {
          products: {
              required: true,
              type: Object
          },
          referencePriceYen: {
              required: true,
              type: String
          },
          sumDollar: {
              required: true,
              type: Number
          },
      },
  });

  const _hoisted_1$3 = { class: "ml-auto flex flex-col items-end" };
  const _hoisted_2$3 = { class: "flex justify-end my-2" };
  const _hoisted_3$3 = { class: "border-b border-black w-48 grid grid-cols-2 px-2" };
  const _hoisted_4$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-start-auto text-2xl font-bold" }, "総額", -1 /* HOISTED */);
  const _hoisted_5$3 = { class: "col-end-auto text-end text-2xl font-bold" };
  const _hoisted_6$3 = { class: "text-end text-base text-gray-500 m-1" };

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_product_card = vue.resolveComponent("product-card");

    return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("div", _hoisted_1$3, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.products, (product) => {
          return (vue.openBlock(), vue.createBlock(_component_product_card, { product: product }, null, 8 /* PROPS */, ["product"]))
        }), 256 /* UNKEYED_FRAGMENT */))
      ]),
      vue.createElementVNode("div", _hoisted_2$3, [
        vue.createElementVNode("div", null, [
          vue.createElementVNode("div", _hoisted_3$3, [
            _hoisted_4$3,
            vue.createElementVNode("div", _hoisted_5$3, "$" + vue.toDisplayString(_ctx.sumDollar), 1 /* TEXT */)
          ]),
          vue.createElementVNode("div", _hoisted_6$3, " 参考価格:" + vue.toDisplayString(_ctx.referencePriceYen) + " 円 ", 1 /* TEXT */)
        ])
      ])
    ], 64 /* STABLE_FRAGMENT */))
  }

  script$3.render = render$3;
  script$3.__file = "src/components/product/ProductSection.vue";

  var script$2 = vue.defineComponent({
      name: "PostCode",
      props: {
          "label": {
              type: String
          },
          required: Boolean,
          "options": {
              type: (Array)
          },
          "modelValue": {
              type: String
          },
      },
      emits: ["update:modelValue"]
  });

  const _hoisted_1$2 = { class: "block m-4" };
  const _hoisted_2$2 = { class: "text-black text-base font-bold" };
  const _hoisted_3$2 = {
    key: 0,
    class: "text-red-500"
  };
  const _hoisted_4$2 = ["required"];
  const _hoisted_5$2 = /*#__PURE__*/vue.createElementVNode("option", { value: "" }, "選択してください", -1 /* HOISTED */);
  const _hoisted_6$2 = ["value"];

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
      vue.createElementVNode("span", _hoisted_2$2, [
        vue.createTextVNode(vue.toDisplayString(_ctx.label), 1 /* TEXT */),
        (_ctx.required)
          ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$2, "*"))
          : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("select", {
        required: _ctx.required,
        class: "block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      }, [
        _hoisted_5$2,
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.options, (option) => {
          return (vue.openBlock(), vue.createElementBlock("option", {
            value: option.id
          }, vue.toDisplayString(option.label), 9 /* TEXT, PROPS */, _hoisted_6$2))
        }), 256 /* UNKEYED_FRAGMENT */))
      ], 8 /* PROPS */, _hoisted_4$2)
    ]))
  }

  script$2.render = render$2;
  script$2.__file = "src/components/inputs/Select.vue";

  var script$1 = vue.defineComponent({
      name: "SubmitButton",
      props: {
          sumDollar: {
              required: true,
              type: Number,
          },
          referencePriceYen: {
              required: true,
              type: String,
          },
          estimatedShippingFeeYen: {
              required: true,
              type: String
          },
      }
  });

  const _hoisted_1$1 = { class: "shadow-md rounded-sm p-3 border grid grid-cols-2 gap-4 min-w-full sm:w-2xl sm:min-w-0" };
  const _hoisted_2$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "text-gray-700" }, [
    /*#__PURE__*/vue.createTextVNode(" 「注文を確定」ボタンを押してご注文いただくことで、 お客様はRedigiformの "),
    /*#__PURE__*/vue.createElementVNode("a", {
      href: "https://www.redigiform.com/terms-of-service/",
      class: "text-blue-600 hover:underline"
    }, " 各種規約 "),
    /*#__PURE__*/vue.createTextVNode("、 "),
    /*#__PURE__*/vue.createElementVNode("a", {
      href: "https://www.redigiform.com/privacy/",
      class: "text-blue-600 hover:underline"
    }, " プライバシー規約 "),
    /*#__PURE__*/vue.createTextVNode(" および当サイト上の販売条件に同意の上、商品をご注文されたことになります。 価格については必ず当サイト及び利用規約をご確認ください。 ")
  ], -1 /* HOISTED */);
  const _hoisted_3$1 = { class: "pl-5 pr-3" };
  const _hoisted_4$1 = /*#__PURE__*/vue.createElementVNode("button", {
    type: "submit",
    class: "rounded-xl text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-100 font-medium text-sm px-5 py-1.5 text-center w-full"
  }, " 注文を確定 ", -1 /* HOISTED */);
  const _hoisted_5$1 = { class: "mt-1" };
  const _hoisted_6$1 = { class: "text-lg text-pink-600 my-1 mt-2" };
  const _hoisted_7$1 = /*#__PURE__*/vue.createElementVNode("span", { class: "text-gray-400" }, " + 配送料・手数料 + 税 ", -1 /* HOISTED */);
  const _hoisted_8$1 = { class: "mt-1" };
  const _hoisted_9$1 = { class: "text-gray-400 text-base" };
  const _hoisted_10$1 = { class: "text-gray-400" };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
      _hoisted_2$1,
      vue.createElementVNode("div", _hoisted_3$1, [
        _hoisted_4$1,
        vue.createElementVNode("div", _hoisted_5$1, [
          vue.createElementVNode("span", _hoisted_6$1, " ご請求額: $" + vue.toDisplayString(_ctx.sumDollar), 1 /* TEXT */),
          _hoisted_7$1
        ]),
        vue.createElementVNode("div", _hoisted_8$1, [
          vue.createElementVNode("span", _hoisted_9$1, " 参考価格: " + vue.toDisplayString(_ctx.referencePriceYen) + "円 ", 1 /* TEXT */),
          vue.createElementVNode("span", _hoisted_10$1, " + " + vue.toDisplayString(_ctx.estimatedShippingFeeYen) + "円 + 税 ", 1 /* TEXT */)
        ])
      ])
    ]))
  }

  script$1.render = render$1;
  script$1.__file = "src/components/SubmitButton.vue";

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
      { label: "無回答", id: "no_answer" },
      { label: "その他", id: "other" },
  ];

  const OrderTypes = [
      { label: "数日遅くても構わないので、他の注文をまとめて送料を節約する", id: "unitee" },
      { label: "最短日時での納品を希望する", id: "asap" },
  ];

  var script = vue.defineComponent({
      components: {
          PostCode: script$7,
          Radio: script$6,
          TextInput: script$9,
          CheckBox: script$8,
          TextArea: script$5,
          ProductSection: script$3,
          CustomSelect: script$2,
          SubmitButton: script$1
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
              products: [],
              sumDollar: 0,
              rate: 0,
          };
      },
      async mounted() {
          await this.updateProduct();
          await this.getUSDRate();
      },
      computed: {
          referencePriceYen: function () {
              return Math.round(this.rate * this.sumDollar).toLocaleString();
          },
          estimatedShippingFeeYen: function () {
              return Math.round(this.rate * this.calculateShippingFee(this.sumDollar) + 1500).toLocaleString();
          },
      },
      methods: {
          async updateProduct() {
              const products = (await chrome.storage.sync.get(["products"]))["products"];
              this.products = products;
              this.sumDollar = products.reduce((ac, p) => {
                  ac += parseInt(p.total_price.trim().slice(1));
                  return ac;
              }, 0);
          },
          async getUSDRate() {
              const res = await fetch('https://www.gaitameonline.com/rateaj/getrate');
              const response = (await res.json());
              this.rate = parseFloat(response.quotes.find((r) => r.currencyPairCode === "USDJPY")?.high ?? "0");
          },
          async updateReferencePrice(sum) {
              this.referencePriceYen = Math.round(this.rate * sum).toLocaleString();
          },
          calculateShippingFee(sum) {
              if (sum <= 300)
                  return 90;
              if (sum >= 800)
                  return 275;
              return 0.37 * sum - 21;
          }
      }
  });

  const _hoisted_1 = { class: "container mx-auto py-10 max-w-lg" };
  const _hoisted_2 = { onsubmit: "" };
  const _hoisted_3 = { class: "my-12" };
  const _hoisted_4 = /*#__PURE__*/vue.createElementVNode("h2", { class: "text-4xl font-bold m-2" }, "1. 商品情報", -1 /* HOISTED */);
  const _hoisted_5 = { class: "my-12" };
  const _hoisted_6 = /*#__PURE__*/vue.createElementVNode("h2", { class: "text-4xl font-bold m-2" }, "2. 配送情報", -1 /* HOISTED */);
  const _hoisted_7 = { class: "pl-4" };
  const _hoisted_8 = { class: "my-12" };
  const _hoisted_9 = /*#__PURE__*/vue.createElementVNode("h2", { class: "text-4xl font-bold m-2" }, "3. 団体情報", -1 /* HOISTED */);
  const _hoisted_10 = { class: "pl-4" };
  const _hoisted_11 = { key: 0 };
  const _hoisted_12 = { key: 1 };
  const _hoisted_13 = { class: "my-12" };
  const _hoisted_14 = /*#__PURE__*/vue.createElementVNode("h2", { class: "text-4xl font-bold m-2" }, "4. 注文情報", -1 /* HOISTED */);
  const _hoisted_15 = { class: "pl-4" };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_product_section = vue.resolveComponent("product-section");
    const _component_text_input = vue.resolveComponent("text-input");
    const _component_post_code = vue.resolveComponent("post-code");
    const _component_check_box = vue.resolveComponent("check-box");
    const _component_text_area = vue.resolveComponent("text-area");
    const _component_radio = vue.resolveComponent("radio");
    const _component_custom_select = vue.resolveComponent("custom-select");
    const _component_submit_button = vue.resolveComponent("submit-button");

    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
      vue.createElementVNode("form", _hoisted_2, [
        vue.createElementVNode("div", _hoisted_3, [
          _hoisted_4,
          vue.createVNode(_component_product_section, {
            products: _ctx.products,
            "sum-dollar": _ctx.sumDollar,
            "reference-price-yen": _ctx.referencePriceYen
          }, null, 8 /* PROPS */, ["products", "sum-dollar", "reference-price-yen"])
        ]),
        vue.createElementVNode("div", _hoisted_5, [
          _hoisted_6,
          vue.createElementVNode("div", _hoisted_7, [
            vue.createVNode(_component_text_input, {
              label: "氏名(フルネーム)",
              placeholder: "例: 山田太郎",
              required: "",
              modelValue: _ctx.fullName,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.fullName) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_text_input, {
              label: "電話番号",
              placeholder: "例: 000-0000-0000",
              required: "",
              modelValue: _ctx.phone,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.phone) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_post_code, {
              start: _ctx.postCodeStart,
              "onUpdate:start": _cache[2] || (_cache[2] = $event => ((_ctx.postCodeStart) = $event)),
              end: _ctx.postCodeEnd,
              "onUpdate:end": _cache[3] || (_cache[3] = $event => ((_ctx.postCodeEnd) = $event))
            }, null, 8 /* PROPS */, ["start", "end"]),
            vue.createVNode(_component_text_input, {
              label: "住所",
              placeholder: "例: 〇〇県〇〇市〇〇町1-2-3",
              required: "",
              modelValue: _ctx.address,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((_ctx.address) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_check_box, {
              label: "配送情報を記録する",
              modelValue: _ctx.saveDeliver,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((_ctx.saveDeliver) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_text_area, {
              label: "備考",
              modelValue: _ctx.deliverAppendix,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((_ctx.deliverAppendix) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ])
        ]),
        vue.createElementVNode("div", _hoisted_8, [
          _hoisted_9,
          vue.createElementVNode("div", _hoisted_10, [
            vue.createVNode(_component_radio, {
              label: "団体としての購入ですか？",
              required: "",
              modelValue: _ctx.isRobotTeam,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((_ctx.isRobotTeam) = $event)),
              options: _ctx.YesNoOptions
            }, null, 8 /* PROPS */, ["modelValue", "options"]),
            (_ctx.isRobotTeam === 'yes')
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_11, [
                  vue.createVNode(_component_custom_select, {
                    label: "利用目的を教えてください",
                    modelValue: _ctx.purposeAsGroup,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => ((_ctx.purposeAsGroup) = $event)),
                    options: _ctx.PurposesAsGroup
                  }, null, 8 /* PROPS */, ["modelValue", "options"]),
                  vue.createVNode(_component_text_input, {
                    label: "チーム番号・ID等",
                    placeholder: "例: 0000",
                    modelValue: _ctx.teamNumber,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => ((_ctx.teamNumber) = $event))
                  }, null, 8 /* PROPS */, ["modelValue"]),
                  vue.createVNode(_component_text_input, {
                    label: "チーム名・会社名",
                    placeholder: "例: Redigiform",
                    modelValue: _ctx.teamName,
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => ((_ctx.teamName) = $event))
                  }, null, 8 /* PROPS */, ["modelValue"])
                ]))
              : vue.createCommentVNode("v-if", true),
            (_ctx.isRobotTeam === 'no')
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_12, [
                  vue.createVNode(_component_text_input, {
                    label: "利用目的を教えてください",
                    modelValue: _ctx.purposeAsPerson,
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => ((_ctx.purposeAsPerson) = $event))
                  }, null, 8 /* PROPS */, ["modelValue"])
                ]))
              : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_check_box, {
              label: "団体情報を記録する",
              modelValue: _ctx.saveGroup,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => ((_ctx.saveGroup) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_text_area, {
              label: "備考",
              modelValue: _ctx.groupAppendix,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => ((_ctx.groupAppendix) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ])
        ]),
        vue.createElementVNode("div", _hoisted_13, [
          _hoisted_14,
          vue.createElementVNode("div", _hoisted_15, [
            vue.createVNode(_component_text_input, {
              label: "注文担当者名",
              required: "",
              placeholder: "例: 山田太郎",
              modelValue: _ctx.personInCharge,
              "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => ((_ctx.personInCharge) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_text_input, {
              label: "注文担当者メールアドレス",
              required: "",
              placeholder: "例: ~~~@~~~.com",
              modelValue: _ctx.inChargeEmail,
              "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => ((_ctx.inChargeEmail) = $event)),
              type: "email"
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_radio, {
              label: "注文種別",
              required: "",
              vertical: "",
              modelValue: _ctx.orderType,
              "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => ((_ctx.orderType) = $event)),
              options: _ctx.OrderTypes
            }, null, 8 /* PROPS */, ["modelValue", "options"]),
            vue.createVNode(_component_text_input, {
              label: "その他見積もり等送付先",
              placeholder: "",
              modelValue: _ctx.otherContact,
              "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => ((_ctx.otherContact) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_text_area, {
              label: "備考",
              modelValue: _ctx.orderAppendix,
              "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => ((_ctx.orderAppendix) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ])
        ]),
        vue.createVNode(_component_submit_button, {
          "sum-dollar": _ctx.sumDollar,
          "reference-price-yen": _ctx.referencePriceYen,
          "estimated-shipping-fee-yen": _ctx.estimatedShippingFeeYen
        }, null, 8 /* PROPS */, ["sum-dollar", "reference-price-yen", "estimated-shipping-fee-yen"])
      ])
    ]))
  }

  script.render = render;
  script.__file = "src/App.vue";

  vue.createApp(script).mount('#app');

}));
//# sourceMappingURL=index.js.map
