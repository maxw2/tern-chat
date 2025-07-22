export default {
    data() {
        return {
            imgSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            loadingSrc: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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
        
    `
}