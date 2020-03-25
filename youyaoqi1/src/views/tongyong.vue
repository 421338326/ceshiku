<template>
  <div class="a1">
    <div class="a2">
     
 <router-link to="/" class="a6"><p>首页</p></router-link>
    </div>
    <div class="a3">
      <p v-for="(item,index) in tongyong" :key="index">
        <img :src="item.img" alt />
      </p>
     
     
    </div>
     <router-view/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tongyong: ""
    };
  },
  methods: {
    get1() {
      var api = "data/2.json";
      this.axios.get(api).then(res => {
        if (this.$route.params.id == "武练巅峰") {
          this.tongyong = res.data.img1;
        } 
        if (this.$route.params.id == "野区老祖") {
          this.tongyong = res.data.img2;
        }
         if (this.$route.params.id == "驭灵师") {
          this.tongyong = res.data.img3;
        }
          if (this.$route.params.id == "恋爱大叔") {
          this.tongyong = res.data.img4;
        }
         if (this.$route.params.id == "绝世炼丹师") {
          this.tongyong = res.data.img5;
        }
          if (this.$route.params.id == "百层塔") {
          this.tongyong = res.data.img6;
        
        }
          if (this.$route.params.id == "ACUP先生") {
          this.tongyong = res.data.img7;
        }
         if (this.$route.params.id == "通灵妃") {
          this.tongyong = res.data.img8;
        }
        if (this.$route.params.id == "兼职神仙") {
          this.tongyong = res.data.img9;
        }
        if (this.$route.params.id == "恋爱云书") {
          this.tongyong = res.data.img10;
        }
         if (this.$route.params.id == "修真聊天群") {
          this.tongyong = res.data.img11;
        }
         if (this.$route.params.id == "重生之都市修仙") {
          this.tongyong = res.data.img12;
        }
         if (this.$route.params.id == "黑良") {
          this.tongyong = res.data.img13;
        }
        if (this.$route.params.id == "妖精种植手册") {
          this.tongyong = res.data.img14;
        }
        if (this.$route.params.id == "妹子与科学") {
          this.tongyong = res.data.img15;
        }
      });
    }
  },
  
  mounted() {
    this.get1();
  }
};
</script>



<style lang="less" scoped>
.a6{
text-decoration: none;
}
.a2 {
  margin-left:0.3rem;
  margin-top:0.3rem;
  position: fixed;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: #f76237;
  p {
    font-size: 0.14rem;
    color: white;
    position: relative;
    top: 0.1rem;
    left: 14%;
  }
}
.a3 {
 
  width: 99%;
  height: 2rem;
  img {
    width: 100%;
  }
}
</style>