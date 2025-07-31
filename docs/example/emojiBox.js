export default {
    data() {
        return {
            show: true
        }
    },
    mounted() {

    },
    template: `
        <el-button @click="() => this.show = !this.show"></el-button>
        <tern-scroll class='w-[400px] border cursor-pointer' v-if="show" align='start'>
            <div class='w-[50px] h-[50px] border text-center box-border' v-for="(item, index) in 100" :key="index">
                <span>{{ index }}</span>
            </div>
        </tern-scroll>
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