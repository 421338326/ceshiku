<template>
  <div>
    <foot></foot>
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  font-size: 0.14rem;
}
</style>

<script>
import foot from "./components/foot.vue";
export default {
  components: {
    foot
  }
};
</script>
