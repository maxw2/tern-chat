export default {
    data() {
        return {

        }
    },
    template: `
        <tern-scroll class='w-[400px] border cursor-pointer' align='start'>
            <div class='w-[50px] h-[50px] border text-center box-border' v-for="(item, index) in 100" :key="index">
                <span>{{ index }}</span>
            </div>
        </tern-scroll>`
}