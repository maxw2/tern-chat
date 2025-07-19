export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        change({ detail }) {
            this.list = detail.fileList
            console.log(detail)
        },
        error({ detail }) {
            detail.fileList = []
            console.log(detail)
        },
        onError(err) {
            console.log('error', err)
        }
    },
    template: `
        <div>
            <tern-upload-file @change="change" @error="error">
                <el-button>上传</el-button>
            </tern-upload-file>
            <el-image class='w-[200px] h-[200px]' v-for="(item,index) in list" :src="item.baseURL" :preview-src-list="[item.baseURL]" :initial-index="0" />
        </div>
    `
}
