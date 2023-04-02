<template>
  <div class="w-full h-screen">

    <div id="bg" ref="background" class="py-24 sm:py-32">
      <div class="relative isolate">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="mx-auto flex max-w-2xl flex-col gap-16  px-6 py-16   sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img ref="myImage"  class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm" :src="singermsg.cover" alt="">
            <div class="w-full flex-auto">
              <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl text-black">{{singermsg.name}}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="relative bg-gray-900">
      <div class="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img :src="topsong1img" class="h-full w-full object-cover" alt="">
        <svg viewBox="0 0 926 676" aria-hidden="true" class="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]">
          <path fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)" fill-opacity=".4" d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z" />
          <defs>
            <linearGradient id="60c3c621-93e0-4a09-a0e6-4c228a0116d8" x1="926.392" x2="-109.635" y1=".176" y2="321.024" gradientUnits="userSpaceOnUse">
              <stop stop-color="#776FFF" />
              <stop offset="1" stop-color="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 class="text-base font-semibold leading-7 text-indigo-400"></h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ topsong1.name }}</p>
          <p class="mt-6 text-base leading-7 text-gray-300">{{topsongsname}}</p>
          <div class="mt-8">
            <a href="#" class="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">播放</a>
          </div>
        </div>
      </div>
    </div>

    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow" v-for="item in topsong" :key="topsong.id">
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-sm font-medium text-gray-900">{{item.name}}</h3>
            </div>
            <p class="mt-1 truncate text-sm text-gray-500">
              <span v-for="item2 in item.ar">{{item2.name}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </p>
          </div>
          <img class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <a class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
                播放
              </a>
            </div>
          </div>
        </div>
      </li>

      <!-- More people... -->
    </ul>





  </div>


</template>

<script>
import httpurls from "@/httpurl";
import axios from "axios";
import ColorThief from '../../../node_modules/colorthief/dist/color-thief.mjs'
export default {
  name: "hotartists",
  data() {
    return {
      singerid: '',
      singermsg: '',
      topsong:'',
      topsong1:'',
      topsong1img:'',
      topsong1id:'',
      topsongsname:'',
    }
  },
  created() {
    this.singerid = JSON.parse(localStorage.getItem('singerid'));
    console.log(this.singerid);
    const hotartistsmsg = async () => {
      try {
        const res = await axios.get(`${httpurls}/artist/detail?id=${this.singerid}`);
        this.singermsg = res.data.data.artist;
      } catch (e) {
        console.log(e);
        throw e;
      }
    }

    const topsong = async () => {
      try {
        const res = await axios.get(`${httpurls}/artist/top/song?id=${this.singerid}&limit=8`);
        console.log(res)
        this.topsong=res.data.songs;
        this.topsong1=res.data.songs[0];
        this.topsong1id=this.topsong1.id;
        this.topsong1img=this.topsong1.al.picUrl;
        this.topsongsname=this.topsong1.al.name;
      } catch (e) {
        console.log(e);
        throw e;
      }
    }

    //获取当前歌曲评论


    hotartistsmsg();
    //获取热门歌手
    topsong();
    //提取图片主色调
  },
  mounted() {
    // 提取图片主色调
    const img = this.$refs.myImage;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    img.crossOrigin = "anonymous";
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const pixelCount = canvas.width * canvas.height;
      let r = 0;
      let g = 0;
      let b = 0;
      for (let i = 0; i < pixelCount; i++) {
        r += pixels[i * 4];
        g += pixels[i * 4 + 1];
        b += pixels[i * 4 + 2];
      }
      const avgR = r / pixelCount;
      const avgG = g / pixelCount;
      const avgB = b / pixelCount;
      document.getElementById('bg').style.background = `rgb(${avgR},${avgG},${avgB})`;
    };
  }
}



</script>

<style scoped>

</style>