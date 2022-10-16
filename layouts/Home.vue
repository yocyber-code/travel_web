<template>
  <div>
    <Header
      @onClickSidebar="onClickSidebar"
      @changeTheme="
        () => {
          this.$forceUpdate()
        }
      "
    />
    <SidebarNav
      :active="sidebarActive"
      :theme="theme"
      @onClose="
        () => {
          sidebarActive = 'inactive'
        }
      "
    />
    <main>
      <NuxtChild :theme="theme" />
    </main>
    <Footer :theme="theme" />
  </div>
</template>

<script>
import Header from '../components/HeaderHome.vue'
import SidebarNav from '../components/SidebarNav.vue'
import Footer from '../components/FooterVue.vue'

export default {
  name: 'Home',
  comments: {
    Header,
  },
  components: { Header, SidebarNav, Footer },
  data() {
    return {
      sidebarActive: 'inactive',
      theme: '',
    }
  },
  created() {
    this.theme = this.$store.getters['getterTheme']
  },
  updated() {
    this.theme = this.$store.getters['getterTheme']
  },
  methods: {
    onClickSidebar() {
      if (this.sidebarActive === 'inactive') {
        this.sidebarActive = 'active'
      } else {
        this.sidebarActive = 'inactive'
      }
    },
  },
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>
