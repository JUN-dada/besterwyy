<template>
<div class="w-full h-full overflow-hidden" id="topbox">















<!--  <div class="w-full h-full flex absolute z-30" id="inbox" v-show="!heighttof">-->
<!--    <audio ref="audio" id="audio" :src="songsurl"></audio>-->
<!--    <img ref="songimg" :src="songimg" style="display: none">-->
<!--    <div class="w-1/6 h-full  flex justify-center items-center">-->
<!--      <span>{{ songmsg.name }} {{currentDuration}}</span>-->
<!--      <svg @click="play"  v-show="!isplay" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 6.741c0-1.544 1.674-2.505 3.008-1.728l9.015 5.26c1.323.771 1.323 2.683 0 3.455l-9.015 5.258C7.674 19.764 6 18.803 6 17.26V6.741zM17.015 12L8 6.741V17.26L17.015 12z"/></svg>-->
<!--      <svg @click="play" v-show="isplay" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"/></svg>-->
<!--    </div>-->

<!--    <div class="w-4/6 h-full flex items-center ">-->
<!--      <div class="w-full h-1/4 rounded-full" id="jtd"></div>-->
<!--    </div>-->
<!--    <div class="w-1/6 h-full  flex justify-center items-center">-->
<!--      <span>{{songsalltime}}</span>-->
<!--      <span>点击</span>-->
<!--    </div>-->
<!--  </div>-->

</div>
</template>

<script>
import axios from "axios";
import httpurls from "@/httpurl";
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
      songimg: "",
      isLoaded: false,
      heighttof:false
    }
  },
  created() {
    console.log('1111111')
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
      //暂停
      audio.pause();
      this.isplay = false;
      // 监听 canplay 事件以确保音频已经可以播放
      audio.addEventListener('canplay', () => {
        // 获取音频的时长
        const duration = audio.duration;
        // 将时长转换为分钟和秒钟
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        // 将时长显示在页面上
        this.songsalltime = `${minutes}:${seconds}`;
        this.isLoaded = true;
        // 如果当前正在播放，则恢复播放状态
      });
    }
    rest();
  },
  mounted() {
    document.getElementById('topbox').style.background = localStorage.getItem('playsingsbackgroundcolor');
    this.$bus.$on("sendsinsid", async (data) => {
      console.log(data,'data');
      localStorage.setItem("singsg", data);
      this.songsid = localStorage.getItem("singsg");
      const res = await axios.get(`${httpurls}/song/detail?ids=${this.songsid}`);
      this.songmsg = res.data.songs[0];
      this.songimg = this.songmsg.al.picUrl;
      const songsurl = await axios.get(`${httpurls}/song/url?id=${this.songsid}`);
      this.songsurl = songsurl.data.data[0].url;
      console.log(this.songsurl, "this.songsurl");
      console.log(this.songmsg, "this.songmsg");
      //获取歌曲总时长
      const audio = this.$refs.audio;
      document.getElementById('jtd').style.width = '0px';
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
      //进度的长度
      const jtd = document.getElementById('jtd');
      jtd.style.width = `${(currentTime / audio.duration) * 100}%`;
    });

    //当歌曲可以播放时才执行下面代码
    audio.addEventListener('canplay', () => {
      // 获取音频的时长
      let getrgb = () => {
        const img = this.$refs.songimg;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        img.crossOrigin = "anonymous";
        img.onload = function () {
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
          console.log(avgR, avgG, avgB)
          document.getElementById('topbox').style.background = `rgb(${avgR},${avgG},${avgB})`;
          console.log(`rgb(${avgR},${avgG},${avgB})`)
          localStorage.setItem("playsingsbackgroundcolor", `rgb(${avgR},${avgG},${avgB})`);
          //如果颜色是深色，就将字体颜色改为白色
          if (avgR < 100 && avgG < 100 && avgB < 100) {
            document.getElementById('topbox').style.color = '#fff';
          }
          //如果颜色是浅色，就将字体颜色改为黑色
          if (avgR > 100 && avgG > 100 && avgB > 100) {
            document.getElementById('topbox').style.color = '#000';
          }
          //如果背景颜色是浅色，就将进度条颜色改为深色
          if (avgR > 100 && avgG > 100 && avgB > 100)
          {
            document.getElementById('jtd').style.background = `rgb(${avgR - 100},${avgG - 100},${avgB - 100})`;
          }

          //如果背景颜色是深色，就将进度条颜色改为浅色
          if (avgR < 100 && avgG < 100 && avgB < 100)
          {
            document.getElementById('jtd').style.background = `rgb(${avgR + 100},${avgG + 100},${avgB + 100})`;
          }
        };
      }
      getrgb();
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
    },
    hightadd() {
      if (this.heighttof)
      {
        document.getElementById('topbox').style.transition = 'all 1s';
        document.getElementById('topbox').className = 'w-full h-full bg-amber-200';
        document.getElementById('inbox').classList.add('up');
        this.heighttof = false;
      } else
      {
        document.getElementById('topbox').style.transition = 'all 1s';
        document.getElementById('topbox').className = 'w-full h-screen bg-amber-200';
        document.getElementById('inbox').classList.add('down');
        this.heighttof = true;
      }
    },
  },
  beforeDestroy() {
    this.$refs.audio.removeEventListener('timeupdate', this.updateDuration);
  },
}
</script>


<style scoped>

@keyframes scrollup {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}


@keyframes scrolldown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.up
{
  animation: scrollup 3s;
}

.down{
  animation: scrolldown 1s;
}
</style>