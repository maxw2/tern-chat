export default {
    data() {
        return {
            show: true
        }
    },
    mounted() {

    },
    template: `
        <el-popover :width="350" style="border: none;">
            <template #reference>
                <el-button>top-start</el-button>
            </template>
            <template #default>
                <tern-emoji-box class='w-[100%]'></tern-emoji-box>
            </template>
        </el-popover>
        <tern-emoji-box class='border h-[200px]'></tern-emoji-box>
        `
}