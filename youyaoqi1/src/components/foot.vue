<template>
    <mt-tabbar v-model="selected" fixed> 
  <mt-tab-item id="">
    <img slot="icon" src="icons/shopping-sel.png" v-show="selected==''">
     <img slot="icon" src="icons/shopping.png" v-show="selected!=''">
    书城
  </mt-tab-item>
  <mt-tab-item id="yuedu">
    <img slot="icon" src="icons/sort-sel.png" v-show="selected=='yuedu'">
      <img slot="icon" src="icons/sort.png" v-show="selected!='yuedu'">
    阅读记录
  </mt-tab-item>
  <mt-tab-item id="mine">
    <img slot="icon" src="icons/mine-sel.png" v-show="selected=='mine'">
       <img slot="icon" src="icons/mine.png" v-show="selected!='mine'">
    我的
  </mt-tab-item>
</mt-tabbar>
</template>



<script>
export default {
  data() {
    return {
      selected: "",
     
    };
  },
watch: {
    selected: function(val, oldval) {
      this.$router.push("/"+val)
      console.log(val)
    }
  },
  methods:{
    
  }
};
</script>