<template>
  <div class="sidebar-container" :class="active"></div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: 'inactive',
    },
  },
}
</script>

<style lang="scss" scope>
.sidebar-container {
  transition: all 2s;
  height: 100vh;
  width: 200px;
  position: fixed;
  top: 80px;
  left: 0px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.active {
  display: block;
}

.inactive {
  display: none;
}
</style>
