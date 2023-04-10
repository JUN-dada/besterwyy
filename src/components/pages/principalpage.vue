<template>
  <div class="w-full">

      <div @click="sendsongsmsg(45236)" class="w-full">
        <div class="bg-black">
          <div aria-hidden="true" class="relative overflow-hidden">
            <video autoplay muted loop src="https://mvod.itunes.apple.com/itunes-assets/HLSMusic112/v4/43/cc/ea/43ccead6-db5d-decf-da2a-51d88551182e/P503899451_Anull_video_gr580_sdr_1920x1080_-.mp4" alt=""
                   class="h-96 w-full object-cover object-center" ></video>
            <div class="absolute inset-0 bg-gradient-to-t from-black"></div>
          </div>

          <div class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
            <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
              <h2 class="text-3xl font-bold tracking-tight text-white sm:text-5xl">Avicii</h2>
              <p class="mt-4 text-white">Where there's a will, there's a way, kind of beautiful</p>
            </div>


            <div class="flex justify-center">
              <dl class="mt-16  max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 ">
                <div class="border-t border-gray-200 pt-4">
                  <dt class="font-medium text-white">有志者事竟成，多么美好的世界</dt>
                  <dd class="mt-2 text-sm text-white">Tim Bergling，1989年9月8日－2018年4月20日</dd>
                </div>
              </dl>
            </div>
        </div>
      </div>
    </div>

    <div class="py-24 sm:py-32 w-full h-auto">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">网友精选</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">{{ this.$store.state.todayshici.content }}</p>
        </div>
        <ul role="list"
            class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <li @click="sendsingmassage(item)" v-for="item in getnetizens">
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" alt="" :src="item.coverImgUrl">
            <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ item.name }}</h3>
          </li>
        </ul>
      </div>
    </div>

    <!--    -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->

    <div class="w-full h-[150%]">
      <div class=" py-24 sm:py-32 w-full h-auto">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">全部新碟</h2>
          </div>
          <ul role="list"
              class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <li v-for="item in allbumnew">
              <img class="aspect-[3/2] w-full rounded-2xl object-cover" :src="item.blurPicUrl" alt="">
              <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ item.name }}</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--    -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->

    <div @click="sendsongsmsg(hotartists.id)" class="bg-white py-16 sm:py-24">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
            class="relative overflow-hidden bg-gray-900 py-20 px-6 shadow-xl sm:rounded-3xl sm:py-24 sm:px-10 md:px-12 lg:px-20">
          <img class="singimg absolute inset-0 w-full  object-cover brightness-150 saturate-0 scale-[6]"
               :src="hotartists.picUrl" alt="">
          <div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply"></div>
          <svg viewBox="0 0 1097 845" aria-hidden="true"
               class="absolute -top-56 -left-80 w-[68.5625rem] transform-gpu blur-3xl">
            <path fill="url(#68eb76c4-2bc9-4928-860e-70adf05719f4)" fill-opacity=".45"
                  d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"/>
            <defs>
              <linearGradient id="68eb76c4-2bc9-4928-860e-70adf05719f4" x1="1097.04" x2="-141.165" y1=".22" y2="363.075"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="#776FFF"/>
                <stop offset="1" stop-color="#FF4694"/>
              </linearGradient>
            </defs>
          </svg>
          <svg viewBox="0 0 1097 845" aria-hidden="true"
               class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:w-[68.5625rem] md:transform-gpu md:blur-3xl">
            <path fill="url(#68eb76c4-2bc9-4928-860e-70adf05719f4)" fill-opacity=".25"
                  d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"/>
          </svg>
          <div class="relative mx-auto max-w-2xl lg:mx-0">
            <figure>
              <blockquote class="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                <p class="text-3xl">热门歌手</p>
                <p>&nbsp;</p>
                <p>{{ hotartists.name }}</p>
              </blockquote>
              <figcaption class="mt-6 text-base text-white">
                <!--                    <div class="font-semibold">{{ hotartists.alias[0]}}</div>-->
                <!--                    <div class="mt-1">{{ hotartists.alias[1]}}</div>-->
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/main";
import axios from "axios";
import httpurls from "@/httpurl";

export default {
  name: "principalpage",
  data() {
    return {
      getnetizens: '',
      allbumnew: '',
      hotartists: '',
      personalized: '',
      imgurl:'@/assets/img/bbly.JPG'
    }
  },
  created() {
    let cookie=JSON.parse(localStorage.getItem('usermsg'));
    console.log(cookie, 'usermsg')
    const getmsg = async () => {
      try {
        // const res = await axios.get(`${httpurls}/top/playlist?$&limit=6&cookie=${cookie}`);
        //带cookie请求
        const res = await axios.get(`${httpurls}/top/playlist?$&limit=6`,{
          headers: {
            'Cookie': cookie
          }
        });
        this.getnetizens = res.data.playlists;
      } catch (e) {
        console.log(e);
        throw e;
      }
    };

    const getallbumnew = async () => {
      try {
        const res = await axios.get(`${httpurls}/album/new?&area=ALL&limit=6`,{
          headers: {
            'Cookie': cookie
          }
        });
        this.allbumnew = res.data.albums;
      } catch (e) {
        console.log(e);
        throw e;
      }
    };

    const gethotartists = async () => {
      try {
        const res = await axios.get(`${httpurls}top/artists?&limit=30`,{
          headers: {
            'Cookie': cookie
          }
        });
        const redrom = Math.floor(Math.random() * 30);
        this.hotartists = res.data.artists[redrom];
        console.log(this.hotartists)
      } catch (e) {
        console.log(e);
        throw e;
      }
    };

    const getuserplaylist = async () => {
      try {
        const res = await axios.get(`${httpurls}/user/account`,{
          headers: {
            'Cookie': cookie
          }
        });
        console.log(res,'qwiehqowuehqwhgriqwghr')
      } catch (e) {
        console.log(e);
        throw e;
      }
    };

    const hottopic=async ()=>{
      try {
        const res = await axios.get(`${httpurls}/hot/topic?limit=6`)
        console.log(res,'hottopic')
      } catch (e) {
        console.log(e,'hottopic');
        throw e;
      }
    }


    getmsg();
    //网友精选
    getallbumnew();
    //全部新碟
    gethotartists();
    //热门歌手
    getuserplaylist();
    //热门话题
    hottopic();
  },
  methods: {
    sendsingmassage(item) {
      this.$router.push({path: '/homepage/singlistpage', query: {item}});
      localStorage.setItem('singlist', JSON.stringify(item));
    },
    sendsongsmsg(id) {
      this.$router.push({path: '/homepage/hotartists', query: {id}});
      localStorage.setItem('singerid', JSON.stringify(id));
      localStorage.setItem('is_reloaded', JSON.stringify(0));
    }
  },
  mounted() {
    // this.getnetizens = this.$store.state.singbynetizens.data.playlists;
    // this.allbumnew = this.$store.state.allbumnew.data.albums;
    // this.hotartists = this.$store.state.hotartists.data;
    // this.personalized = this.$store.state.personalized.data.result;
  }
}
</script>

<style scoped>
.singimg {
  animation: move 30s infinite;
}

@keyframes move {
  0% {
    transform: translateY(-100px);
  }
  50% {
    transform: translateY(-150px);
  }
  100% {
    transform: translateY(-100px);
  }
}


</style>