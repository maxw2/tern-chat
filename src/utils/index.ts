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
