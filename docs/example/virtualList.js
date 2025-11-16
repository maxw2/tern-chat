export default {
  data() {
    return {
      list: new Array(5000000).fill(0).map((_, i) => i),
      currentList: [],
      renderItem(item) {
        return `<div class='h-[50px]' style='height: 50px;'>${item} + renderItems</div>`
      },
    }
  },
  methods: {
    change({ detail }) {
      this.currentList = detail.list
    },
  },
  template: `
    <tern-virtual-list
      class='w-[400px] h-[300px]' 
      :list="list"
      :itemMax="8"
      :buffer="0"
      :renderItem="renderItem"
      @change="change"
    >
      <div v-for="item in currentList" :key="item" class="h-[50px]" >{{item}}</div>
    </tern-virtual-list>`
}
