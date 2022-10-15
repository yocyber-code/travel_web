<template>
  <div>
    <Header @onClickSidebar="onClickSidebar" />
    <SidebarNav :active="sidebarActive" />
    <Nuxt />
  </div>
</template>

<script>
import Header from '../components/HeaderHome.vue'
import SidebarNav from '../components/SidebarNav.vue'

export default {
  name: 'Home',
  comments: {
    Header,
  },
  components: { Header, SidebarNav },
  data() {
    return {
      sidebarActive: 'inactive',
    }
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
