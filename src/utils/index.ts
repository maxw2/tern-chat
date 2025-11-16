/**
 * 将所有传入属性拼接成属性字符串插入 innerHTML
 */
export function spreadAttributes(that: Element) {
  const attrs = Array.from(that.attributes)
  return attrs
    .map((attr) => {
      const name = attr.name
      const value = attr.value
      return `${name}="${value}"`
    })
    .join(' ')
}

/**
 * 节流函数
 */

export function throttle(fn: Function, delay: number = 500) {
  let timer: number | null = null

  return function (this: any, ...args: any[]) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

/**
 * 防抖函数
 */

export function debounce(fn: Function, delay: number = 500) {
  let timer: number = null
  return function (this: any, ...args: any[]) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

/**
 * 滚动方向
 */
export function isScrollDown(oldScroll: number, newScroll: number): boolean {
  if (oldScroll > newScroll) return false
  else return true
}
