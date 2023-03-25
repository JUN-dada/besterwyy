<template>
<div class="w-full h-full bg-yellow-100">

  <div class="w-full h-full flex">
  <div class="w-1/12 h-full bg-red-200 flex">
    <div class="w-1/6 h-full bg-red-300 flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="m1 7.4l.7.7l6-6l6 6l.7-.7L8.1 1h-.7L1 7.4zm0 6l.7.7l6-6l6 6l.7-.7L8.1 7h-.7L1 13.4z"/></svg>
<!--      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="m1 7.4l.7.7l6-6l6 6l.7-.7L8.1 1h-.7L1 7.4zm0 6l.7.7l6-6l6 6l.7-.7L8.1 7h-.7L1 13.4z"/></svg>-->
    </div>
    <div class="w-5/6 h-full bg-red-300 flex justify-center items-center">
        <div class="w-1/2 h-full bg-blue-200"></div>
    </div>
  </div>

    <div class="w-10/12 h-full bg-red-300 flex justify-center items-center">
        <div class="w-8/12 h-full bg-yellow-100">
          <div class="w-full h-1/2 flex items-center flex justify-center">
            <div class="w-1/6 h-full bg-blue-200 flex justify-between items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.75 5.75v-4h1.5v2.542c1.145-1.359 2.911-2.209 4.84-2.209c3.177 0 5.92 2.307 6.16 5.398l.02.269h-1.5l-.022-.226c-.212-2.195-2.202-3.94-4.656-3.94c-1.736 0-3.244.875-4.05 2.166h2.83v1.5H2.707l-.961-.975V5.75h.003zM8 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4z" clip-rule="evenodd"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m4.25 3l1.166-.624l8 5.333v1.248l-8 5.334l-1.166-.624V3zm1.5 1.401v7.864l5.898-3.932L5.75 4.401z" clip-rule="evenodd"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M14.25 5.75v-4h-1.5v2.542c-1.145-1.359-2.911-2.209-4.84-2.209c-3.177 0-5.92 2.307-6.16 5.398l-.02.269h1.501l.022-.226c.212-2.195 2.202-3.94 4.656-3.94c1.736 0 3.244.875 4.05 2.166h-2.83v1.5h4.163l.962-.975V5.75h-.004zM8 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" clip-rule="evenodd"/></svg>
            </div>
          </div>

          <div class="w-full h-1/2 flex items-center flex justify-center">
            <div class="w-full h-full bg-blue-200 flex justify-between items-center">
                <div class="w-1/12 h-full bg-green-300">

                </div>

              <div class="w-10/12 h-full bg-red-300">

              </div>

              <div class="w-1/12 h-full bg-green-300">

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
      songsid:null,
      songmassgae: JSON.parse(localStorage.getItem('playsing'))
    };
  },
  mounted() {
    console.log(this.songmassgae,'mount中的值')
  },
  watch: {
    songmassgae: {
      handler: function (val, oldVal) {
        console.log(val,oldVal);
      },
      deep: true
    }
  },
}
</script>


<style scoped>

</style>