<template>
  <div>
    <div class="login-card" :class="theme">
      <b-form class="login-form">
        <h1 class="login-head" :class="theme">Login</h1>
        <div class="input-content">
          <div class="input-wrap">
            <!-- username -->
            <b-form-group
              :class="theme"
              description="เบอร์โทรศัพท์"
              label="Username"
              label-for="username"
              :invalid-feedback="usernameInvalid"
              :state="usernameState"
            >
              <b-form-input
                type="text"
                id="username"
                v-model="username"
                :state="usernameState"
              ></b-form-input>
            </b-form-group>
            <!-- password -->
            <b-form-group
              :class="theme"
              label="Password"
              label-for="password"
              :invalid-feedback="passwordInvalid"
              :state="passwordState"
            >
              <b-form-input
                type="password"
                id="password"
                v-model.trim="password"
                :state="passwordState"
              ></b-form-input>
            </b-form-group>
            <b-button @click="onModalShow" class="login-btn" :class="theme">
              Login
            </b-button>
          </div>
        </div>
      </b-form>
    </div>
    <b-modal v-model="modalShow">
      {{ 'username : ' + username }}
      <br />
      {{ 'password : ' + password }}
    </b-modal>
  </div>
</template>

<script>
const reg = /^[0-9]*((-|\s)*[0-9])*$/g
const capitalReg = /^[A-Z]/g
const passwordReg = /^[A-Z]*((-|\s)*[A-z0-9])*$/g
export default {
  name: 'LoginPage',
  layout: 'Login',
  data() {
    return {
      username: '',
      password: '',
      modalShow: false,

      theme: '',
    }
  },
  created() {
    this.theme = this.$store.getters['getterTheme']
  },
  methods: {
    onModalShow() {
      if (this.usernameState && this.passwordState) {
        this.modalShow = !this.modalShow
      }
    },
  },
  computed: {
    usernameState() {
      return (
        this.username.length == 10 &&
        this.username.charAt(0) === '0' &&
        (this.username.charAt(1) === '6' ||
          this.username.charAt(1) === '8' ||
          this.username.charAt(1) === '9') &&
        this.username.match(reg) !== null
      )
    },
    passwordState() {
      return (
        this.password.charAt(0).match(capitalReg) !== null &&
        this.password.match(passwordReg) !== null
      )
    },
    usernameInvalid() {
      if (this.username.length !== 0) {
        if (!this.username.match(reg)) return 'ใส่ตัวเลขเท่านั้น'
        if (this.username.charAt(0) !== '0') return 'ขึ้นต้นด้วยเลข 0'
        if (
          this.username.charAt(1) !== '6' &&
          this.username.charAt(1) !== '8' &&
          this.username.charAt(1) !== '9'
        ) {
          return 'เบอร์โทรต้องขึ้นต้นด้วย 06,08,09 เท่านั้น'
        }
        if (this.username.length < 10) return 'กรุณาใส่เบอร์โทรศัพท์ 10 หลัก'
      }
    },
    passwordInvalid() {
      if (this.password.length !== 0) {
        if (this.password.charAt(0).match(capitalReg) === null) {
          return 'รหัสต้องขึ้นต้นด้วยพิมพ์ใหญ่'
        }
        if (this.password.match(passwordReg) === null) {
          return 'เป็นภาษาอังกฤษและตัวเลขเท่านั้น'
        }
      }
    },
  },
  watch: {
    username(value) {
      if (value.length > 10) {
        this.$nextTick(() => {
          this.username = value.slice(0, 10)
        })
      }
      if (value.charAt(value.length - 1) === ' ') {
        this.$nextTick(() => {
          this.username = value.slice(0, -1)
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login-card {
  display: flex;
  justify-content: left;
  padding: 20px;
  width: 450px;
  height: 450px;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &.lightblue {
    background-color: #6ccdf3;
  }

  .login-form {
    width: 100%;

    .login-head {
      margin-left: 20px;
      margin-bottom: 40px;
      &.lightblue {
        color: #fff;
      }
    }
    .input-content {
      display: flex;
      justify-content: center;

      .input-wrap {
        .login-btn {
          width: 300px;
          height: 50px;
          font-size: 24px;

          &.lightblue {
            background-color: #707070;
          }
        }
      }
    }
  }
}

.lightblue {
  color: #fff;
}
</style>
