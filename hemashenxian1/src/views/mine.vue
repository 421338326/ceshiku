<template>
  <div class="mine">
    <tou></tou>
    <div class="min1">
      <span>
        <img src="images/avatar.jpg" alt />
        <p>zlw20200110</p>
      </span>
    </div>

    <!-- image -->
    <div class="im">
      <ul>
        <li v-for="(item,index) in im" :key="index">
          <img :src="item.img" alt />
          <p>{{item.text}}</p>
        </li>
      </ul>

      <ol>
        <li v-for="(item,index) in im2" :key="index">
          <img :src="item.img" alt />
          <p>{{item.text}}</p><p>></p>
        </li>
      </ol>
     
    </div>
  </div>
</template>
     
<script>
import tou from "../components/tou.vue";
export default {
  components: {
    tou
  },
  data() {
    return {
      im: "",
      im2: ""
    };
  },
  methods: {
    get() {
      var api = "data/im.txt";
      this.axios.get(api).then(res => {
        this.im = res.data.data;
      });
    },
    get1() {
      var api = "data/im copy.txt";
      this.axios.get(api).then(res => {
        this.im2 = res.data.data;
      });
    }
  },
  mounted() {
    this.get();
     this.get1()
  }
};
</script>

<style lang="less" scoped>
.mine {
  .min1 {
    height: 1rem;
    background-color: #23a3fe;
    span {
      display: block;
      height: 0.55rem;
      width: 0.55rem;
      position: relative;
      top: 0.2rem;
      left: 0.3rem;
      img {
        width: 100%;
        border-radius: 50%;
      }
      p {
        position: absolute;
        top: 30%;
        left: 0.7rem;
        color: white;
      }
    }
  }
}
.im {
  ol:nth-of-type(1) {
    border-top: 1px solid #85817f;
  }
ol li:nth-of-type(3) {
    border-bottom: 1px solid #85817f;
  }
  ol {
    list-style: none;

    li {
      height: 0.3rem;
     
      padding: 0.1rem 0 0.1rem 0;
      margin-left: 0.2rem;
      display: flex;
      p:nth-of-type(2){
        position: absolute;
        right:0.1rem;
        color:#85817f;
      }
      p {
        margin-left: 0.2rem;
        height: 0.25rem;
        line-height: 0.25rem;
      }
      img {
       
        width: 8%;
      }
    }
  }
  ul {
    list-style: none;
    display: flex;
    border-bottom: 1 solid #85817f;
    li {
      text-align: center;
      width: 20%;
      padding: 0.2rem 0 0.2rem 0;
      img {
        width: 40%;
      }
      p {
        font-size: 0.13rem;
      }
    }
  }
}
</style>
