/**
 *
 * @param {*} vm vue 实例
 * @param {*} componentName 想要找的组件名称
 * @param {*} exceptMe 是否排除本身 默认是
 */
function findBrother(vm, componentName, exceptMe = true) {
  let parent = vm.$parent
  let res = parent.$children.filter(child => {
    return child.$options.name === componentName
  })
  let index = res.findIndex(item => item._uid === vm._uid)

  if (exceptMe) res.splice(index, 1)

  return res
}

export { findBrother }

function findComponentUpward(vm, componentName) {
  let parent = vm.$parent
  let name = parent.$options.name

  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent

    if (parent) {
      name = parent.$options.name
    }
  }
  console.log('?????')
  console.log('----------------')
  if (parent) {
    return parent
  }
}

export { findComponentUpward }

function findComponentsUpward(vm, componentName) {
  let parent = vm.$parent
  let name = parent.$options.name
  let res = []
  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent

    if (parent) {
      name = parent.$options.name
    }
  }

  if (parent) {
    res.push(parent)
  }
  return res
}

export { findComponentsUpward }

function findComponentDownWard(vm, componentName) {
  let children = vm.$children

  let res = children.filter(child => child.$options.name === componentName)

  return res
}

export { findComponentDownWard }

function findComponentsDownWard(vm, componentName) {
  let children = vm.$children

  let res = children.filter(child => child.$options.name === componentName)

  return res
}

export { findComponentsDownWard }
