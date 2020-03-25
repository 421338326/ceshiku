<template onload='f1()'>
  <div class="a1">
    <foot></foot>

    <p class="zz1">有妖气漫画</p>
    <mt-swipe :auto="2000" class="lb">
      <mt-swipe-item v-for="(item,index) in im3" :key="index">
        <img :src="item.img" @click="fn(item.name)" />
      </mt-swipe-item>
    </mt-swipe>
    <div class="a2">
      <ul>
        <li>
          <img src="img/1.jpg" />
          <p>排行</p>
        </li>
        <li>
          <img src="img/2.jpg" />
          <p>免费</p>
        </li>
        <li>
          <img src="img/3.jpg" />
          <p>分类</p>
        </li>
        <li>
          <img src="img/4.jpg" />
          <p>充值</p>
        </li>
      </ul>
    </div>
    <!--  精品荟萃 -->
    <div class="a3 z1">
      <ul>
        <li>
          <strong>精品荟萃</strong>
        </li>
        <li>
          <strong>更多></strong>
        </li>
      </ul>
      <ul>
        <li v-for="(item,index) in im" :key="index" @click="fn(item.name)">
          <p>
            <img :src="item.img" />
          </p>
          <span>{{item.name}}</span>
        </li>
      </ul>
      <ul>
        <li v-for="(item,index) in im1" :key="index" @click="fn(item.name)">
          <p>
            <img :src="item.img" />
          </p>
          <span>{{item.name}}</span>
        </li>
      </ul>
      <ul>
        <li v-for="(item,index) in im2" :key="index" @click="fn(item.name)">
          <p>
            <img :src="item.img" />
          </p>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>

    <!--  新书推荐 -->
    <div class="a3">
      <ul>
        <li>
          <strong>新书推荐</strong>
        </li>
        <li>
          <strong>更多></strong>
        </li>
      </ul>
      <ul>
        <li v-for="(item,index) in im3" :key="index" @click="fn(item.name)">
          <p>
            <img :src="item.img" />
          </p>
          <span>{{item.name}}</span>
        </li>
      </ul>
      <ul>
        <li v-for="(item,index) in im4" :key="index" @click="fn(item.name)">
          <p>
            <img :src="item.img" />
          </p>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import foot from "../components/foot.vue";
export default {
  components: {
    foot
  },
  data() {
    return {
      name1: "",
      im: "",
      im1: "",
      im2: "",
      im3: "",
      im4: ""
    };
  },
  methods: {
    get() {
      var api = "data/1.json";
      this.axios.get(api).then(res => {
        this.im = res.data.data1.slice(0, 3);
      });
    },
    get1() {
      var api = "data/1.json";
      this.axios.get(api).then(res => {
        this.im1 = res.data.data1.slice(3, 6);
      });
    },
    get2() {
      var api = "data/1.json";
      this.axios.get(api).then(res => {
        this.im2 = res.data.data1.slice(6, 9);
      });
    },
    get3() {
      var api = "data/1.json";
      this.axios.get(api).then(res => {
        this.im3 = res.data.data2.slice(0, 3);
      });
    },
    get4() {
      var api = "data/1.json";
      this.axios.get(api).then(res => {
        this.im4 = res.data.data2.slice(3, 6);
      });
    },
    fn(name) {
      this.$router.push("/tongyong/" + name);
      /* 下面为核心代码 */
      this.$store.state.count.push(name);
      console.log(this.$store.state.count);
        this.$store.state.count1++
    }
  },
  mounted() {
    this.get();
    this.get1();
    this.get2();
    this.get3();
    this.get4();
  }
};
</script>

<style lang="less" scoped>
.a1 {
  height: 1.5rem;
  border: 1px solid #f66136;
  background-color: #f66136;
  p {
    padding: 0.05rem 0 0 0.05rem;
    /*    color: white;  */
  }
  img {
    width: 100%;
    height: 100%;
  }
  .lb {
    width: 90%;
    margin-left: 5%;
    margin-top: 3%;
    img {
      border-radius: 0.1rem;
    }
  }
}
.a2 {
  border-bottom: 0.2rem solid #efefef;
  margin-top: 2%;

  p {
    color: black;
    padding: 0 0 0 0.1rem;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    li {
      padding: 0 0 0.08rem 0;
      img {
        width: 0.5rem;
        height: 0.5rem;
      }
    }
  }
}
.a3 {
  padding-bottom:0.6rem;
  ul {
    margin-top: 2%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    li {
      padding: 0 0.1rem 0 0.1rem;

      span {
        display: block;
        width: 100%;
        text-align: center;
        color: #e87849;
        font-size: 0.14rem;
      }
    }
  }
}
.z1 {
  border-bottom: 0.2rem solid #efefef;
}
.zz1 {
  color: pink;
}
</style>
