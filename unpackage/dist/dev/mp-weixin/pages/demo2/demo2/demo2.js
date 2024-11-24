"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "demo2",
  setup(__props) {
    const imgSrcs = common_vendor.ref([
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/id/237/200/300"
    ]);
    const currentImg = common_vendor.ref(imgSrcs.value[0]);
    let i = 0;
    let timer = null;
    const startCarousel = () => {
      timer = setInterval(() => {
        i = (i + 1) % imgSrcs.value.length;
        currentImg.value = imgSrcs.value[i];
      }, 1e3);
    };
    common_vendor.onMounted(() => {
      startCarousel();
    });
    common_vendor.onUnmounted(() => {
      if (timer) {
        clearInterval(timer);
      }
    });
    return (_ctx, _cache) => {
      return {
        a: currentImg.value
      };
    };
  }
};
wx.createPage(_sfc_main);
