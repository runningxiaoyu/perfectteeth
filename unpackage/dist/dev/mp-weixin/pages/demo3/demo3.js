"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo3",
  setup(__props) {
    let isActive = common_vendor.ref(false);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(isActive) ? 1 : "",
        b: common_vendor.n(common_vendor.unref(isActive) ? "active" : "")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f557aef1"]]);
wx.createPage(MiniProgramPage);
