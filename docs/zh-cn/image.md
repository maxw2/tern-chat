## 组件展示

`<tern-image />`

<image-load></image-load>

<details>
<summary>查看代码（点击展开）</summary>

```javascript
export default {
  data() {
    return {
      imgSrc:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      loadingSrc:
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    }
  },
  template: `
        <div class='h-[350px] overflow-y-auto'>
            <tern-image 
                v-for="item in new Array(10)" 
                class='w-[300px] h-[300px]'
                :src="imgSrc">
                <div class='w-[300px] h-[300px] bg-[pink]'>加载中</div>
                <div class='w-[300px] h-[300px] cursor-pointer bg-black bg-opacity-50 text-white flex justify-center items-center' slot="preview">
                    <span>预览</span>
                </div>
            </tern-image>
        </div>
        
    `,
}
```

</details>

## Image API

| 属性名        | 类型            | 默认值      | 说明                                                   |
| ------------- | --------------- | ----------- | ------------------------------------------------------ |
| `src`         | `string`        | `''`        | 图片的地址                                             |
| `alt`         | `string`        | `''`        | 图片的替代文本                                         |
| `placeholder` | `string?`       | `''`        | 加载中显示的占位图                                     |
| `errorSrc`    | `string?`       | `''`        | 加载失败时的错误图（未实现自动替换，但可通过插槽处理） |
| `fit`         | `string`        | `'cover'`   | 设置图片的 `object-fit` 样式，如 `cover`、`contain`    |
| `lazy`        | `boolean`       | `true`      | 是否懒加载                                             |
| `throttle`    | `number`        | `500`       | 图片进入视口后延迟加载的时间（ms）                     |
| `delay`       | `number`        | `0`         | 图片加载完成后状态变更的延迟（ms）                     |
| `httpError`   | `(evt) => void` | `undefined` | 图片加载失败时的回调                                   |

## Image Slots

| 插槽名称  | 说明                                            |
| --------- | ----------------------------------------------- |
| (default) | 当没有设置 `placeholder` 属性时用于加载中的内容 |
| `error`   | 加载失败时的自定义错误内容                      |
| `preview` | 当鼠标悬浮在加载成功的图片上时显示的预览内容    |
