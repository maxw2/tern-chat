import VirtualList from './example/virtualList.js'
import Upload from './example/uploadFile.js'
import Image from './example/image.js'
import EmojiBox from './example/emojiBox.js'
import Scroll from './example/scroll.js'
import Chart from './example/chart.js'

const vueComponents = {
    'virtual-list': VirtualList,
    'upload-file': Upload,
    'image-load': Image,
    'emoji-box': EmojiBox,
    'scroll': Scroll,
    'chart': Chart,
    'el-icon': ElementPlus.ElIcon,
    'el-button': ElementPlus.ElButton,
    'el-image': ElementPlus.ElImage,
    'el-popover': ElementPlus.ElPopover,
    'el-input': ElementPlus.ElInput,
    // Compass: ElementPlusIconsVue.Compass,
}


const vueGlobalOptions = {
    data() {
        return {
            mockMessages: Mock.mock({
                'messages|5': [
                    {
                        'id|+1': 1,
                        'type|1': ['text', 'emoji', 'image', 'voice'],
                        'content': function () {
                            switch (this.type) {
                                case 'text':
                                    return Mock.Random.csentence(5, 15)
                                case 'emoji':
                                    return Mock.Random.pick(['😊', '😂', '👍', '❤️', '😭'])
                                case 'image':
                                    return Mock.Random.image('300x200', '#ccc', '#000', 'image')
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
            list: new Array(100).fill(0).map((_, index) => index + 1),
            renderItem(item) {
                return `<div class='h-[50px]' style='height: 50px;'>${item} + renderItems</div>`
            }
        }
    }
}

window.$docsify.vueComponents = vueComponents
window.$docsify.vueGlobalOptions = vueGlobalOptions