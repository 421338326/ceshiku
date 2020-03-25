<template>
  <div class="fenlei">
    <tou></tou>
    <p class="p1">
      <span class="sp2">分类</span>
    </p>
    <span class="sp1">
      <img src="icons/sort-search.png" alt />
    </span>

    <!-- main -->
    <div class="mains">
      <div class="m1" v-for="(item,index) in tongyong" :key="index" @click="fn(item.name)">
        <div>
          <img :src="item.image" alt />
        </div>
        <div>
          {{item.name}}
          <span>￥{{item.price}}</span>
        </div>
        <p @click="toView(index);emitNews()">
          <img src="icons/addBtn.png" @click="show()" alt />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import tou from "../components/tou.vue";
import VueEvent from "../../VueEvent.js";
export default {
  components: {
    tou
  },
  data() {
    return {
      tongyong: "",
      index: "",
      fenlei: ""
    };
  },

  methods: {
    fn(name) {  
      /* 下面为核心代码 */
      this.$store.state.count.push(name);
      console.log(this.$store.state.count);   
    },

    //购物车中添加新商品
    toView(index) {
      this.$router.push("/car");
      this.index = index;
    },
    //添加购物车函数操作成功
    show() {
      Toast({
        message: "操作成功",
        iconClass: "icon icon-success",
        duration: 1000
      });
    },

    get() {
      var api = "data/getGoods.txt";
      this.axios.get(api).then(res => {
        var bianl = "";
        if (this.$route.params.id == "休闲零食") {
          bianl = 0;
          this.fenlei = "休闲零食";
        }
        if (this.$route.params.id == "中外名酒") {
          bianl = 1;
          this.fenlei = "中外名酒";
        }
        if (this.$route.params.id == "饮料水") {
          bianl = 2;
          this.fenlei = "饮料水";
        }
        if (this.$route.params.id == "乳品冲饮") {
          bianl = 3;
          this.fenlei = "乳品冲饮";
        }
        if (this.$route.params.id == "粮油副食") {
          bianl = 4;
          this.fenlei = "粮油副食";
        }
        if (this.$route.params.id == "美妆个护") {
          bianl = 5;
          this.fenlei = "美妆个护";
        }
        if (this.$route.params.id == "母婴保健") {
          bianl = 6;
          this.fenlei = "母婴保健";
        }
        if (this.$route.params.id == "厨卫清洁") {
          bianl = 7;
          this.fenlei = "厨卫清洁";
        }
        if (this.$route.params.id == "日用百货") {
          bianl = 8;
          this.fenlei = "日用百货";
        }
        if (this.$route.params.id == "礼品卡券") {
          bianl = 9;
          this.fenlei = "礼品卡券";
        }
        this.tongyong = res.data.data[bianl];
         console.log(this.tongyong); 
      });
    }
  },

   
  mounted() {
    this.get();
  }
};
</script>

<style lang="less" scoped>
.fenlei {
  position: relative;
  .p1 {
    border-bottom: 1px solid #f2f2f2;
  }
  p {
    text-align: center;

    height: 0.4rem;
    .sp2 {
      color: #85817f;
      position: absolute;
      top: 0.5rem;
      left: 1.7rem;
    }
  }
  .sp1 {
    display: block;
    width: 0.2rem;
    height: 0.2rem;
    position: absolute;
    right: 0.2rem;
    top: 0.5rem;
    img {
      width: 100%;
    }
  }
}
.mains { margin-bottom:0.8rem;
  margin-top: 0.2rem;
  .m1 {
    margin-top: 0.4rem;
    border-top: 1px solid#D7D7D5;
    border-bottom: 1px solid #d7d7d5;
    width: 90%;
    margin: 0 auto;
    margin-top: 0.2rem;
    display: flex;
    div:nth-of-type(1) {
      width: 1rem;
      height: 1rem;
      padding: 0.1rem;
      img {
        width: 100%;
      }
    }
    div:nth-of-type(2) {
      width: 1.9rem;
      height: 1rem;
      padding: 0.1rem;
      position: relative;
      span {
        position: absolute;
        left: 0.1rem;
        bottom: 0.1rem;
        color: red;
      }
    }
    p {
      display: block;
      height: 0.2rem;
      width: 0.2rem;
      position: relative;
      top: 1rem;
      img {
        width: 100%;
      }
    }
  }
}
</style>