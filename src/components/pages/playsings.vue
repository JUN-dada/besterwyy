  <template>
  <div class="w-full h-full" id="topbox">

    <div class="w-full h-full absolute z-30 overflow-hidden" id="box">
      <audio ref="audio" id="audio" :src="songurl"></audio>
      <img id="canvansimg" ref="canvansimg" class="hidden" :src="songsimg">
      <ul role="list" class="w-full h-full">
        <li class="flex py-4 w-full h-full">
          <div class="ml-3 w-full h-full">
            <div class="text-sm font-medium flex">
              <div><span>{{songsname}}</span></div>
              <div><span>{{songsnowtime}}</span></div>
              <div id="play" @click="play"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.396 18.433L17 12l-6.604-6.433A2 2 0 0 0 7 7v10a2 2 0 0 0 3.396 1.433z"/></svg></div>
              <div><span>{{duration}}</span></div>
            </div>
            <div class="">
              <el-slider class="" :max="singalllong" v-model="songsnow" :show-tooltip="false" :style="{ backgroundColor: `${rgb}`,borderColor: '#0000ff' }"></el-slider>
            </div>
          </div>
        </li>
      </ul>
    </div>


    <div id="full" class="w-full h-screen hidden  relative -z-10">
      <div class="w-full h-full overflow-hidden" id="secendbox">
        <div class="">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <!-- Image gallery -->
              <div class="flex flex-col-reverse">
                <!-- Image selector -->
                <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                  <div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                    <button id="tabs-1-tab-1" class="relative flex h-24 cursor-pointer items-center justify-center rounded-2xl text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4" aria-controls="tabs-1-panel-1" role="tab" type="button">

                    </button>

                    <!-- More images... -->
                  </div>
                </div>

                <div class="aspect-h-1 aspect-w-1 w-full">
                  <!-- Tab panel, show/hide based on tab state. -->
                  <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                    <img :src="songsimg" class="h-full w-full object-cover object-center sm:rounded-lg">
                  </div>


                </div>
              </div>

              <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1 class="text-5xl font-bold tracking-tight">{{songsname  }}</h1>

                <div class="mt-3">
                  <p v-for="item in singername" class="text-3xl tracking-tight">
                    <span>{{item.name}}</span>
                  </p>
                </div>

                <!-- Reviews -->
                <div class="mt-3">
                  <h3 class="sr-only"></h3>
                  <div class="flex items-center">
                  </div>
                </div>

                <div class="mt-6">
                  <h3 class="sr-only"></h3>

                  <div class="space-y-6 text-base text-gray-700">
                    <p></p>
                  </div>
                </div>

                <div class="mt-6" id="full">
                  <div class="sm:flex-col1 mt-10 flex w-full h-96 overflow-y-auto" >
                    <ul>
                      <li v-for="item in endyric" class="text-3xl tracking-tight leading-[6rem]">
                        <span class="font-black leading-[3rem]">{{item.text}}</span>
                      </li>
                    </ul>
                  </div>
                </div>
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

