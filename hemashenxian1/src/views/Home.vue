<template>
  <div>
    <!--  tou -->
    <mt-header title="盒马生鲜">
      <router-link to="/" slot="left"></router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <!-- 搜索 -->
    <div class="search">
      <span>
        <img src="icons/search.png" alt />
      </span>
      <input type="text" placeholder="奇异果" />
    </div>

    <!--  轮播1 -->
    <div class="lunbo">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in lunbo" :key="index">
          <img :src="item" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- fenlei -->
    <div class="fenlei">
      <ul>
        <li v-for="(item,index) in fenlei" :key="index" @click="fn(item.text)">
          <span>
            <img :src="item.imgSrc" />
          </span>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>

    <!-- jinriwangpai -->
    <div class="wangpai">
      <ul>
        <li>
          <img src="icons/crown.png" alt />
          <h2>今日王牌大赏</h2>
          <h2 class="h2h">
            更多&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>></span>
          </h2>
        </li>
      </ul>
    </div>

    <!--  轮播2-->
    <div class="lunbo2">
      <mt-swipe :auto="4000" :show-indicators="false">
        <mt-swipe-item v-for="(item,index) in lunbo2" :key="index" class='a1'> 
             <img :src="item.image" alt />
          <div>
            <p><strong>{{item.name}}</strong></p>
            <p>{{item.secName}}</p>
            <p>{{item.leftTitle}}</p>
            <p>{{item.leftSecTitle}}{{item.rightSecTitle}}</p>
            <p>￥<span>{{item.price}}</span>&nbsp;{{item.count}}{{item.unit}}</p>
          </div>
       
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbo: [
        "https://gw.alicdn.com/tfs/TB1AoIXeLDH8KJjy1XcXXcpdXXa-750-291.jpg_Q90.jpg",
        "https://img.alicdn.com/imgextra/i1/771510470/TB21SB0fIbI8KJjy1zdXXbe1VXa-771510470.jpg_Q90.jpg",
        "https://img.alicdn.com/imgextra/i2/745949152/TB2ATrSexPI8KJjSspfXXcCFXXa_!!745949152.jpg_Q90.jpg"
      ],
      fenlei: "",
      lunbo2: ""
    };
  },
  /* vue实例初始化后第一个运行的生命周期函数 */
 /*  beforeCreate(){
    alert('asd')
  }, */
  methods: {
    get() {
      var api = "data/goodsSorts.txt";
      this.axios.get(api).then(res => {
        this.fenlei = res.data.data;
        
      });
    },
    get1() {
      var api = "data/scrollXList.txt";
      this.axios.get(api).then(res => {
        this.lunbo2 = res.data.data;
       
      });
    },
    fn(name) {
      this.$router.push("/tongyong/" + name);
            /* 下面为核心代码 */
/*        this.$store.state.count.push(name);
         console.log(this.$store.state.count); */
    }
  },
  mounted() {
    this.get();
    this.get1();
  }
};
</script>

<style lang="less" scoped>
.search {
  height: 0.4rem;
  background-color: #26a2ff;
  input {
    text-align: center;
    width: 75%;
    height: 0.25rem;
    border-radius: 0.15rem;
    margin-left: 0.5rem;
    margin-top: 0.05rem;
    border: none;
    outline: none;
  }
  span {
    position: absolute;
    left: 0.7rem;
    top: 0.48rem;
    display: block;
    height: 0.2rem;
    width: 0.2rem;
    img {
      width: 100%;
    }
  }
}
.lunbo {
  height: 1.4rem;
  img {
    width: 100%;
    height: 100%;
  }
}


.lunbo2 {
  width: 100%;
  height: 1.7rem;
.a1{
  display: flex;
  justify-content: space-around;
}
  img {
    width: 35%;
    height: 98%;
  }
  div{
    margin-left:0.05rem;
    p{
      padding:0 0 0.1rem 0
    }
    p:nth-of-type(1){
     color:black;
     font-size:0.18rem
    }
     p:nth-of-type(2){
     color:#85817f;
    }
     p:nth-of-type(3){
     color:#000000;
     font-size:0.17rem
    }
     p:nth-of-type(5) span{
     color:red;
    }
  }
}


.fenlei {

  margin-top: 0.1rem;
  li:nth-of-type(1) span {
    background-color: #b98556;
  }
  li:nth-of-type(2) span {
    background-color: #a3b2ca;
  }
  li:nth-of-type(3) span {
    background-color: #f3cb92;
  }
  li:nth-of-type(4) span {
    background-color: #c4d771;
  }
  li:nth-of-type(5) span {
    background-color: #f3cb92;
  }
  li:nth-of-type(6) span {
    background-color: #86d6f5;
  }
  li:nth-of-type(7) span {
    background-color: #fc9291;
  }
  li:nth-of-type(8) span {
    background-color: #2fc3cd;
  }
  li:nth-of-type(9) span {
    background-color: #8698b6;
  }
  li:nth-of-type(10) span {
    background-color: #f1d14d;
  }
  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
    li {
      width: 17%;
      img {
        width: 80%;
        transform: rotate(-45deg);
      }
      span {
        display: block;
        border-radius: 50%;
      }
    }
  }
}
.wangpai {
  ul {
    list-style: none;
    margin-top: 0.15rem;
    li {
      height: 0.5rem;
      margin-left: 0.2rem;
      display: flex;
      vertical-align: middle;
      h2 {
        margin-left: 0.2rem;
        display: block;
        height: 0.4rem;
        line-height: 0.4rem;
      }
      .h2h {
        position: absolute;
        right: 0.1rem;
      }
      img {
        width: 10%;
      }
    }
  }
}
</style>


