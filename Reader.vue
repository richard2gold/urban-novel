<template>
  <div class="reader">
    <div class="toolbar">
      <router-link :to="`/book/${bookId}`">← 返回</router-link>
      <span>来源：{{ sourceName }}（自动切换）</span>
    </div>
    
    <h2>{{ chapter?.title || '加载中...' }}</h2>
    
    <div class="content">
      <!-- 模拟正文，真实项目用 iframe 或 fetch 正文 -->
      <p>【章节正文加载中…】</p>
      <p>当前使用书源：{{ chapterUrl }}</p>
      <p>（实际项目这里用 iframe src="{{ chapterUrl }}" sandbox 隔离加载）</p>
      <p style="color:#e63946;margin-top:50px;">提示：如果卡顿或403，3秒后将自动切换下一个源</p>
    </div>

    <div class="nav">
      <button @click="prev" :disabled="chapterId <= 1">上一章</button>
      <button @click="next">下一章</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBook } from '../data/books.js'
import { getChapterUrl, getCurrentSourceName } from './SourceSwitcher.js'

const route = useRoute()
const router = useRouter()
const bookId = Number(route.params.bookId)
const chapterId = ref(Number(route.params.chapterId))

const book = getBook(bookId)
const chapter = computed(() => book?.chapters.find(c => c.id === chapterId.value))

const chapterUrl = computed(() => getChapterUrl(book, chapterId.value))
const sourceName = computed(() => getCurrentSourceName(book))

const next = () => {
  if (chapterId.value < book.totalChapters) {
    chapterId.value++
    router.push(`/read/${bookId}/${chapterId.value}`)
  }
}
const prev = () => {
  if (chapterId.value > 1) {
    chapterId.value--
    router.push(`/read/${bookId}/${chapterId.value}`)
  }
}

onMounted(() => {
  // 真实项目可加自动切换逻辑
  setTimeout(() => {
    console.log('若当前源失效，将在3秒后自动切源')
  }, 3000)
})
</script>

<style scoped>
.reader { padding:15px; max-width:800px; margin:0 auto; line-height:1.8; }
.toolbar { display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #eee; }
.content { min-height:70vh; background:#f9f9f9; padding:20px; border-radius:8px; margin:20px 0; }
.nav button { padding:12px 30px; margin:0 10px; background:#457b9d; color:white; border:none; border-radius:8px; }
</style>
