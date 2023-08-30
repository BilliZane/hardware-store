<template>
  <div class="content">
    <div class="container">
      <div class="content__wrap">
        <Aside />
        <MainContent />
      </div>
    </div>
  </div>
</template>

<script>
import Aside from '@/components/Aside/Aside.vue'
import MainContent from '@/components/Main/MainContent.vue'

export default {
  components: {
    Aside,
    MainContent
  }
}
</script>
