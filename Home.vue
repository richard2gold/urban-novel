<template>
  <div class="home">
    <h1>今日最火都市神作推荐</h1>
    <BookCard :book="hotBooks[0]" />
    
    <div class="change" @click="current = (current + 1) % hotBooks.length">
      <p>不喜欢这本？<strong>点击换一本试试 →</strong></p>
    </div>

    <BookCard :book="hotBooks[current]" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BookCard from '../components/BookCard.vue'
import { books } from '../data/books.js'

const hotBooks = books.sort((a,b) => b.hot - a.hot)
const current = ref(0)
</script>

<style scoped>
.home { padding:20px; max-width:800px; margin:0 auto; }
.change { text-align:center; padding:20px; color:#457b9d; cursor:pointer; font-size:18px; }
</style>
