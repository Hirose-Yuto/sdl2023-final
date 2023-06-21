(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Vue));
})(this, (function (vue) { 'use strict';

  var script$3 = {
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

  const _hoisted_1$3 = { class: "block m-4" };
  const _hoisted_2$3 = { class: "text-black text-base font-bold" };
  const _hoisted_3$3 = ["value", "placeholder"];

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$3, [
      vue.createElementVNode("span", _hoisted_2$3, vue.toDisplayString($props.label), 1 /* TEXT */),
      vue.createElementVNode("input", {
        type: "text",
        value: $props.modelValue,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
        required: "",
        class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
        placeholder: $props.placeholder
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$3)
    ]))
  }

  script$3.render = render$3;
  script$3.__file = "src/inputs/TextInput.vue";

  var script$2 = {
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

  const _hoisted_1$2 = { class: "inline-flex items-center mx-2" };
  const _hoisted_2$2 = ["value"];
  const _hoisted_3$2 = { class: "text-base" };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$2, [
      vue.createElementVNode("input", {
        type: "checkbox",
        value: $props.modelValue,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
        class: "m-2 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$2),
      vue.createElementVNode("span", _hoisted_3$2, vue.toDisplayString($props.label), 1 /* TEXT */)
    ]))
  }

  script$2.render = render$2;
  script$2.__file = "src/inputs/CheckBox.vue";

  var script$1 = {
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

  const _hoisted_1$1 = { class: "block m-4" };
  const _hoisted_2$1 = { class: "text-black text-base font-bold" };
  const _hoisted_3$1 = ["value", "placeholder"];

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$1, [
      vue.createElementVNode("span", _hoisted_2$1, vue.toDisplayString($props.label), 1 /* TEXT */),
      vue.createElementVNode("textarea", {
        type: "text",
        name: "deliver-appendix",
        value: $props.modelValue,
        onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('update:modelValue', $event.target.value))),
        class: "mt-1 block w-full rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50",
        rows: "4",
        placeholder: $props.placeholder
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$1)
    ]))
  }

  script$1.render = render$1;
  script$1.__file = "src/inputs/TextArea.vue";

  var script = {
    components: {
      TextInput: script$3,
      CheckBox: script$2,
      TextArea: script$1
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
  const _hoisted_2 = /*#__PURE__*/vue.createStaticVNode("<div class=\"my-12\"><h2 class=\"text-4xl font-bold m-2\">1. 商品情報</h2><div id=\"products\"><div class=\"ml-auto flex flex-col items-end\"> ${getProductRows(products)} </div><div class=\"flex justify-end my-2\"><div><div class=\"border-b border-black w-48 grid grid-cols-2 px-2\"><div class=\"col-start-auto text-2xl font-bold\">総額</div><div class=\"col-end-auto text-end text-2xl font-bold\">$${sum}</div></div><div class=\"text-end text-base text-gray-500 m-1\"> 参考価格:<span id=\"reference-price\">????</span> 円 </div></div></div></div></div>", 1);
  const _hoisted_3 = { class: "my-12" };
  const _hoisted_4 = /*#__PURE__*/vue.createElementVNode("h2", { class: "text-4xl font-bold m-2" }, "2. 配送情報", -1 /* HOISTED */);
  const _hoisted_5 = { class: "pl-4" };
  const _hoisted_6 = /*#__PURE__*/vue.createStaticVNode("<label class=\"block m-4\"><span class=\"text-black text-base font-bold\">郵便番号</span><span class=\"flex items-center\"><input type=\"number\" name=\"postcode-start\" required pattern=\"\\d{3}\" class=\"mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50\" placeholder=\"例: 000\"><span class=\"mx-2\">-</span><input type=\"number\" name=\"postcode-end\" required pattern=\"\\d{4}\" class=\"mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50\" placeholder=\"例: 0000\"></span></label>", 1);
  const _hoisted_7 = /*#__PURE__*/vue.createElementVNode("div", { class: "my-12" }, [
    /*#__PURE__*/vue.createElementVNode("h2", { class: "text-4xl font-bold m-2" }, "3. チーム情報"),
    /*#__PURE__*/vue.createElementVNode("div", { class: "pl-4" })
  ], -1 /* HOISTED */);
  const _hoisted_8 = /*#__PURE__*/vue.createElementVNode("button", {
    type: "submit",
    class: ""
  }, "aaaa", -1 /* HOISTED */);

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_text_input = vue.resolveComponent("text-input");
    const _component_check_box = vue.resolveComponent("check-box");
    const _component_text_area = vue.resolveComponent("text-area");

    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
      vue.createElementVNode("form", null, [
        _hoisted_2,
        vue.createElementVNode("div", _hoisted_3, [
          _hoisted_4,
          vue.createElementVNode("div", _hoisted_5, [
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
            _hoisted_6,
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
        _hoisted_7,
        _hoisted_8
      ])
    ]))
  }

  script.render = render;
  script.__file = "src/App.vue";

  vue.createApp(script).mount('#app');

}));
