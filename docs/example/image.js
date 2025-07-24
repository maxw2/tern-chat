export default {
    data() {
        return {
            imgSrc: 'https://dummyimage.com/1200x1200',
            loadingSrc: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            errorSrc: 'https://dummyimage.com/400&text=error',
            placeholder: 'https://dummyimage.com/400&text=loading'
        }
    },
    template: `
        <div class='h-[350px] overflow-y-auto'>
            <tern-image 
                ref='imageRef'
                v-for="item in new Array(10)" 
                class='w-[300px] h-[300px]'
                :src="imgSrc"
                :placeholder="placeholder"
                :errorSrc="errorSrc"
                >
                <div class='w-[300px] h-[300px] bg-[pink]'>加载中</div>
                <div slot="error" class='w-[300px] h-[300px] bg-[orange]'>加载失败</div>
                <div class='w-[300px] h-[300px] cursor-pointer bg-black bg-opacity-50 text-white flex justify-center items-center' slot="preview">
                    <span>预览</span>
                </div>
            </tern-image>
        </div>
        
    `
}