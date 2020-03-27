<template>
  <div>
    <rich-text v-model="value" @input="inputHandler"></rich-text>
  </div>
</template>
<script>
import richText from '@/components/rich-text/rich-text.vue'
export default {
  components: { richText },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    inputHandler(value) {
      // console.log(value)
    }
  }
}
</script>
<style lang="less">
@import '~@/assets/style/reset.less';
@import '~@/assets/style/common.less';
</style>

<style lang="less" scoped>
.m-form {
  width: 300px;
  margin: 100px auto;
  .form-item {
    margin-bottom: 10px;
  }
}
</style>
