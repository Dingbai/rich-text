// 原始 list 如下
let list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
]
// const result = convert(list)

function convert(list) {
  let arr = []
  let parentIdMap = {}
  list.forEach(item => {
    if (item.parentId === 0) {
      if (!item.children) {
        item.children = []
      }
      arr.push(item)

      parentIdMap[item.id] = arr.length - 1
    } else {
      if (parentIdMap[item.parentId]) {
        arr[parentIdMap[item.parentId]].children.push(item)
      } else {
        if (!item.children) {
          item.children = []
        }
      }

      // if(item.id === item.parentId){

      // }
    }
  })
}

function recursion(arr,parentId) {
  arr.forEach(item=>{
    if(item.id === parentId){ 

    }
  })
}
convert(list)
// 转换后的结果如下
// let r = [
//   {
//     id: 1,
//     name: '部门A',
//     parentId: 0,
//     children: [
//       {
//         id: 3,
//         name: '部门C',
//         parentId: 1,
//         children: [
//           {
//             id: 6,
//             name: '部门F',
//             parentId: 3
//           }, {
//             id: 16,
//             name: '部门L',
//             parentId: 3
//           }
//         ]
//       },
//       {
//         id: 4,
//         name: '部门D',
//         parentId: 1,
//         children: [
//           {
//             id: 8,
//             name: '部门H',
//             parentId: 4
//           }
//         ]
//       }
//     ]
//   },
// ];
