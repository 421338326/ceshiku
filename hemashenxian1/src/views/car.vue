<template>
  <div class="fenlei">
    <tou></tou>

    <!-- 标题 -->
    <p class="p1">
      <span class="sp2">购物车</span>
    </p>
    <span class="sp1">删除</span>

    <!-- main -->
    <div class="mains">
      <div class="m1" v-for="(item,index) in tongyong" :key="index">
        <div>
          <img :src="item.image" alt />
        </div>
        <div>
          {{item.name}}
          <span>￥{{item.price}}</span>
        </div>
      </div>
    </div>

    <!-- 结算 -->
    <div class="jiesuan">
      <h1>全选</h1>
      <p>
        合计：￥
        <span></span>
      </p>
      <div>
        <mt-button type="primary" size="large" @click="show()">去结算</mt-button>
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
      tongyong: [],
      index: "",
      fenlei: ""
    };
  },
  methods: {
    show() {
      Toast({
        message: "暂未开放",
        position: "middle",
        duration: 1000
      });
    },
    get() {
      var api = "data/getGoods.txt";
      this.axios.get(api).then(res => {
        if (
          this.$store.state.count.indexOf(
            "汇源100%苹果汁1000ml/盒浓缩果汁饮料鲜果饮品"
          ) != -1
        ) {
          var a = res.data.data[0];
          this.tongyong.push(a[2]);
        }
        if (
          this.$store.state.count.indexOf(
            "沙宣洗发水 修护水养型750ml抚平毛躁修护损伤"
          ) != -1
        ) {
          var a = res.data.data[0];
          this.tongyong.push(a[3]);
        }
        if (
          this.$store.state.count.indexOf("桌面收纳桶杂物桶垃圾桶纸篓") != -1
        ) {
          var a = res.data.data[0];
          this.tongyong.push(a[4]);
        }
        if (
          this.$store.state.count.indexOf(
            "碧根果225g零食坚果山核桃长寿果干果奶油味"
          ) != -1
        ) {
          var a = res.data.data[0];
          this.tongyong.push(a[5]);
        }
        if (
          this.$store.state.count.indexOf("德芙士力架全家桶巧克力460g桶装") !=
          -1
        ) {
          var a = res.data.data[0];
          this.tongyong.push(a[6]);
        }
        /* 2 */
        if (
          this.$store.state.count.indexOf(
            "张裕特选级干红葡萄酒（圆筒）750ml*6红酒正品"
          ) != -1
        ) {
          var a = res.data.data[1];
          this.tongyong.push(a[0]);
        }
        if (
          this.$store.state.count.indexOf(
            "浪漫之花红酒西班牙进口桃红起泡葡萄酒750ml甜型"
          ) != -1
        ) {
          var a = res.data.data[1];
          this.tongyong.push(a[1]);
        }
        if (
          this.$store.state.count.indexOf(
            "RIO伏特加鸡尾酒 锐澳微醺系列5口味 330ml*16"
          ) != -1
        ) {
          var a = res.data.data[1];
          this.tongyong.push(a[2]);
        }
        if (
          this.$store.state.count.indexOf(
            "Absolut伏特加原味500ml瑞典进口烈酒洋酒 鸡尾酒基酒"
          ) != -1
        ) {
          var a = res.data.data[1];
          this.tongyong.push(a[3]);
        }
        if (
          this.$store.state.count.indexOf(
            "Budweiser/百威啤酒 小麦醇正拉罐500ml*18听"
          ) != -1
        ) {
          var a = res.data.data[1];
          this.tongyong.push(a[4]);
        }
        if (
          this.$store.state.count.indexOf(
            "古越龙山绍兴黄酒清醇三年500ml/瓶花雕酒老酒"
          ) != -1
        ) {
          var a = res.data.data[1];
          this.tongyong.push(a[5]);
        }
        if (
          this.$store.state.count.indexOf(
            "喜力 Heineken拉罐啤酒500ml*24罐/箱分享装整箱装"
          ) != -1
        ) {
          var a = res.data.data[1];
          this.tongyong.push(a[6]);
        }
        /* 3 */
        if (
          this.$store.state.count.indexOf("农夫山泉100%NFC橙汁300ml*24瓶/箱") !=
          -1
        ) {
          var a = res.data.data[2];
          this.tongyong.push(a[0]);
        }
        if (
          this.$store.state.count.indexOf(
            "法国进口 evian/依云 矿泉水330ml*20/箱 玻璃瓶整箱"
          ) != -1
        ) {
          var a = res.data.data[2];
          this.tongyong.push(a[1]);
        }
        if (
          this.$store.state.count.indexOf(
            "农夫山泉 饮用天然水 550ml*24瓶/箱"
          ) != -1
        ) {
          var a = res.data.data[2];
          this.tongyong.push(a[2]);
        }
        if (
          this.$store.state.count.indexOf(
            "名仁青梅味苏打汽水气泡水汤力水330ml*24罐"
          ) != -1
        ) {
          var a = res.data.data[2];
          this.tongyong.push(a[3]);
        }
        if (
          this.$store.state.count.indexOf(
            "Aquarius/正广和酸梅汤饮料夏季饮品500ml*24酸甜"
          ) != -1
        ) {
          var a = res.data.data[2];
          this.tongyong.push(a[4]);
        }
        if (
          this.$store.state.count.indexOf(
            "统一 晴蓝 阿萨姆奶茶 500ml*15瓶 遇见好心情"
          ) != -1
        ) {
          var a = res.data.data[2];
          this.tongyong.push(a[5]);
        }

        /* 4 */
        if (
          this.$store.state.count.indexOf(
            "澳大利亚原装进口德运全脂纯牛奶1L*10盒 整箱"
          ) != -1
        ) {
          var a = res.data.data[3];
          this.tongyong.push(a[0]);
        }
        if (
          this.$store.state.count.indexOf(
            "德亚Weidendorf全脂牛奶200mlx30/箱"
          ) != -1
        ) {
          var a = res.data.data[3];
          this.tongyong.push(a[1]);
        }
        if (
          this.$store.state.count.indexOf(
            "蒙牛纯甄常温酸奶200g*24盒 丹麦进口菌种"
          ) != -1
        ) {
          var a = res.data.data[3];
          this.tongyong.push(a[2]);
        }
        if (
          this.$store.state.count.indexOf(
            "西班牙进口维加Vega脱脂纯牛奶1L*6 早餐饼干配牛奶"
          ) != -1
        ) {
          var a = res.data.data[3];
          this.tongyong.push(a[3]);
        }

        /* 5 */
        if (
          this.$store.state.count.indexOf(
            "福临门 葵花籽原香食用调和油 5L/桶 健康食用油"
          ) != -1
        ) {
          var a = res.data.data[4];
          this.tongyong.push(a[0]);
        }
        if (
          this.$store.state.count.indexOf(
            "金龙鱼 花生浓香食用调和油 5L/桶 食用油"
          ) != -1
        ) {
          var a = res.data.data[4];
          this.tongyong.push(a[1]);
        }
        if (
          this.$store.state.count.indexOf(
            "knife/刀唛健康组合装芥花籽橄榄油2.2L X 2"
          ) != -1
        ) {
          var a = res.data.data[4];
          this.tongyong.push(a[2]);
        }
        if (
          this.$store.state.count.indexOf(
            "多力 5珍宝非转基因葵花籽食用调和油 1.8L 科学压榨"
          ) != -1
        ) {
          var a = res.data.data[4];
          this.tongyong.push(a[3]);
        }

        /* 6 */
        if (
          this.$store.state.count.indexOf(
            "海飞丝洗发水 清爽去油型男女士洗发水750ml"
          ) != -1
        ) {
          var a = res.data.data[5];
          this.tongyong.push(a[0]);
        }
        if (
          this.$store.state.count.indexOf(
            "潘婷洗发水 乳液修护洗发露750ml秀发"
          ) != -1
        ) {
          var a = res.data.data[5];
          this.tongyong.push(a[1]);
        }

        if (
          this.$store.state.count.indexOf(
            "日本进口Rosette露姬婷海泥深层清洁洗面奶120g绿管"
          ) != -1
        ) {
          var a = res.data.data[5];
          this.tongyong.push(a[3]);
        }
        /* 7 */

        /* 8 */

        /* 9 */

        /* 10 */

        /* 11 */
        if (
          this.$store.state.count.indexOf(
            "皇冠印尼进口丹麦曲奇饼干原味900g/盒零食"
          ) != -1
        ) {
          var a = res.data.data[10];
          this.tongyong.push(a[0]);
        }
        if (
          this.$store.state.count.indexOf(
            "德运全脂高钙青少年成人冲饮牛奶粉1kg"
          ) != -1
        ) {
          var a = res.data.data[10];
          this.tongyong.push(a[1]);
        }
      });
    }
  },

  mounted() {
    this.get();
    VueEvent.$on("to-car", message => {
      //这里要用箭头函数，要不this指向有问题
      this.fenlei = message;
      console.log(this.fenlei);
    });
  }
};
</script>

<style lang="less" scoped>
.fenlei {
  .p1 {
    border-bottom: 1px solid #f2f2f2;
  }
  position: relative;
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
    width: 0.3rem;
    height: 0.2rem;
    position: absolute;
    right: 0.2rem;
    top: 0.5rem;
    img {
      width: 100%;
    }
  }
}
.jiesuan {
  border-top: 1px solid #85817f;
  position: fixed;
  bottom: 0.52rem;
  display: block;
  width: 100%;
  height: 0.5rem;
  background-color: white;
  div {
    position: absolute;
    right: 0;
    top: 0rem;
    width: 40%;
    height: 100%;
  }
  h1 {
    position: relative;
    top: 0.1rem;
    left: 0.2rem;
  }
}
.mint-button {
  height: 0.5rem;
}

.mains {
  margin-top: 0.2rem;
  margin-bottom: 1.2rem;
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
