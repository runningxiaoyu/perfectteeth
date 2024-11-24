<template>
  <view>
    <image :src="currentImg" mode="scaleToFill" />
  </view>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const imgSrcs = ref([
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/id/237/200/300",
]);

const currentImg = ref(imgSrcs.value[0]);
let i = 0;
let timer = null;

// 创建轮播函数
const startCarousel = () => {
  timer = setInterval(() => {
    i = (i + 1) % imgSrcs.value.length;
    currentImg.value = imgSrcs.value[i];
  }, 1000);
};

// 组件挂载时启动轮播
onMounted(() => {
  startCarousel();
});

// 组件卸载时清除定时器
onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<style></style>
