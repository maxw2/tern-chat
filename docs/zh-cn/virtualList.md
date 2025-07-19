## 组件展示

<virtual-list></virtual-list>

<details>
<summary>查看代码（点击展开）</summary>

```javascript
export default {
  data() {
    return {
      list: new Array(10000).fill(0).map((_, i) => i),
      currentList: [],
      renderItem(item) {
        return `<div class='h-[50px]' style='height: 50px;'>${item} + vue</div>`
      },
    }
  },
  methods: {
    change({ detail }) {
      this.currentList = detail.list
    },
  },
  template: `
    <tern-virtual-list
      class='w-[500px] h-[300px]' 
      :list="list" 
      @change="change"
    >
      <div v-for="item in currentList" :key="item" class="h-[50px]" >{{item}}</div>
    </tern-virtual-list>`,
}
```

</details>

## VirtualList API

| 属性名       | 类型                                       | 默认值      | 描述                                   |
| ------------ | ------------------------------------------ | ----------- | -------------------------------------- |
| `list`       | `unknown[]`                                | `[]`        | 需要渲染的完整数据列表                 |
| `estimate`   | `number`                                   | `50`        | 每项预估高度（单位：px）               |
| `buffer`     | `number`                                   | `5`         | 向上/向下多渲染的缓冲项数              |
| `itemMax`    | `number`                                   | `10`        | 当前可视区域最大渲染项数               |
| `renderItem` | `(item: unknown, index: number) => string` | `undefined` | 自定义列表项渲染函数，返回 HTML 字符串 |

## VirtualList Events

| 事件名   | 说明                                                      |
| -------- | --------------------------------------------------------- |
| `change` | 滚动渲染变化时触发，返回当前可视数据 `list` 及 `startIdx` |

## VirtualList Slots

| 插槽名    | 描述           |
| --------- | -------------- |
| `defaule` | 自定义默认内容 |
