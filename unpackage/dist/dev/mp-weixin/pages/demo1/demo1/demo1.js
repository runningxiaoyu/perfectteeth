"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "demo1",
  setup(__props) {
    let num2 = common_vendor.ref(10);
    setTimeout(() => {
      num2.value++;
    }, 1e3);
    let test = common_vendor.ref("测试");
    let arr = common_vendor.ref([1, 2, 3, 4, 5]);
    let obj = common_vendor.ref({ name: "张三", age: 20 });
    obj.value.name = "李四";
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(num2)),
        b: common_vendor.t(common_vendor.unref(test)),
        c: common_vendor.t(common_vendor.unref(arr)),
        d: common_vendor.t(common_vendor.unref(obj))
      };
    };
  }
};
wx.createPage(_sfc_main);
