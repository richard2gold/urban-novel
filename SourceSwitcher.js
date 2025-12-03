let currentSourceIndex = 0

export function getChapterUrl(book, chapterId) {
  const sources = book.sources
  const source = sources[currentSourceIndex % sources.length]
  currentSourceIndex++
  return `${source.base}/${book.id}/${chapterId}`
}

export function getCurrentSourceName(book) {
  return book.sources[(currentSourceIndex - 1) % book.sources.length]?.name || "未知源"
}
