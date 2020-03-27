# rich-text

## 流程图

## 技术点

### 固定 range container

_正常情况下 range 的 container 是由焦点来确定的 焦点在哪里 container 就是那个元素 但是需要固定 container 为 设置了 contentEditable 属性的元素上_

解决方法：

1. 为需要聚焦的元素添加 id
2. 判断当前聚焦元素的 id 是否等于 指定元素 id

### 删除整个标签

1. [user-modify](https://www.zhangxinxu.com/study/201601/user-modify.html)
   将标签设置为只读属性（相当于将标签中的内容合并为一个整体）
2. 将标签从 dom 中移除（找到通过 id 标记的标签）

### 为 div 添加 placeholder

### selection api 简单介绍

### [selectionchange](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/selectionchange_event)

- 移动光标就会触发的事件

## 参考资料

1. [selection mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection)
2. [range mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/Range)
