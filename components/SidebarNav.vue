<template>
  <div class="sidebar-container" :class="active">
    <div class="close-btn-wrap">
      <div class="close-btn" @click="onClose">
        x
      </div>
    </div>
    <ul :class="theme">
      <li>สถานที่น่าสนใจ</li>
      <li>ไฮไลท์ทริปนครนายก</li>
      <li>ค้นหาที่พัก</li>
      <li>เว็ปบอร์ด</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: 'inactive',
    },
    theme: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClose(){
        this.$emit('onClose')
    }
  },
}
</script>

<style lang="scss" scope>
.sidebar-container {
  transition: all 0.5s ease-out;
  height: 100vh;
  width: 200px;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 5;

  .close-btn-wrap {
    font-size: 28px;
    display: flex;
    justify-content: right;
    margin-right: 20px;
    .close-btn {
      cursor: pointer;
    }
  }

  ul {
    margin-top: 50px;
    &.lightblue {
      color: #6ccdf3;
    }
    &.redblack {
      color: #950101;
    }
    &.darkgold {
      color: #d89216;
    }
    li {
      width: 100%;
      height: 50px;
      list-style: none;
      cursor: pointer;
    }
  }
}

.active {
  left: 0px;
}

.inactive {
  left: -200px;
}
</style>
