<template>
<div>
  <div class="bg-white relative overflow-hidden">
    <div class="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <!-- Product -->
      <div class="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        <!-- Product image -->
        <div class="lg:col-span-4 lg:row-end-1">
          <div class="h-96 overflow-hidden rounded-lg bg-gray-100 overflow-hidden">
            <img  :src="coverImgUrl"  class="object-cover w-full object-center songimgs">
          </div>
        </div>

        <!-- Product details -->
        <div class="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
          <div class="flex flex-col-reverse">
            <div class="mt-4">
              <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{songslistsname}}</h1>

              <h2 id="information-heading" class="sr-only">&nbsp;</h2>
              <p class="mt-2 text-sm text-gray-500">&nbsp;</p>
            </div>

            <div>
              <h3 class="sr-only">&nbsp;</h3>
              <div class="flex items-center">
              </div>
              <p class="sr-only">&nbsp;</p>
            </div>
          </div>

          <p class="mt-6 text-gray-500">{{description}}</p>
        </div>

      </div>
    </div>
  </div>


  <div>
    <div class="mt-6 flow-root">
      <ul role="list" v-for="item in playlisttracks" :key="item.id" class="-my-5 divide-y divide-gray-200">
        <li class="py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" :src="item.al.picUrl" alt="">
            </div>
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-medium text-gray-900">{{item.name}}</p>
              <p class="truncate text-sm text-gray-500">@leonardkrasner</p>
            </div>
            <div>
              <span  class="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">播放</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios'
import httpurls from "@/httpurl";
export default {
  name: "songpages",
  data() {
    return {
      songspageid: '',
      picurl:'',
      songslistsname:'',
      coverImgUrl:'',
      description:'',
      playlisttracks:'',

    }
  },
  created() {
    let getsongslist=async ()=>{
      this.songspageid = this.$route.query.id;
      localStorage.setItem('songspageid',this.songspageid);
      this.songspageid = localStorage.getItem('songspageid');
      let getsongslist = await axios.get(`${httpurls}/playlist/detail?id=${this.songspageid}`);
      console.log(getsongslist.data);
      this.songslistsname = getsongslist.data.playlist.name;
      this.coverImgUrl = getsongslist.data.playlist.coverImgUrl;
      this.description = getsongslist.data.playlist.description;
      let playlisttracks = await axios.get(`${httpurls}/playlist/track/all?id=${this.songspageid}&limit=100&offset=0`);
      this.playlisttracks = playlisttracks.data.songs;
    }
    getsongslist();
  }
}
</script>

<style scoped>
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

.songimgs{
  animation: scale 200s infinite ;
  animation-timing-function: linear;
}

</style>