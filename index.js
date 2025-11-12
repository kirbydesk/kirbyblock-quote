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
  const _sfc_main$4 = {
    props: {
      value: String,
      icon: String,
      layout: String
    }
  };
  var _sfc_render$4 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "blockinfo" }, [_c("div", [_c("svg", { staticClass: "k-icon", attrs: { "aria-hidden": "true" } }, [_c("use", { attrs: { "xlink:href": "#icon-" + _vm.icon } })]), _vm._v(" " + _vm._s(_vm.value) + " "), _vm.layout ? _c("span", [_vm._v("(" + _vm._s(_vm.layout) + ")")]) : _vm._e()])]);
  };
  var _sfc_staticRenderFns$4 = [];
  _sfc_render$4._withStripped = true;
  var __component__$4 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$4,
    _sfc_render$4,
    _sfc_staticRenderFns$4,
    false,
    null,
    "26526d24"
  );
  __component__$4.options.__file = "/Users/christian/Projects/kirbydesk/site/plugins/kirby-pagewizard/src/components/blockinfo.vue";
  const pwBlockinfo = __component__$4.exports;
  const _sfc_main$3 = {
    props: {
      value: String,
      content: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      parsedData() {
        var _a;
        const val = ((_a = this.content) == null ? void 0 : _a.tagline) || this.value;
        if (!val) return { text: "", align: "left" };
        try {
          return typeof val === "string" ? JSON.parse(val) : val;
        } catch (e) {
          return { text: val, align: "left" };
        }
      },
      text() {
        const { text = "" } = this.parsedData;
        return text;
      },
      align() {
        const { align = "left" } = this.parsedData;
        return align;
      }
    }
  };
  var _sfc_render$3 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwTagline", attrs: { "data-align": _vm.align } }, [_vm.text ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.text) } }) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.tagline.placeholder")) + " ")])]);
  };
  var _sfc_staticRenderFns$3 = [];
  _sfc_render$3._withStripped = true;
  var __component__$3 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$3,
    _sfc_render$3,
    _sfc_staticRenderFns$3,
    false,
    null,
    "2287a490"
  );
  __component__$3.options.__file = "/Users/christian/Projects/kirbydesk/site/plugins/kirby-pagewizard/src/components/tagline.vue";
  const pwTagline = __component__$3.exports;
  const _sfc_main$2 = {
    props: {
      value: String,
      content: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      parsedData() {
        var _a;
        const val = ((_a = this.content) == null ? void 0 : _a.heading) || this.value;
        if (!val) return { text: "", level: "h2", align: "left" };
        try {
          return typeof val === "string" ? JSON.parse(val) : val;
        } catch (e) {
          return { text: val, level: "h2", align: "left" };
        }
      },
      text() {
        const { text = "" } = this.parsedData;
        return text;
      },
      level() {
        const { level = "h2" } = this.parsedData;
        return level;
      },
      align() {
        const { align = "left" } = this.parsedData;
        return align;
      }
    }
  };
  var _sfc_render$2 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwHeading", attrs: { "data-align": _vm.align, "data-lvl": _vm.level } }, [_vm.text ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.text) } }) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.heading.placeholder")) + " ")])]);
  };
  var _sfc_staticRenderFns$2 = [];
  _sfc_render$2._withStripped = true;
  var __component__$2 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$2,
    _sfc_render$2,
    _sfc_staticRenderFns$2,
    false,
    null,
    "ad832d63"
  );
  __component__$2.options.__file = "/Users/christian/Projects/kirbydesk/site/plugins/kirby-pagewizard/src/components/heading.vue";
  const pwHeading = __component__$2.exports;
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
    return _c("div", { staticClass: "pwQuote" }, [_vm.quoteText ? _c("div", { staticClass: "quote", attrs: { "data-align": _vm.quoteAlign }, domProps: { "innerHTML": _vm._s(_vm.nl2br(_vm.quoteText)) } }) : _c("div", { staticClass: "quote placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.text-quote.placeholder")) + " ")]), _vm.authorText ? _c("div", { staticClass: "author", attrs: { "data-align": _vm.authorAlign } }, [_vm._v(_vm._s(_vm.authorText))]) : _c("div", { staticClass: "author placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.author.placeholder")) + " ")])]);
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
  const pwQuote$1 = __component__$1.exports;
  const pwToggleGridTab = {
    mounted() {
      this.setDrawerClass();
      this.$watch(
        () => this.content.togglegrid,
        () => {
          this.setDrawerClass();
        }
      );
      this.drawerObserver = new MutationObserver(() => {
        this.setDrawerClass();
      });
      this.drawerObserver.observe(document.body, { childList: true, subtree: true });
    },
    beforeDestroy() {
      if (this.drawerObserver) {
        this.drawerObserver.disconnect();
      }
    },
    methods: {
      setDrawerClass() {
        const drawers = document.querySelectorAll(".k-drawer.k-form-drawer");
        drawers.forEach((drawer) => {
          drawer.classList.toggle("hide-grid-tab", this.content.togglegrid === false);
        });
      }
    }
  };
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
  const _sfc_main = {
    components: {
      pwBlockinfo,
      pwTagline,
      pwHeading,
      pwQuote: pwQuote$1
    },
    mixins: [pwToggleGridTab, pwGridStyle]
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwPreview", attrs: { "data-kirbyblock": "quote" }, on: { "dblclick": _vm.open } }, [_c("pwBlockinfo", { attrs: { "value": _vm.$t("kirbyblock-quote.name"), "icon": "quote" } }), _c("div", { staticClass: "pwGrid" }, [_c("div", { staticClass: "pwGridItem", style: _vm.gridVars }, [_vm.content.toggletagline ? _c("pwTagline", { attrs: { "value": _vm.content.tagline } }) : _vm._e(), _vm.content.toggleheading ? _c("pwHeading", { attrs: { "value": _vm.content.heading, "data-level": _vm.content.level } }) : _vm._e(), _c("pwQuote", { attrs: { "quote": _vm.content.textquote, "author": _vm.content.author } })], 1)])], 1);
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
  const pwQuote = __component__.exports;
  panel.plugin("kirbydesk/kirbyblock-quote", {
    blocks: {
      pwQuote
    }
  });
})();
