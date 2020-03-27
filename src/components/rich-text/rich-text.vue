<template>
  <div class="box">
    <div
      ref="richText"
      class="rich-text"
      contenteditable="true"
      :id="tagId"
      :value="newValue"
      @click="inputClick"
      @input="inputHandle"
      @keydown.delete="deleteHandle"
    ></div>
    <div v-html="newValue"></div>
    <div>
      <p>addTag</p>
      <input type="text" v-model="inputValue" />
      <button @click="addTag">addTag</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: { type: String, default: '' }
  },
  data() {
    return {
      newValue: this.value,
      inputValue: '',
      savedRange: {},
      tagId: this.createId(),
      subTagId: null
    }
  },
  watch: {
    newValue(val) {}
  },
  mounted() {
    // 手动聚焦 防止首次进入页面 没有range对象
    this.$refs.richText.focus()
    // 初始化range 对象
    // this.init()
    // 生成id
    this.createId()
    // 监听 光标变动事件 更新range
    document.addEventListener('selectionchange', this.init)
  },
  destroyed() {
    document.removeEventListener('selectionchange', this.init)
  },
  methods: {
    updateData(value) {
      this.$emit('input', value)
    },
    inputHandle(e) {
      this.updateData(e.target.innerText)
      this.newValue = e.target.innerText
    },
    deleteHandle(e) {
      // if (this.subTagId) {
      //   const node = document.getElementById(this.subTagId)
      //   this.$refs.richText.removeChild(node)
      //   this.subTagId = null
      //   e.preventDefault()
      //   this.inputHandle()
      // }
    },
    // a 标签特殊处理 
    inputClick(e) {
      // 监听点击事件
      // this.isLocked = true;
      // const TAG_NAME = e.target.nodeName
      // if (TAG_NAME === 'A') {
      //   // 点击模版标签时，记录id
      //   this.subTagId = e.target.id
      //   e.target.className = 'active'
      // } else if (this.subTagId) {
      //   // 清空active样式
      //   let target = document.getElementById(this.subTagId)
      //   target.className = ''
      //   this.subTagId = null
      // } else {
      //   this.subTagId = null
      // }
    },
    addTag() {
      const node = 'a'
      const tag = document.createElement(node)
      // 为a标签单独添加属性
      if (node === 'a') {
        tag.style.cssText = `cursor: pointer;
        -webkit-user-modify: read-only !important;
        color: red;`
      }
      tag.innerText = this.inputValue
      tag.setAttribute('id', this.createId())
      this.subTagId = this.createId()

      this.insertTag(tag)
    },

    insertTag(node) {
      // this.savedRange.deleteContents()
      this.savedRange.insertNode(node)

      const target = this.$refs.richText
      this.updateData(target.innerHTML)
      this.newValue = target.innerText
    },
    init() {
      const selection = getSelection()
      const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null

      // 判断当前聚焦的元素是否是我指定的元素 如果是则储存range
      if (
        range &&
        range.commonAncestorContainer.ownerDocument.activeElement.id ===
          this.tagId
      ) {
        this.savedRange = range
      }
    },
    createId() {
      return `${Math.ceil(Math.random() * 1000)}`
    }
  }
}
</script>
<style lang="less" scoped>
@import url('./rich-text.less');
</style>
