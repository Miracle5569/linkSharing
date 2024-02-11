<template>
  <section class="logIn">
    <div class="logIn__container _container">
      <devLinksLogo />

      <div class="logIn__block">
        <div class="logIn__block-header-text">
          <logIn_Title_Subtitle_Slot>
            <template #logIn-title> Log In </template>
            <template #logIn-subtitle> Add your details below to get back into the app </template>
          </logIn_Title_Subtitle_Slot>
          <form action="" method="post" autocomplete="on">
            <div v-for="item in logInForm" :key="item.id">
              <label :for="item.id">{{ item.emailText }}</label>
              <input
                :type="item.type"
                :id="item.id"
                :name="item.id"
                :placeholder="item.placeholder"
                v-model="item.value"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import devLinksLogo from '@/components/icons/devLinksLogo.vue'
import logIn_Title_Subtitle_Slot from '../components/slots/logIn_Title_Subtitle_Slot.vue'
import { ref } from 'vue'

// Объект формы ввода.
let logInForm = ref([
  {
    emailText: 'Email Address',
    id: 'mail',
    type: 'email',
    placeholder: 'enter email',
    value: ''
  },
  {
    emailText: 'Password',
    id: 'password',
    type: 'password',
    placeholder: 'enter password',
    value: ''
  }
])
</script>

<style scoped lang="scss">
.logIn {
  background-color: ghostwhite;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }

  &__block {
    width: 45%;
    background-color: white;
    height: 60%;
  }
}
</style>
