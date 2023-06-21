(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Vue));
})(this, (function (vue) { 'use strict';

  var script$4 = {
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
  };

  const _hoisted_1$4 = { class: "block m-4" };
  const _hoisted_2$4 = { class: "text-black text-base font-bold" };
  const _hoisted_3$4 = ["value", "placeholder"];

  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$4, [
      vue.createElementVNode("span", _hoisted_2$4, vue.toDisplayString($props.label), 1 /* TEXT */),
      vue.createElementVNode("input", {
        type: "text",
        value: $props.modelValue,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
        required: "",
        class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
        placeholder: $props.placeholder
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$4)
    ]))
  }

  script$4.render = render$4;
  script$4.__file = "src/inputs/TextInput.vue";

  var script$3 = {
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
  };

  const _hoisted_1$3 = { class: "inline-flex items-center mx-2" };
  const _hoisted_2$3 = ["value"];
  const _hoisted_3$3 = { class: "text-base" };

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$3, [
      vue.createElementVNode("input", {
        type: "checkbox",
        value: $props.modelValue,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
        class: "m-2 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$3),
      vue.createElementVNode("span", _hoisted_3$3, vue.toDisplayString($props.label), 1 /* TEXT */)
    ]))
  }

  script$3.render = render$3;
  script$3.__file = "src/inputs/CheckBox.vue";

  var script$2 = {
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
  };

  const _hoisted_1$2 = { class: "block m-4" };
  const _hoisted_2$2 = { class: "text-black text-base font-bold" };
  const _hoisted_3$2 = ["value", "placeholder"];

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$2, [
      vue.createElementVNode("span", _hoisted_2$2, vue.toDisplayString($props.label), 1 /* TEXT */),
      vue.createElementVNode("textarea", {
        type: "text",
        name: "deliver-appendix",
        value: $props.modelValue,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
        class: "mt-1 block w-full rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50",
        rows: "4",
        placeholder: $props.placeholder
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$2)
    ]))
  }

  script$2.render = render$2;
  script$2.__file = "src/inputs/TextArea.vue";

  var script$1 = {
    name: "ProductSection",
    data() {
      return {
        referencePrice: 0,
        sum: 0
      }
    },
    async mounted() {
      console.log(await chrome.storage.sync.get(["products"]));
    }
  };

  const _hoisted_1$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "ml-auto flex flex-col items-end" }, " ${getProductRows(products)} ", -1 /* HOISTED */);
  const _hoisted_2$1 = { class: "flex justify-end my-2" };
  const _hoisted_3$1 = { class: "border-b border-black w-48 grid grid-cols-2 px-2" };
  const _hoisted_4$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "col-start-auto text-2xl font-bold" }, "総額", -1 /* HOISTED */);
  const _hoisted_5$1 = { class: "col-end-auto text-end text-2xl font-bold" };
  const _hoisted_6$1 = { class: "text-end text-base text-gray-500 m-1" };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      _hoisted_1$1,
      vue.createElementVNode("div", _hoisted_2$1, [
        vue.createElementVNode("div", null, [
          vue.createElementVNode("div", _hoisted_3$1, [
            _hoisted_4$1,
            vue.createElementVNode("div", _hoisted_5$1, "$" + vue.toDisplayString($data.sum), 1 /* TEXT */)
          ]),
          vue.createElementVNode("div", _hoisted_6$1, " 参考価格:" + vue.toDisplayString($data.referencePrice) + " 円 ", 1 /* TEXT */)
        ])
      ])
    ], 64 /* STABLE_FRAGMENT */))
  }

  script$1.render = render$1;
  script$1.__file = "src/product/ProductSection.vue";

  var script = {
    components: {
      TextInput: script$4,
      CheckBox: script$3,
      TextArea: script$2,
      ProductSection: script$1
    },

    data() {
      return {
        fullName: "",
        phone: "",
        address: "",
        saveDeliver: false,
        deliverAppendix: ""
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
  const _hoisted_7 = /*#__PURE__*/vue.createStaticVNode("<label class=\"block m-4\"><span class=\"text-black text-base font-bold\">郵便番号</span><span class=\"flex items-center\"><input type=\"number\" name=\"postcode-start\" required pattern=\"\\d{3}\" class=\"mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50\" placeholder=\"例: 000\"><span class=\"mx-2\">-</span><input type=\"number\" name=\"postcode-end\" required pattern=\"\\d{4}\" class=\"mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50\" placeholder=\"例: 0000\"></span></label>", 1);
  const _hoisted_8 = /*#__PURE__*/vue.createElementVNode("div", { class: "my-12" }, [
    /*#__PURE__*/vue.createElementVNode("h2", { class: "text-4xl font-bold m-2" }, "3. チーム情報"),
    /*#__PURE__*/vue.createElementVNode("div", { class: "pl-4" })
  ], -1 /* HOISTED */);
  const _hoisted_9 = /*#__PURE__*/vue.createElementVNode("button", {
    type: "submit",
    class: ""
  }, "aaaa", -1 /* HOISTED */);

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_product_section = vue.resolveComponent("product-section");
    const _component_text_input = vue.resolveComponent("text-input");
    const _component_check_box = vue.resolveComponent("check-box");
    const _component_text_area = vue.resolveComponent("text-area");

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
            _hoisted_7,
            vue.createVNode(_component_text_input, {
              label: "住所",
              placeholder: "例: 〇〇県〇〇市〇〇町1-2-3",
              modelValue: $data.address,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($data.address) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_check_box, {
              label: "配送情報を記録する",
              modelValue: $data.saveDeliver,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($data.saveDeliver) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            vue.createVNode(_component_text_area, {
              label: "備考",
              modelValue: $data.deliverAppendix,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($data.deliverAppendix) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ])
        ]),
        _hoisted_8,
        _hoisted_9
      ])
    ]))
  }

  script.render = render;
  script.__file = "src/App.vue";

  vue.createApp(script).mount('#app');

}));
