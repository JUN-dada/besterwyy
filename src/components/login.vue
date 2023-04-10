<template>
  <div class="w-full h-screen" >
    <div class="flex min-h-full">
      <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">扫码登录捏</h2>
            <p class="mt-2 text-sm text-gray-600">
              <span class="font-medium text-indigo-600 hover:text-indigo-500">诗词</span>
            </p>
          </div>

          <div class="mt-8">
            <div>
              <div>
                <img :src="qrimg">
              </div>

              <div class="relative mt-6">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">

                </div>
              </div>
            </div>

            <div class="mt-6">
              <div class="space-y-6">
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative hidden w-0 flex-1 lg:block">
        <img class="absolute inset-0 h-full w-full object-cover"
             src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
             alt="">
      </div>
    </div>

  </div>
</template>

<script>
let timer;
import axios from "axios";
import httpurls from "@/httpurl";

let timber;
let getcookie;
let time2;
export default {
  name: "login",
  data() {
    return {
      qrimg: '',
    }
  },
  created() {
    let login = async () => {
      let getqrkey = await axios.post(`/api/login/qr/key?timestamp=${Date.now()}`);
      let key = getqrkey.data.data.unikey;
      let qrimg = await axios.post(`/api/login/qr/create?key=${key}&timestamp=${Date.now()}&qrimg=true`);
      this.qrimg = qrimg.data.data.qrimg;
      timber= setInterval(async () => {
        let userlogin = await axios.post(`/api/login/qr/check?key=${key}&timestamp=${Date.now()}`);
        if (userlogin.data.code === 803) {
          // this.$router.push({path: "/homepage"});
          console.log(userlogin.data.cookie);
          localStorage.setItem("usermasgcookie", userlogin.data.cookie);
          //获取登录状态
          let getlogin = await axios.post(`/api/login/status?timestamp=${Date.now()}&${userlogin.data.cookie}`);
          console.log(getlogin.data);
          localStorage.setItem("usermasg", JSON.stringify(getlogin.data));
          //存储用户id
          localStorage.setItem("usermasgId", getlogin.data.data.profile.userId);
          return clearInterval(timber);
        }
      }, 1000)
    }
    login();
  },
  beforeDestroy() {
    clearInterval(timber);
  },
  mounted() {
    time2 = setInterval(() => {
      if (localStorage.getItem("usermasg")!==null)
      {
        this.$router.push({path: "/homepage"});
        return clearInterval(time2);
      }
    }, 10000)
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