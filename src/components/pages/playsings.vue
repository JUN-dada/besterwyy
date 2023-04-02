<template>
  <div class="w-full h-full">
    <div class="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
      <div
          class="flex items-center gap-6 bg-white/90 px-4 py-4 shadow shadow-slate-200/80 ring-1 ring-slate-900/5 backdrop-blur-sm md:px-6">
        <div class="hidden md:block">
          <button @click="play" type="button"
                  class="group relative flex flex-shrink-0 items-center justify-center rounded-full  h-14 w-14">
            <div class="absolute -inset-3 md:hidden"></div>
            <svg v-show="!isplay" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10.396 18.433L17 12l-6.604-6.433A2 2 0 0 0 7 7v10a2 2 0 0 0 3.396 1.433z"/>
            </svg>
            <svg v-show="isplay" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor"
                    d="M8 20c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 1.654-1.346 3-3 3zM8 7c-.552 0-1 .449-1 1v9a1.001 1.001 0 0 0 2 0V8c0-.551-.448-1-1-1zm7 13c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 1.654-1.346 3-3 3zm0-13c-.552 0-1 .449-1 1v9a1.001 1.001 0 0 0 2 0V8c0-.551-.448-1-1-1z"/>
            </svg>
          </button>
        </div>
        <div class="mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1"><a
            class="truncate text-center text-sm font-bold leading-6 md:text-left">
          {{ songmsg.name }}</a>
          <div class="flex justify-between gap-6">
            <div class="flex items-center md:hidden">
              <button type="button"
                      class="group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none"
                      aria-label="Mute">
                <div class="absolute -inset-4 md:hidden"></div>
                <svg aria-hidden="true" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round"
                     class="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700">
                  <path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"></path>
                  <path d="M17 7C17 7 19 9 19 12C19 15 17 17 17 17" fill="none"></path>
                  <path d="M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5" fill="none"></path>
                </svg>
              </button>
            </div>
            <div class="flex flex-none items-center gap-4">
              <button type="button" class="group relative rounded-full focus:outline-none"
                      aria-label="Rewind 10 seconds">
                <div class="absolute -inset-4 -right-2 md:hidden"></div>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round"
                     stroke-linejoin="round" class="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700">
                  <path
                      d="M8 5L5 8M5 8L8 11M5 8H13.5C16.5376 8 19 10.4624 19 13.5C19 15.4826 18.148 17.2202 17 18.188"></path>
                  <path d="M5 15V19"></path>
                  <path
                      d="M8 18V16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V18C11 18.5523 10.5523 19 10 19H9C8.44772 19 8 18.5523 8 18Z"></path>
                </svg>
              </button>
              <audio id="audio" ref="audio" :src="songsurl"></audio>
              <div class="md:hidden">
                <button type="button"
                        class="group relative flex flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-slate-700 h-10 w-10 focus:ring-2 focus:ring-offset-2"
                        aria-label="Play">
                  <div class="absolute -inset-3 md:hidden"></div>
                  <svg aria-hidden="true" viewBox="0 0 36 36" class="fill-white group-active:fill-white/80 h-5 w-5">
                    <path
                        d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z"></path>
                  </svg>
                </button>
              </div>
              <button type="button" class="group relative rounded-full focus:outline-none"
                      aria-label="Fast-forward 10 seconds">
                <div class="absolute -inset-4 -left-2 md:hidden"></div>
                {{ currentDuration }}
              </button>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center">
                <button type="button"
                        class="relative flex h-6 w-6 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                        aria-label="Playback rate">
                  <div class="absolute -inset-4 md:hidden"></div>
                  <span>{{ songsalltime }}</span>
                </button>
              </div>
              <div class="hidden items-center md:flex">
                <button type="button"
                        class="group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none"
                        aria-label="Mute">
                  <div class="absolute -inset-4 md:hidden"></div>
                  <svg aria-hidden="true" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round"
                       class="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700">
                    <path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"></path>
                    <path d="M17 7C17 7 19 9 19 12C19 15 17 17 17 17" fill="none"></path>
                    <path d="M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5" fill="none"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import httpurls from "@/httpurl";
import {data} from "autoprefixer";

export default {
  name: "playsings",
  data() {
    return {
      songsid: "",
      songmsg: "",
      songsurl: "",
      songsalltime: "",
      isplay: false,
      currentDuration: "",

    }
  },
  created() {
    let rest = async () => {
      this.songsid = localStorage.getItem("singsg");
      const res = await axios.get(`${httpurls}/song/detail?ids=${this.songsid}`);
      this.songmsg = res.data.songs[0];
      const songsurl = await axios.get(`${httpurls}/song/url?id=${this.songsid}`);
      this.songsurl = songsurl.data.data[0].url;
      console.log(this.songsurl, "this.songsurl");
      console.log(this.songmsg, "this.songmsg");
      //获取歌曲总时长
      const audio = this.$refs.audio;
      // 监听 canplay 事件以确保音频已经可以播放
      audio.addEventListener('canplay', () => {
        // 获取音频的时长
        const duration = audio.duration;
        // 将时长转换为分钟和秒钟
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        // 将时长显示在页面上
        this.songsalltime = `${minutes}:${seconds}`;
      });
    }
    rest();
  },
  mounted() {
    let jdt=document.getElementById("jdt");
    this.$bus.$on("sendsinsid", async (data) => {
      localStorage.setItem("singsg", data);
      this.songsid = localStorage.getItem("singsg");
      const res = await axios.get(`${httpurls}/song/detail?ids=${this.songsid}`);
      this.songmsg = res.data.songs[0];
      const songsurl = await axios.get(`${httpurls}/song/url?id=${this.songsid}`);
      this.songsurl = songsurl.data.data[0].url;
      console.log(this.songsurl, "this.songsurl");
      console.log(this.songmsg, "this.songmsg");
      //获取歌曲总时长
      const audio = this.$refs.audio;
      // 监听 canplay 事件以确保音频已经可以播放
      audio.removeEventListener('canplay', audio.duration);
      audio.addEventListener('canplay', () => {
        // 获取音频的时长
        const duration = audio.duration;
        // 将时长转换为分钟和秒钟
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        // 将时长显示在页面上
        this.songsalltime = `${minutes}:${seconds}`;
      });
    });
    //监听播放时间
    const audio = this.$refs.audio;
    audio.addEventListener('timeupdate', () => {
      // 获取当前播放时间
      const currentTime = audio.currentTime;
      // 将当前播放时间转换为分钟和秒钟
      const currentMinutes = Math.floor(currentTime / 60);
      const currentSeconds = Math.floor(currentTime % 60);
      // 将当前播放时间显示在页面上
      this.currentDuration = `${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`;
      //获取进度条
    });
  },
  methods: {
    play() {
      if (this.isplay) {
        this.$refs.audio.pause();
        this.isplay = false;
      } else {
        this.$refs.audio.play();
        this.isplay = true;
      }
    },
    updateDuration() {
      //更新当前播放时间
      this.currentDuration = this.$refs.audio.currentTime;
    }
  },
  beforeDestroy() {
    this.$refs.audio.removeEventListener('timeupdate', this.updateDuration);
  },
}
</script>


<style scoped>

</style>