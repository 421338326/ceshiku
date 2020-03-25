<template>
  <div>
    <div class="box">
      <div>
        <img src="img/tou1.jpg" alt />
        <ul>
          <li>游客</li>
          <li>Id123456</li>
        </ul>
      </div>
    </div>
    <div class="box2">
      <ul>
        <li>
          <p>
            <img src="img/icon9.png" />
          </p>
          <p>金币</p>
        </li>
        <li>
          <p>20</p>
          <p>余额</p>
        </li>
        <li>
          <p>
            <img src="img/icon8.png" />
          </p>
          <p>会员</p>
        </li>
        <li>
          <p>无</p>
          <p>有效期至</p>
        </li>
      </ul>
      <ul>
        <li><img src="img/icon7.png" alt=""><span>充值中心</span></li>
         <li><img src="img/icon6.png" alt=""><span>手机登入</span></li>
          <li><img src="img/icon5.png" alt=""><span>阅读历史</span></li>
           <li><img src="img/icon4.png" alt=""><span>账单明细</span></li>
            <li><img src="img/icon3.png" alt=""><span>客服</span></li>
             <li><img src="img/icon2.png" alt=""><span>邮箱</span></li>
              <li><img src="img/icon1.png" alt=""><span>找回用户</span></li>
      </ul>
    </div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "mine"
    };
  },
  watch: {
    selected: function(val, oldval) {
      this.$router.push("/" + val);
      console.log(val);
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
div {
  .box {
    height: 1.2rem;
    background-color: #f66136;
    div {
      width: 0.7rem;
      height: 0.7rem;
      position: relative;
      top: 0.25rem;
      left: 0.3rem;
      display: flex;
      ul {
        list-style: none;
        margin-left: 0.3rem;
        li {
          padding: 0.05rem 0 0.1rem 0;
          color: white;
        }
      }
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
  }
}
.box2 {
  border: 1px solid white;

  margin-top: -0.14rem;
  background-color: white;
  border-radius: 4% 4% 0 0;

  ul:nth-of-type(1) {
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin-top: 0.1rem;
    li {
      text-align: center;

      p {
        height: 0.25rem;
        width: 0.7rem;
        text-align: center;
      }
      p:nth-of-type(2) {
        color: #979798;
      }
    }
  }
  ul:nth-of-type(2) {
    padding:0.1rem;
    li{
      border-bottom:1px solid #efefef;
       padding:0.1rem;
      span{
       position: relative;
       bottom:0.1rem;
       left:0.1rem;
      }
    }
  }
}
</style>