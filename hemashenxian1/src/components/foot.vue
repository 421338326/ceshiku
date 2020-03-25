<template>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="home">
      <img slot="icon" src="icons/hema-sel.png" v-show="selected=='home'"/>
       <img slot="icon" src="icons/hema.png" v-show="selected!='home'"/>
      首页
    </mt-tab-item>
    <mt-tab-item id="fenlei">
      <img slot="icon" src="icons/sort-sel.png" v-show="selected=='fenlei'"/>
      <img slot="icon" src="icons/sort.png" v-show="selected!='fenlei'"/>
      分类
    </mt-tab-item>
    <mt-tab-item id="car">
      <img slot="icon" src="icons/shopping-sel.png" v-show="selected=='car'"/>
      <img slot="icon" src="icons/shopping.png" v-show="selected!='car'"/>
      购物车
    </mt-tab-item>
    <mt-tab-item id="mine">
      <img slot="icon" src="icons/mine-sel.png" v-show="selected=='mine'" />
       <img slot="icon" src="icons/mine.png" v-show="selected!='mine'" />
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  data() {
    return {
      selected: "home",
     
    };
  },
watch: {
    selected: function(val, oldval) {
      this.$router.push("/"+val)
    }
  },
  methods:{
    
  }
};
</script>