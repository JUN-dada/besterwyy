<template>
  <div class="w-full h-full">
    <div class="w-full h-3/5 relative">
      <div class="w-full h-full absolute z-10 overflow-hidden">
        <img class="w-full blur-3xl" :src="airtistdescuser.backgroundUrl" alt="">
      </div>


      <div class="w-full h-5/6 relative z-30  flex justify-center items-center">
        <div class="w-1/12 h-2/6 overflow-hidden">
          <img class="h-full" :src="airtistdetail.cover" alt="">
        </div>
      </div>

      <div class="w-full h-16 flex relative z-30 justify-start items-center">
        <span class="text-3xl font-bold">{{airtistdetail.name}}</span>
      </div>
    </div>


  </div>
</template>

<script>
import axios from "axios";
import httpurls from "../../httpurl";

export default {
  name: "artistdetails",
  data() {
    return {
      airtist: '',
      airtistdetail: '',
      airtistdescuser: ''
    }
  },
  created() {
    this.airtist = this.$route.query.item;
    axios.get(`${httpurls}/artist/detail?id=${this.airtist.id}`).then(res => {
      this.airtistdetail = res.data.data.artist
      this.airtistdescuser = res.data.data.user;
    }).catch(
        err => {
          console.log(err);
        })
  }
}
</script>

<style scoped>

</style>