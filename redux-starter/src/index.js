const trim = str => str.trim()
const wrapDiv = str => `<div>${str}</div>`
const input = "   Javascript    "

const result = wrapDiv(trim(input))

const transform = pipe(wrapDiv,trim)