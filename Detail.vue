<template>
  <div class="detail" v-if="book">
    <h1>{{ book.title }}</h1>
    <img :src="book.cover" class="cover">
    <p><strong>作者：</strong>{{ book.author }}</p>
    <p class="intro">{{ book.intro }}</p>
    
    <router-link :to="`/read/${book.id}/1`" class="start-btn">
      开始阅读
    </router-link>

    <h3>章节目录（前100章免费）</h3>
    <ul class="chapter-list">
      <li v-for="c in book.chapters" :key="c.id">
        <router-link :to="`/read/${book.id}/${c.id}`">{{ c.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { getBook } from '../data/books.js'
const route = useRoute()
const book = getBook(route.params.id)
</script>

<style scoped>
.detail { padding:20px; max-width:800px; margin:0 auto; line-height:1.8; }
.start-btn { display:block; width:100%; text-align:center; background:#e63946; color:white; padding:15px; border-radius:12px; font-size:18px; text-decoration:none; margin:20px 0; }
.chapter-list li { padding:10px 0; border-bottom:1px solid #eee; }
</style>
