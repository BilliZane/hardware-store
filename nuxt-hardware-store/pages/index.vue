<template>
  <div class="home">
    <Top />
    <Header />
    <Nav />
    <NavMobile />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Header from '@/components/Header/Header.vue'
import Nav from '@/components/Nav.vue'
import NavMobile from '@/components/NavMobile.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Top,
    Header,
    Nav,
    NavMobile,
    Content,
    Footer
  }
}
</script>
