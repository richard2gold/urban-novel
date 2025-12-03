<template>
  <div class="book-card">
    <img :src="book.cover" alt="" class="cover">
    <div class="info">
      <h3>{{ book.title }}</h3>
      <p class="author">{{ book.author }}</p>
      <p class="intro">{{ book.intro }}</p>
      <div class="tags">
        <span v-for="t in book.tags" :key="t">{{ t }}</span>
      </div>
      <router-link :to="`/book/${book.id}`" class="btn">立即阅读</router-link>
    </div>
  </div>
</template>

<script setup>
defineProps(['book'])
</script>

<style scoped>
.book-card { display:flex; margin:15px 0; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1); }
.cover { width:120px; height:160px; object-fit:cover; }
.info { flex:1; padding:12px; }
.btn { display:block; margin-top:10px; background:#e63946; color:white; text-align:center; padding:8px; border-radius:8px; text-decoration:none; }
.tags span { font-size:12px; background:#457b9d; color:white; padding:2px 8px; border-radius:12px; margin-right:6px; }
</style>
