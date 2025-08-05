## 组件

<output data-lang="output">
<div class="w-[375px] h-[670px] border"></div>
    <div class='h-[350px] overflow-y-auto'>
        <tern-image 
            v-for="item in new Array(10)" 
            class='w-[300px] h-[300px]'
            src='https://dummyimage.com/1200x1200'
            >
            <div class='w-[300px] h-[300px] bg-[pink]'>加载中</div>
            <div slot="error" class='w-[300px] h-[300px] bg-[orange]'>加载失败</div>
            <div class='w-[300px] h-[300px] cursor-pointer bg-black bg-opacity-50 text-white flex justify-center items-center' slot="preview">
                <span>预览</span>
            </div>
        </tern-image>
    </div>
</output>
