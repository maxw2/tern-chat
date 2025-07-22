export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        change({ detail }) {
            this.list = [...detail.fileList]
            console.log(detail)
        },
        error({ detail }) {
            console.log(detail, 'error')
        },
        httpError(err) {
            console.log('httpError', err)
        }
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
    `
}
