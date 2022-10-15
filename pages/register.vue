<template>
  <div class="register-card" :class="theme">
    <b-form class="login-form">
      <h1 class="login-head" :class="theme">Register</h1>
      <div class="input-content">
        <div class="input-wrap1">
          <!-- username -->
          <b-form-group
            :class="theme"
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
          <!-- repassword -->
          <b-form-group
            :class="theme"
            label="Re-password"
            label-for="re-password"
            :invalid-feedback="rePasswordInvalid"
            :state="rePasswordState"
          >
            <b-form-input
              type="password"
              id="re-password"
              v-model.trim="repassword"
              :state="rePasswordState"
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="input-wrap2">
          <!-- firstname -->
          <b-form-group
            :class="theme"
            label="firstname"
            label-for="firstname"
            :invalid-feedback="firstnameInvalid"
            :state="firstnameState"
          >
            <b-form-input
              type="text"
              id="firstname"
              v-model="firstname"
              :state="firstnameState"
            ></b-form-input>
          </b-form-group>
          <!-- lastname -->
          <b-form-group
            :class="theme"
            label="Lastname"
            label-for="lastname"
            :invalid-feedback="lastnameInvalid"
            :state="lastnameState"
          >
            <b-form-input
              type="text"
              id="lastname"
              v-model="lastname"
              :state="lastnameState"
            ></b-form-input>
          </b-form-group>
          <!-- bank name -->
          <b-form-group :class="theme" label="Bank Name" label-for="bank">
            <b-form-select
              id="bank"
              v-model="selected"
              :options="options"
            ></b-form-select>
          </b-form-group>
          <!-- bank account -->
          <b-form-group
            :class="theme"
            label="Bank Account"
            label-for="account"
            :invalid-feedback="accountInvalid"
            :state="accountState"
          >
            <b-form-input
              type="text"
              id="account"
              v-model="account"
              :state="accountState"
            ></b-form-input>
          </b-form-group>
          <div class="btn-wrap">
            <b-button @click="onModalShow" class="register-btn" :class="theme">
              Comfirm
            </b-button>
          </div>
        </div>
      </div>
    </b-form>
    <b-modal v-model="modalShow">
      {{ 'username : ' + username }}
      <br />
      {{ 'password : ' + password }}
      <br />
      {{ 'firstname : ' + firstname }}
      <br />
      {{ 'lastname : ' + lastname }}
      <br />
      {{ 'Bank name : ' + selected }}
      <br />
      {{ 'Bank account : ' + account }}
    </b-modal>
  </div>
</template>

<script>
const reg = /^[0-9]*((-|\s)*[0-9])*$/g
const capitalReg = /^[A-Z]/g
const passwordReg = /^[A-Z]*((-|\s)*[A-z0-9])*$/g
const engReg = /^[A-z]*((-|\s)*[A-z])*$/g
const thaiReg = /^[ก-๙]*((-|\s)*[ก-๙])*$/g

export default {
  name: 'registerPage',
  layout: 'Login',
  data() {
    return {
      username: '',
      password: '',
      repassword: '',
      firstname: '',
      lastname: '',
      account: '',
      selected: null,
      options: [
        {
          value: null,
          text: 'กรุณาเลือกธนาคาร',
          disabled: true,
          selected: true,
        },
        { value: 'ธนาคารกรุงเทพ', text: 'ธนาคารกรุงเทพ' },
        { value: 'ธนาคารกสิกร', text: 'ธนาคารกสิกร' },
        { value: 'ธนาคารไทยพาณิช', text: 'ธนาคารไทยพาณิช' },
      ],
      modalShow: false,

      theme: '',
    }
  },
  created() {
    this.theme = this.$store.getters['getterTheme']
  },
  methods: {
    onModalShow() {
      if (
        this.usernameState &&
        this.passwordState &&
        this.rePasswordState &&
        this.firstnameState &&
        this.lastnameState &&
        this.accountState &&
        this.selected !== null
      ) {
        this.modalShow = !this.modalShow
      }
    },
  },
  computed: {
    usernameState() {
      if (this.username.length == 0) return null
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
      if (this.password.length == 0) return null
      return (
        this.password.charAt(0).match(capitalReg) !== null &&
        this.password.match(passwordReg) !== null
      )
    },
    rePasswordState() {
      if (this.repassword.length == 0) return null
      return this.password === this.repassword
    },
    firstnameState() {
      if (this.firstname.length == 0) return null
      return (
        (this.firstname.match(thaiReg) !== null &&
          this.firstname.match(engReg) === null) ||
        (this.firstname.match(thaiReg) === null &&
          this.firstname.match(engReg) !== null)
      )
    },
    lastnameState() {
      if (this.lastname.length == 0) return null
      if (
        this.firstname.match(thaiReg) !== null &&
        this.lastname.match(engReg) !== null
      )
        return false
      if (
        this.firstname.match(engReg) !== null &&
        this.lastname.match(thaiReg) !== null
      )
        return false
      return (
        (this.lastname.match(thaiReg) !== null &&
          this.lastname.match(engReg) === null) ||
        (this.lastname.match(thaiReg) === null &&
          this.lastname.match(engReg) !== null)
      )
    },
    accountState() {
      if (this.account.length == 0) return null
      return this.account.match(reg) !== null
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
    rePasswordInvalid() {
      return 'ใส่รหัสให้เหมือนกัน'
    },
    firstnameInvalid() {
      return 'เลือกภาษาใดภาษาหนึ่งเท่านั้นและไม่มีอักษรพิเศษ'
    },
    lastnameInvalid() {
      if (
        this.firstname.match(thaiReg) !== null &&
        this.lastname.match(engReg) !== null
      )
        return 'กรุณาใส่ชื่อและนามสกุลเป็นภาษาเดียวกัน'
      if (
        this.firstname.match(engReg) !== null &&
        this.lastname.match(thaiReg) !== null
      )
        return 'กรุณาใส่ชื่อและนามสกุลเป็นภาษาเดียวกัน'

      return 'เลือกภาษาใดภาษาหนึ่งเท่านั้นและไม่มีอักษรพิเศษ'
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
    firstname(value) {
      if (value.charAt(value.length - 1) === ' ') {
        this.$nextTick(() => {
          this.firstname = value.slice(0, -1)
        })
      }
    },
    lastname(value) {
      if (value.charAt(value.length - 1) === ' ') {
        this.$nextTick(() => {
          this.lastname = value.slice(0, -1)
        })
      }
    },
    account(value) {
      if (value.length > 10) {
        this.$nextTick(() => {
          this.account = value.slice(0, 10)
        })
      }
      if (value.charAt(value.length - 1) === ' ') {
        this.$nextTick(() => {
          this.account = value.slice(0, -1)
        })
      }
      if (value.match(reg) === null) {
        this.$nextTick(() => {
          this.account = value.slice(0, -1)
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.register-card {
  display: flex;
  justify-content: left;
  padding: 20px;
  width: 80%;
  height: 600px;
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
    }
    .input-content {
      display: flex;
      justify-content: center;

      .input-wrap1 {
        width: 50%;
        padding: 0 40px;
      }
      .input-wrap2 {
        width: 50%;
        padding: 0 40px;
        .btn-wrap {
          width: 100%;
          display: flex;
          justify-content: right;
          .register-btn {
            width: 50%;
            height: 50px;
            font-size: 24px;
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
