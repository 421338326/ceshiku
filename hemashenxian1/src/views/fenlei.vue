<template>
  <div class="fenlei">
    <tou></tou>
    <p class="p1">
      <span class="sp2">分类</span>
    </p>
    <span class="sp1">
      <img src="icons/sort-search.png" alt />
    </span>
    <div v-for="(item,index) in lunbo" :key="index" class="bq">
      <img :src="item">
    </div>

    <!-- fenlei -->
     <div class="fenlei2">
      <ul>
        <li v-for="(item,index) in fenlei" :key="index" @click="fn(item.text)">
          <span>
            <img :src="item.imgSrc" />
          </span>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import tou from "../components/tou.vue";

export default {
  data() {
    return {
      lunbo: [
        "https://img.alicdn.com/imgextra/i1/771510470/TB21SB0fIbI8KJjy1zdXXbe1VXa-771510470.jpg_Q90.jpg"
      ],
      fenlei: ""
    };
  },
  methods: {
    get() {
      var api = "data/goodsSorts.txt";
      this.axios.get(api).then(res => {
        this.fenlei = res.data.data.slice(0,9);
        console.log(this.fenlei)
      });
    },
     fn(name) {
      this.$router.push("/tongyong/" + name);
    }
  },
  mounted() {
    this.get();
  },
  components: {
    tou
  }
};
</script>

<style lang="less" scoped>
.fenlei {
  .div {
    img {
      width: 100%;
    }
    border: 1px solid red;
  }
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
  .bq {
    img{
      width:100%
    }
  }
}
.fenlei2 {
   
  margin-top:0.10rem;
  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
    li {
      width: 30%;
      img {
        width: 70%;
      }
      span {
        display: block;
        border-radius: 50%;
      }
    }
  }
}
</style>