export default {
  name: "playsings",
  data() {
    return {
      singsid: '',
      songsname: '',
      songsimg: '',
      songurl: '',
      singalllong: 1,
      songsnow: '',
      duration: '',
      songsnowtime: 0,
      rgb: '',
      singername: '',
      songlyric: '',
      endyric: '',
    }
  },
  created() {
    console.log('playsings')
    let cookies = localStorage.getItem('cookies');
    this.songsname = localStorage.getItem('songsname');
    this.songsimg = localStorage.getItem('songsimg');
    this.songurl = localStorage.getItem('songurl');
    this.singsid = localStorage.getItem('singsid');
    let songsmsg=async ()=>{
      console.log('songsmsg')
      let res = await axios.get(`${httpurls}/song/detail?ids=${this.singsid}`);
      let songurl = await axios.get(`${httpurls}/song/url?id=${this.singsid}`);
      let songlyric = await axios.get(`${httpurls}/lyric?id=${this.singsid}`);
      this.songlyric = songlyric.data.lrc.lyric;
      const regex = /\[(\d{2}):(\d{2}).(\d{3})\](.*)/g;
      let match;
      const parsedLyrics = [];
      while ((match = regex.exec(this.songlyric))) {
        console.log(match)
        const [, minutes, seconds, milliseconds, text] = match;
        const timeInSeconds = parseInt(minutes) * 60 + parseFloat(seconds);
        parsedLyrics.push({ time: timeInSeconds, text });
      }
      this.endyric=parsedLyrics;
      this.songsname = res.data.songs[0].name;
      this.songsimg = res.data.songs[0].al.picUrl;
      this.songurl = songurl.data.data[0].url;
      //歌手名字
      this.singername = res.data.songs[0].ar;
      localStorage.setItem('songsname', res.data.songs[0].name);
      localStorage.setItem('songsimg', res.data.songs[0].al.picUrl);
      localStorage.setItem('songurl', songurl.data.data[0].url);
    }
    songsmsg();
    this.$nextTick(() => {
      let audio = document.getElementById('audio');
      audio.src = this.songurl;
      console.log('nextTick')
      audio.oncanplay = ()=> {
        this.singalllong = audio.duration;
        //格式化时间
        let minute = Math.floor(audio.duration / 60);
        let second = Math.floor(audio.duration % 60);
        this.duration=`${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
        // ----------------------------------------------
        // --------------背景随着歌曲的封面变化--------------------------------
        const img = this.$refs.canvansimg;
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
          document.getElementById('box').style.background = `rgb(${avgR/2},${avgG/2},${avgB/2})`;
          document.getElementById('full').style.background = `rgb(${avgR/2},${avgG/2},${avgB/2})`;
          localStorage.setItem('boxbg', `rgb(${avgR/2},${avgG/2},${avgB/2})`);
          //如果颜色过深，字体颜色改为白色
          if (avgR < 100 && avgG < 100 && avgB < 100) {
            document.getElementById('box').style.color = `#fff`;
          }
          //如果颜色过浅，字体颜色改为深色
          if (avgR > 200 && avgG > 200 && avgB > 200) {
            document.getElementById('box').style.color = `#000`;
          }
        };
        // ------------------------------------------------------------------
        console.log('oncanplay')
      }
      audio.ontimeupdate = () => {
        this.songsnow = audio.currentTime;
        let minute = Math.floor(audio.currentTime / 60);
        let second = Math.floor(audio.currentTime % 60);
        this.songsnowtime=`${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
        //背景跟着歌曲变化
        console.log('ontimeupdate')
      }
    })
  },
  mounted() {
    this.$bus.$on('sendsinsid', (data) => {
      console.log(data)
      localStorage.setItem('singsid', data)
      this.singsid = data
      let songsmsg=async ()=>{
        let res = await axios.get(`${httpurls}/song/detail?ids=${this.singsid}`);
        let songurl = await axios.get(`${httpurls}/song/url?id=${this.singsid}`);
        let songlyric = await axios.get(`${httpurls}/lyric?id=${this.singsid}`);
        this.songlyric = songlyric.data.lrc.lyric;
        const regex = /\[(\d{2}):(\d{2}).(\d{3})\](.*)/g;
        let match;
        const parsedLyrics = [];
        while ((match = regex.exec(this.songlyric))) {
          console.log(match)
          const [, minutes, seconds, milliseconds, text] = match;
          const timeInSeconds = parseInt(minutes) * 60 + parseFloat(seconds);
          parsedLyrics.push({ time: timeInSeconds, text });
        }
        this.endyric=parsedLyrics;
        this.songsimg = res.data.songs[0].al.picUrl;
        this.songurl = songurl.data.data[0].url;
        this.songsname = res.data.songs[0].name;
        this.singername = res.data.songs[0].ar;
        localStorage.setItem('songsname', res.data.songs[0].name);
        localStorage.setItem('songsimg', res.data.songs[0].al.picUrl);
        localStorage.setItem('songurl', songurl.data.data[0].url);
        localStorage.setItem('songlyric', songlyric.data.lrc.lyric);
        let audio =await this.$refs.audio;
        audio.oncanplay = ()=> {
            this.singalllong = audio.duration;
            //格式化时间
              let minute = Math.floor(audio.duration / 60);
              let second = Math.floor(audio.duration % 60);
              this.duration=`${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
            // ----------------------------------------------
            // --------------背景随着歌曲的封面变化--------------------------------
            const img = this.$refs.canvansimg;
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
              document.getElementById('box').style.background = `rgb(${avgR/2},${avgG/2},${avgB/2})`;
              document.getElementById('full').style.background = `rgb(${avgR/2},${avgG/2},${avgB/2})`;
              this.rgb = `rgb(${avgR},${avgG},${avgB})`;
              localStorage.setItem('boxbg', `rgb(${avgR/2},${avgG/2},${avgB/2})`);
              //如果颜色过深，字体颜色改为白色
              if (avgR < 100 && avgG < 100 && avgB < 100) {
                document.getElementById('box').style.color = `#fff`;
              }
              //如果颜色过浅，字体颜色改为深色
              if (avgR > 200 && avgG > 200 && avgB > 200) {
                document.getElementById('box').style.color = `#000`;
              }
            };
          // ------------------------------------------------------------------
        }
      }
      songsmsg();
      this.$refs.audio.ontimeupdate = () => {
        this.songsnow = audio.currentTime;
        let minute = Math.floor(audio.currentTime / 60);
        let second = Math.floor(audio.currentTime % 60);
        this.songsnowtime=`${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
        //背景跟着歌曲变化
      }
    })
  },
  methods: {
    play() {
      let audio = this.$refs.audio;
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
}
</script>


<style scoped>

</style>