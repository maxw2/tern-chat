## 组件展示

`<tern-upload-file />`

<upload-file></upload-file>

<details>
<summary>查看代码（点击展开）</summary>

```javascript
export default {
  data() {
    return {
      list: [],
    }
  },
  methods: {
    change({ detail }) {
      this.list = detail.fileList
    },
    error({ detail }) {
      console.log(detail, 'error')
    },
    httpError(err) {
      console.log('httpError', err)
    },
  },
  template: `
        <div>
            <tern-upload-file @change="change" @error="error" :httpError="httpError">
                <el-button>上传</el-button>
            </tern-upload-file>
            <el-image 
                class='w-[200px] h-[200px]' 
                v-for="(item,index) in list" 
                :key="item.uid"
                :src="item.baseURL" 
                :preview-src-list="[item.baseURL]" 
                :initial-index="0" 
            />
        </div>
    `,
}
```

</details>

## UploadFile API

| 属性名            | 类型                                             | 默认值      | 描述                             |
| ----------------- | ------------------------------------------------ | ----------- | -------------------------------- |
| `accept`          | `string`                                         | `'image/*'` | 可上传的文件类型（MIME）         |
| `multiple`        | `boolean`                                        | `false`     | 是否支持多选                     |
| `headers`         | `object`                                         | `{}`        | 请求头                           |
| `action`          | `string`                                         | `"#"`       | 上传地址                         |
| `method`          | `string`                                         | `"POST"`    | 请求方法                         |
| `name`            | `string`                                         | `"file"`    | 上传字段名                       |
| `withCredentials` | `boolean`                                        | `false`     | 是否携带 cookie 等凭据           |
| `limit`           | `number`                                         | `1`         | 最大上传文件数量限制             |
| `autoUpload`      | `boolean`                                        | `true`      | 是否选择文件后自动上传           |
| `httpRequest`     | `(files: UploadFile[]) => any`                   | `undefined` | 自定义上传请求方法               |
| `beforeUpload`    | `(files: UploadFile[]) => Promise<UploadFile[]>` | `undefined` | 上传前处理，返回处理后的文件列表 |
| `httpProgress`    | `(evt: Progress) => void`                        | `undefined` | 上传进度回调                     |
| `httpSuccess`     | `(xhr: XMLHttpRequest) => void`                  | `undefined` | 上传成功回调                     |
| `httpError`       | `(xhr: XMLHttpRequest) => void`                  | `undefined` | 上传失败回调                     |

## UploadFile Events

| 事件名   | 描述               | 事件内容结构                                                                |
| -------- | ------------------ | --------------------------------------------------------------------------- |
| `change` | 文件列表变化时触发 | `{ detail: { fileList: UploadFile[] } }`                                    |
| `error`  | 错误发生时触发     | `{ detail: { message: string, limit: number, fileList: UploadFile[] } }` |

## UploadFile Slots

| 插槽名    | 描述           |
| --------- | -------------- |
| `defaule` | 自定义默认内容 |
