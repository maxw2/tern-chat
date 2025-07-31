import { css, html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

interface EmojiList {
  id: string | number
  name?: string
  icon: string
  list: Array<string>
}

@customElement('tern-emoji-box')
export class TernEmojiBox extends LitElement {
  static styles = css`
    :host {
      width: 375px;
      display: block;
      user-select: none;
    }
    .emoji-box {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .tabs {
        width: 100%;
        font-size: 16px;
        background: #f4f4f5;
        padding: 2px;
        box-sizing: border-box;
        .tab {
          text-align: center;
          line-height: 34px;
          cursor: pointer;
          width: 76px;
          height: 34px;
          box-sizing: border-box;
        }
        .tern-scroll-active {
          border-radius: 4px;
          background: white;
        }
      }
      .list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
        font-size: 18px;
        flex: 1;
        overflow: auto;
        .item {
          width: 40px;
          height: 40px;
          border-radius: 4px;
          cursor: pointer;
          &:hover {
            background: #f4f4f5;
          }
          .icon {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  `

  emoji = [
    '😀',
    '😁',
    '😂',
    '🤣',
    '😃',
    '😄',
    '😅',
    '😆',
    '😉',
    '😊',
    '😋',
    '😎',
    '😍',
    '😘',
    '😗',
    '😙',
    '😚',
    '😇',
    '🙂',
    '🤗',
    '🤔',
  ]

  emojiList: Array<EmojiList> = [
    {
      id: 'smileys',
      name: 'smileys',
      icon: '😀',
      list: [
        '😀',
        '😁',
        '😂',
        '🤣',
        '😃',
        '😄',
        '😅',
        '😆',
        '😉',
        '😊',
        '😋',
        '😎',
        '😍',
        '😘',
        '😗',
        '😙',
        '😚',
        '😇',
        '😐',
        '😑',
        '😶',
        '😏',
        '😣',
        '😥',
        '😮',
        '😯',
        '😪',
        '😫',
        '😴',
        '😌',
        '😛',
        '😜',
        '😝',
        '😒',
        '😓',
        '😔',
        '😕',
        '👍',
        '👎',
        '👌',
        '✌️',
        '🤞',
        '🤟',
        '🤘',
        '🤙',
        '👈',
        '👉',
        '👆',
        '🖕',
        '👇',
        '☝️',
        '👋',
        '🤚',
        '🖐️',
        '✋',
        '🖖',
        '👏',
        '🙌',
        '🤲',
        '🤝',
        '🙏',
        '✍️',
        '💅',
        '🤳',
        '💪',
        '🦾',
        '🦿',
        '🦵',
        '🦶',
        '👂',
        '🦻',
        '👃',
        '🧠',
      ],
    },
    {
      id: 'hearts',
      name: 'hearts',
      icon: '❤️',
      list: [
        '❤️',
        '🧡',
        '💛',
        '💚',
        '💙',
        '💜',
        '🖤',
        '🤍',
        '🤎',
        '💔',
        '❣️',
        '💕',
        '💞',
        '💓',
        '💗',
        '💖',
        '💘',
        '💝',
        '💟',
        '♥️',
        '💌',
        '💋',
        '💍',
        '💎',
      ],
    },
    {
      id: 'animals',
      name: 'animals',
      icon: '🐶',
      list: [
        '🐶',
        '🐱',
        '🐭',
        '🐹',
        '🐰',
        '🦊',
        '🐻',
        '🐼',
        '🐨',
        '🐯',
        '🦁',
        '🐮',
        '🐷',
        '🐽',
        '🐸',
        '🐵',
        '🙈',
        '🙉',
        '🙊',
        '🐒',
        '🐔',
        '🐧',
        '🐦',
        '🐤',
        '🐣',
        '🐥',
        '🦆',
        '🦅',
        '🦉',
        '🦇',
        '🐺',
        '🐗',
        '🐴',
        '🦄',
        '🐝',
        '🐛',
      ],
    },
    {
      id: 'food',
      name: 'food',
      icon: '🍎',
      list: [
        '🍎',
        '🍐',
        '🍊',
        '🍋',
        '🍌',
        '🍉',
        '🍇',
        '🍓',
        '🍈',
        '🍒',
        '🍑',
        '🥭',
        '🍍',
        '🥥',
        '🥝',
        '🍅',
        '🍆',
        '🥑',
        '🥦',
        '🥬',
        '🥒',
        '🌶️',
        '🌽',
        '🥕',
        '🧄',
        '🧅',
        '🥔',
        '🍠',
        '🥐',
        '🍞',
        '🥖',
        '🥨',
        '🧀',
        '🥚',
        '🍳',
        '🧈',
      ],
    },

    {
      id: 'travel',
      name: 'travel',
      icon: '🚗',
      list: [
        '🚗',
        '🚕',
        '🚙',
        '🚌',
        '🚎',
        '🏎️',
        '🚓',
        '🚑',
        '🚒',
        '🚐',
        '🛻',
        '🚚',
        '🚛',
        '🚜',
        '🏍️',
        '🛵',
        '🚲',
        '🛴',
        '🛺',
        '🚨',
        '🚔',
        '🚍',
        '🚘',
        '🚖',
        '🚡',
        '🚠',
        '🚟',
        '🚃',
        '🚋',
        '🚞',
        '🚝',
        '🚄',
        '🚅',
        '🚈',
        '🚂',
        '🚆',
      ],
    },
  ]
  @property({ type: String })
  mountEl: string = ''
  @state()
  index: number = 0

  mount() {
    if (this.mountEl) {
      const emojiBox = document.createElement('tern-emoji-box')
      document.querySelector(this.mountEl).appendChild(emojiBox)
    }
  }

  render() {
    return html`<div class="emoji-box">
      <tern-scroll class='tabs' align="start">
        ${this.emojiList.map(
          (tab, idx) => html`<div
            class="tab"
            @click=${() => (this.index = idx)}
          >
            <span class="icon">${tab.icon}</span>
          </div>`
        )}
      </tern-scroll>
      <!-- <div class="tabs">
        <div style="width: ${this.emojiList.length * 76}px">
          ${this.emojiList.map(
        (tab, idx) => html`<span
          class="tab ${this.index === idx ? 'active' : null}"
          @click=${() => (this.index = idx)}
        >
          <span class="icon">${tab.icon}</span>
        </span>`
      )}
        </div>
      </div> -->
      <div class="list">
        ${this.emojiList[this.index].list.map(
          (item) =>
            html`<div class="item"><div class="icon">${item}</div></div>`
        )}
      </div>
    </div>`
  }
}
