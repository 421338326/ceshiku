<template>
  <div class="a1">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id>
        <img slot="icon" src="icons/shopping-sel.png" v-show="selected==''" />
        <img slot="icon" src="icons/shopping.png" v-show="selected!=''" />
        书城
      </mt-tab-item>
      <mt-tab-item id="yuedu">
        <img slot="icon" src="icons/sort-sel.png" v-show="selected=='yuedu'" />
        <img slot="icon" src="icons/sort.png" v-show="selected!='yuedu'" />
        阅读记录
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="icons/mine-sel.png" v-show="selected=='mine'" />
        <img slot="icon" src="icons/mine.png" v-show="selected!='mine'" />
        我的
      </mt-tab-item>
    </mt-tabbar>

    <div class="a2">
      <div class="a3">
        <p>阅读记录</p>
      </div>
      <ul>
        <li>
          阅读记录
          <span style="color:red">({{$store.state.count1}})</span>
        </li>
        <li>编辑</li>
      </ul>
    </div>
    <div class="a4">
      <div>
        <strong>|</strong>
        <span>猜你喜欢</span>
      </div>
    </div>
    <div class="a5">
      <ul>
        <li v-for="(item,index) in text" :key="index" @click="fn(item.name)">
          <img :src="item.img" alt />
          <div>
            <p>{{item.name}}</p>
            <p>{{item.text}}</p>
            <p>武侠</p>
            <p>作者：{{item.people}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  /* {{$store.state.count}} */
  data() {
    return {
      selected: "yuedu",
      text: []
    };
  },
  methods: {
    fn(name) {
      this.$router.push("/tongyong/" + name);
      console.log(name);
    },
    get1() {
      var api = "data/1.json";
      this.axios.get(api).then(res => {
        if (this.$store.state.count.indexOf("武练巅峰") != -1) {
          this.text.push(res.data.data1[0]);
        }

        if (this.$store.state.count.indexOf("野区老祖") != -1) {
          this.text.push(res.data.data1[1]);
        }

        if (this.$store.state.count.indexOf("驭灵师") != -1) {
          this.text.push(res.data.data1[2]);
        }

        if (this.$store.state.count.indexOf("恋爱大叔") != -1) {
          this.text.push(res.data.data1[3]);
        }

        if (this.$store.state.count.indexOf("绝世炼丹师") != -1) {
          this.text.push(res.data.data1[4]);
        }

        if (this.$store.state.count.indexOf("百层塔") != -1) {
          this.text.push(res.data.data1[5]);
        }

        if (this.$store.state.count.indexOf("ACUP先生") != -1) {
          this.text.push(res.data.data1[6]);
        }

        if (this.$store.state.count.indexOf("通灵妃") != -1) {
          this.text.push(res.data.data1[7]);
        }

        if (this.$store.state.count.indexOf("兼职神仙") != -1) {
          this.text.push(res.data.data1[8]);
        }

        if (this.$store.state.count.indexOf("恋爱云书") != -1) {
          this.text.push(res.data.data2[0]);
        }

        if (this.$store.state.count.indexOf("修真聊天群") != -1) {
          this.text.push(res.data.data2[1]);
        }

        if (this.$store.state.count.indexOf("重生之都市修仙") != -1) {
          this.text.push(res.data.data2[2]);
        }

        if (this.$store.state.count.indexOf("黑良") != -1) {
          this.text.push(res.data.data2[3]);
        }

        if (this.$store.state.count.indexOf("妖精种植手册") != -1) {
          this.text.push(res.data.data2[4]);
        }

        if (this.$store.state.count.indexOf("妹子与科学") != -1) {
          this.text.push(res.data.data2[5]);
        }
      });
    }
  },

  mounted() {
    this.get1();
  },
  watch: {
    selected: function(val, oldval) {
      this.$router.push("/" + val);
      console.log(val);
    }
  }
};
</script>

<style lang="less" scoped>
.a2 {
  .a3 {
    height: 0.45rem;
    background-color: #f66136;
    border: 1px solid red;
  }

  ul {
    margin-top: 0.05rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.2rem solid #efefef;
    line-height: 0.4rem;
    li {
      color: #8a8a8a;
      padding: 0 0.1rem 0 0.1rem;
    }
  }
  p {
    text-align: center;
    height: 0.43rem;
    line-height: 0.45rem;
  }
}
.a4 {
  border-bottom: 1px solid #8a8a8a;
  line-height: 0.5rem;
  strong {
    color: red;
    margin-right: 0.05rem;
  }
  div {
    margin-top: 0.05rem;
    margin-left: 0.05rem;
  }
}
.a5 {
  padding-bottom: 0.5rem;
  ul {
    list-style: none;
    margin-top: 0.05rem;
    margin-left: 0.05rem;
    li {
      display: flex;
      margin-top: 0.1rem;
      margin-bottom: 0.1rem;
      div {
        margin: 0.05rem 0.1rem;
        p:nth-of-type(1) {
          color: red;
        }
        p:nth-of-type(2) {
          color: #8a8a8a;
          font-size: 0.12rem;
          margin-top: 0.1rem;
        }
        p:nth-of-type(3) {
          background-color: #999999;
          text-align: center;
          width: 0.3rem;
          height: 0.2rem;
          display: block;
          line-height: 0.2rem;
          color: white;
          font-size: 0.12rem;
          margin-top: 0.5rem;
        }
        p:nth-of-type(4) {
          color: #8a8a8a;
          font-size: 0.14rem;
          margin-top: 0.3rem;
        }
      }
    }
  }
  img {
    border-radius: 0.1rem;
    width: 1.7rem;
    height: 2.2rem;
  }
}
</style>