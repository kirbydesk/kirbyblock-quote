(function() {
  "use strict";
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main$2 = {
    props: {
      value: String,
      icon: String,
      layout: String
    }
  };
  var _sfc_render$2 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "blockinfo" }, [_c("div", [_c("svg", { staticClass: "k-icon", attrs: { "aria-hidden": "true" } }, [_c("use", { attrs: { "xlink:href": "#icon-" + _vm.icon } })]), _vm._v(" " + _vm._s(_vm.value) + " "), _vm.layout ? _c("span", [_vm._v("(" + _vm._s(_vm.layout) + ")")]) : _vm._e()])]);
  };
  var _sfc_staticRenderFns$2 = [];
  _sfc_render$2._withStripped = true;
  var __component__$2 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$2,
    _sfc_render$2,
    _sfc_staticRenderFns$2,
    false,
    null,
    "26526d24"
  );
  __component__$2.options.__file = "/Users/christian/Projects/kirbydesk/site/plugins/kirby-pagewizard/src/components/blockinfo.vue";
  const pwBlockinfo = __component__$2.exports;
  const _sfc_main$1 = {
    props: {
      quote: String,
      author: String
    },
    computed: {
      parsedQuoteData() {
        const val = this.quote;
        if (!val) return { text: "", align: "left" };
        try {
          return typeof val === "string" ? JSON.parse(val) : val;
        } catch (e) {
          return { text: val, align: "left" };
        }
      },
      parsedAuthorData() {
        const val = this.author;
        if (!val) return { text: "" };
        try {
          return typeof val === "string" ? JSON.parse(val) : val;
        } catch (e) {
          return { text: val };
        }
      },
      quoteText() {
        const { text = "" } = this.parsedQuoteData;
        return text;
      },
      authorText() {
        const { text = "" } = this.parsedAuthorData;
        return text;
      },
      quoteAlign() {
        const { align = "left" } = this.parsedQuoteData;
        return align;
      },
      authorAlign() {
        const { align = "left" } = this.parsedAuthorData;
        return align;
      }
    },
    methods: {
      nl2br(text) {
        if (!text) return "";
        return text.replace(/\n/g, "<br>");
      }
    }
  };
  var _sfc_render$1 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwquote" }, [_vm.quoteText ? _c("div", { staticClass: "quote", attrs: { "data-align": _vm.quoteAlign }, domProps: { "innerHTML": _vm._s(_vm.nl2br(_vm.quoteText)) } }) : _c("div", { staticClass: "quote placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.text-quote.placeholder")) + " ")]), _vm.authorText ? _c("div", { staticClass: "author", attrs: { "data-align": _vm.authorAlign } }, [_vm._v(_vm._s(_vm.authorText))]) : _c("div", { staticClass: "author placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.author.placeholder")) + " ")])]);
  };
  var _sfc_staticRenderFns$1 = [];
  _sfc_render$1._withStripped = true;
  var __component__$1 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$1,
    _sfc_render$1,
    _sfc_staticRenderFns$1,
    false,
    null,
    "90325663"
  );
  __component__$1.options.__file = "/Users/christian/Projects/kirbydesk/site/plugins/kirby-pagewizard/src/components/quote.vue";
  const pwQuote = __component__$1.exports;
  const pwGridStyle = {
    computed: {
      gridVars() {
        return {
          "--grid-start-sm": Number(this.content.gridoffsetsm),
          "--grid-span-sm": Number(this.content.gridsizesm),
          "--grid-start-md": Number(this.content.gridoffsetmd),
          "--grid-span-md": Number(this.content.gridsizemd),
          "--grid-start-lg": Number(this.content.gridoffsetlg),
          "--grid-span-lg": Number(this.content.gridsizelg),
          "--grid-start-xl": Number(this.content.gridoffsetxl),
          "--grid-span-xl": Number(this.content.gridsizexl)
        };
      }
    }
  };
  const pwColorStyle = {
    data() {
      return {
        colors: null
      };
    },
    async created() {
      try {
        this.colors = await this.$api.get("pagewizard/colors");
      } catch (e) {
        this.colors = null;
      }
    },
    computed: {
      colorVars() {
        if (!this.colors) return {};
        const style = this.content.style || "default";
        const vars = {};
        if (style === "custom") {
          for (const [key, value] of Object.entries(this.colors.default)) {
            vars["--" + key] = value;
          }
          if (this.content.textcolor) {
            vars["--pw-color-text"] = this.content.textcolor;
            vars["--pw-color-heading"] = this.content.textcolor;
            vars["--pw-color-tagline"] = this.content.textcolor;
            vars["--pw-color-link"] = this.content.textcolor;
            vars["--pw-color-quote"] = this.content.textcolor;
            vars["--pw-color-cite"] = this.content.textcolor;
          }
          if (this.content.backgroundcolor) {
            vars["--pw-color-block-background"] = this.content.backgroundcolor;
          }
          const btnStyle = this.content.buttonstyle || "default";
          if (btnStyle === "variant" && this.colors.variant) {
            const btnKeys = Object.keys(this.colors.variant).filter((k) => k.startsWith("pw-color-button"));
            for (const key of btnKeys) {
              vars["--" + key] = this.colors.variant[key];
            }
          }
        } else {
          const palette = style === "variant" ? { ...this.colors.default, ...this.colors.variant } : this.colors.default;
          for (const [key, value] of Object.entries(palette)) {
            vars["--" + key] = value;
          }
        }
        return vars;
      }
    }
  };
  const _sfc_main = {
    components: {
      pwBlockinfo,
      pwQuote
    },
    mixins: [pwGridStyle, pwColorStyle]
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwPreview", style: _vm.colorVars, attrs: { "data-kirbyblock": "quote", "data-margintop": _vm.content.margintop === true ? "true" : null, "data-marginbottom": _vm.content.marginbottom === true ? "true" : null }, on: { "dblclick": _vm.open } }, [_c("pwBlockinfo", { attrs: { "value": _vm.$t("kirbyblock-quote.name"), "icon": "quote" } }), _c("div", { staticClass: "pwGrid" }, [_c("div", { staticClass: "pwGridItem", style: _vm.gridVars, attrs: { "data-paddingtop": _vm.content.paddingtop === true ? "true" : null, "data-paddingright": _vm.content.paddingright === true ? "true" : null, "data-paddingbottom": _vm.content.paddingbottom === true ? "true" : null, "data-paddingleft": _vm.content.paddingleft === true ? "true" : null } }, [_c("pwQuote", { attrs: { "quote": _vm.content.textquote, "author": _vm.content.author } })], 1)])], 1);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns,
    false,
    null,
    null
  );
  __component__.options.__file = "/Users/christian/Projects/kirbydesk/site/plugins/kirbyblock-quote/src/blocks/index.vue";
  const pwquote = __component__.exports;
  panel.plugin("kirbydesk/kirbyblock-quote", {
    blocks: {
      pwquote
    }
  });
})();
