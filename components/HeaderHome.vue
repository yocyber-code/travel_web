<template>
  <div class="header-container" :class="theme">
    <div style="display: flex;">
      <button class="sidebar-btn" :class="theme" @click="onOpenSidebar">
        <img :src="theme === 'darkgold' ? require('../assets/images/menu2.png'): require('../assets/images/menu.png')" alt="" />
      </button>
      <div
        class="logo-wrap"
        @click="
          () => {
            $router.push('/')
          }
        "
      >
        <img src="../assets/images/logo.png" alt="" />
      </div>
    </div>

    <div style="display: flex;">
      <button
        class="route-btn"
        :class="theme"
        @click="
          () => {
            $router.push('register')
          }
        "
      >
        สมัครสมาชิก
      </button>
      <button
        class="route-btn"
        :class="theme"
        @click="
          () => {
            $router.push('login')
          }
        "
      >
        เข้าสู่ระบบ
      </button>
      <b-dropdown id="dropdown-buttons" text="เปลี่ยนธีม" class="m-2">
        <b-dropdown-item-button @click="themeChange('lightblue')">
          ฟ้าสว่าง
        </b-dropdown-item-button>
        <b-dropdown-item-button @click="themeChange('redblack')">
          แดง
        </b-dropdown-item-button>
        <b-dropdown-item-button @click="themeChange('darkgold')">
          ดำ
        </b-dropdown-item-button>
      </b-dropdown>
    </div>
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
    themeChange(theme) {
      this.$emit('changeTheme')
      this.$store.dispatch('setTheme', theme)
      this.theme = this.$store.getters['getterTheme']
    },
  },
}
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  border-bottom: 2px solid #fff;
  padding: 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 2;
  &.lightblue {
    background-color: #6ccdf3;
  }
  &.redblack {
    background-color: #950101;
  }
  &.darkgold {
    background-color: #000;
  }

  .sidebar-btn {
    height: 50px;
    width: 50px;
    background-color: none;
    border: none;
    z-index: 2;
    &.lightblue {
      background-color: #6ccdf3;
    }
    &.redblack {
      background-color: #950101;
    }
    &.darkgold {
      background-color: #000;
    }

    img {
      height: 100%;
      width: 100%;
    }
  }

  .logo-wrap {
    height: 100%;
    cursor: pointer;
    img {
      height: 100%;
      width: auto;
    }
  }

  .route-btn {
    border: none;
    cursor: pointer;

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
}
</style>
