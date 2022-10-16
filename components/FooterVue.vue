<template>
  <div class="footer-container" :class="theme">
    <p>watchara sueasakul made it!!</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    theme: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100px;
  border-top: 2px solid #fff;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

font-size: 25px;

  &.lightblue {
    background-color: #6ccdf3;
    color: #fff;
  }
  &.redblack {
    background-color: #950101;
    color: #000;
  }
  &.darkgold {
    background-color: #000;
    color: #d89216;
  }
}
</style>
