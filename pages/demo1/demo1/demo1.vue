<template>
	<view>
	<view>
	
	</view>
	
	<view class="">
	
	</view>
	<view>{{num2}}</view>
	<view>{{test}}</view>
	<view>{{arr}}</view>
	<view>{{obj}}</view>
	</view>
</template>

<script setup>
import {ref} from 'vue'
let num2 = ref(10)
setTimeout(()=>{
	num2.value++;
},1000)
let test = ref("测试");
let arr = ref([1,2,3,4,5])
let obj = ref({name:"张三",age:20})
obj.value.name = "李四"

</script>

<style>
	       
</style>
