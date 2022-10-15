<template>
  <div class="header-container" :class="theme">
    <button @click="onOpenSidebar">aaa</button>
  </div>
</template>

<script>
export default {
  name: 'HeaderHome',
  data() {
    return {
      theme: '',
    }
  },
  created() {
    this.theme = this.$store.getters['getterTheme']
  },
  methods: {
    onOpenSidebar() {
      this.$emit('onClickSidebar')
    },
  },
}
</script>

<style lang="scss" scoped>
.header-container {
  height: 80px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &.lightblue {
    background-color: #6ccdf3;
  }
}
</style>
