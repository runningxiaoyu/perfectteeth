<template>
  <view>
    <view>
      <view class="box" :class="{ active: isActive }">v-bind指令</view>
    </view>
    <view class="box" :class="isActive ? 'active' : ''"> 

    </view>
  </view>
</template>
<script setup>
import { ref } from "vue";
let isActive = ref(false);
</script>
<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #007aff;
}
.active {
  background-color: #ff0000;
  border-radius: 10px;
}
</style>
