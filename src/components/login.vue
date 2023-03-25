<template>
  <div class="w-full h-screen">
    <div class="relative h-full bg-white">
      <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 ">
        <div class="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <div class="hidden sm:mt-32 sm:flex lg:mt-16">
            </div>
            <h1 class="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">扫码登录</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">{{ lovemsg }}</p>
            <div class="mt-10 flex items-center gap-x-6">
              <img :src="qrimg">
            </div>
          </div>
        </div>
        <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let getcookie;
export default {
  name: "login",
  data() {
    return {
      qrimg: '',
      lovemsg: '',
      msg: '',
      rounder: Math.floor(Math.random() * 12)
    }
  },
  created() {
    this.someFunction()
  },
  methods:
      {
        async someFunction() {
          await this.$store.dispatch('getlovemassage')
          await this.$store.dispatch('getqrkey');
          await this.$store.dispatch('getqrimg');
          await this.$store.dispatch('getqrstate');
          await this.$store.dispatch('getuserlogin');
          await this.$store.dispatch('getuserdetail');
          this.qrimg = this.$store.state.newqrimg;
          this.lovemsg = this.$store.state.lovemassage;
        }
      },
  mounted() {
    getcookie= setInterval(() => {
      let cookie = localStorage.getItem('cookie');
      if (cookie != null) {
        this.$router.push('/homepage')
      } else {
        this.$router.push('/login')
      }
    }, 100)
  },
  beforeDestroy() {
    clearInterval(getcookie)
  }
}
</script>

<style scoped>


@keyframes move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.bgimg {
  animation: move 15s infinite;
}
</style>