export default {
    data() {
        return {
            mockMessages: Mock.mock({
                'messages|500': [
                    {
                        'id|+1': 1,
                        'type|1': ['text', 'emoji', 'image'],
                        'content': function () {
                            switch (this.type) {
                                case 'text':
                                    return Mock.Random.csentence(5, 100)
                                case 'emoji':
                                    return Mock.Random.pick(['😊', '😂', '👍', '❤️', '😭'])
                                case 'image':
                                    return Mock.Random.dataImage()
                                case 'voice':
                                    return 'voice_message_' + Mock.Random.integer(1, 5)
                            }
                        },
                        'timestamp': () => new Date(Date.now() - Mock.Random.integer(1, 60) * 60 * 1000),
                        'sender|1': ['user', 'contact'],
                        'duration': function () {
                            return this.type === 'voice' ? Mock.Random.integer(5, 20) : undefined
                        },
                    },
                ],
            }),
            currentList: [],
            renderItem(item) {
                return `<div class=''>
                    <div>
                        <tern-image class='w-[24px] h-[24px] rounded-full bg-[#e4e4e7]'></tern-image>
                        <span class='text-[12px]'>张小明</span>
                    </div>
                </div>`
            }
        }
    },
    methods: {
        change({ detail }) {
            this.currentList = detail.list
        },
    },
    template: `
       <div class="w-[375px] h-[700px] overflow-auto border flex flex-col">
            <tern-virtual-list
                class='w-[100%] h-[1px] flex-1 ' 
                :list="mockMessages.messages"
                :estimate="120"
                :autoHeight="true"
                @change="change"
                >
                <div class='py-[4px] px-[10px] mb-[16px]' v-for="item in currentList" :key="item.id">
                    <div v-if='item.sender === "user"'>
                        <div>
                            <div class='flex align-center mb-[4px]'>
                                <tern-image 
                                    class='w-[24px] h-[24px] mr-[6px] rounded-full bg-[#e4e4e7] overflow-hidden' 
                                    src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                                ></tern-image>
                                <span class='text-[12px]'>张小明</span>
                            </div>
                            <tern-image 
                                v-if="item.type === 'image'" 
                                class='max-w-[200px] max-h-[200px] bg-[#e4e4e7] rounded-lg overflow-hidden' 
                                :src='item.content'
                            ></tern-image>
                            <div v-else class='border p-[8px] rounded-[10px] text-[14px] bg-[#f4f4f5] inline-block max-w-[65%] break-words'>{{ item.content }}</div> 
                            <div class='text-[12px] mt-[4px]'>{{ item.timestamp.toLocaleTimeString() }}</div>
                        </div>
                    </div>
                    <div v-else class='text-end'>
                        <div>
                            <tern-image v-if="item.type === 'image'" class='w-[200px] h-[200px] bg-[#e4e4e7] rounded-lg overflow-hidden inline-block' fit='none' :src='item.content'></tern-image>
                            <div v-else class='border p-[8px] rounded-[10px] text-[14px] bg-[#18181b] text-white inline-block max-w-[65%] break-words text-left'>{{ item.content }}</div> 
                            <div class='text-[12px] mt-[4px]'>{{ item.timestamp.toLocaleTimeString() }}</div>
                        </div>
                        
                    </div>
                </div>
            </tern-virtual-list>
            <div class='flex p-[8px] border-t'>
                <el-input class='pr-[8px]' v-model="input" placeholder="请输入内容"></el-input>
                <el-button icon="el-icon-search" circle></el-button>
                <el-button icon="el-icon-search" circle></el-button>
                <el-button type="primary" icon="el-icon-delete"></el-button>
            </div>
        </div>`
}