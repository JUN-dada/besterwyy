<template>
  <div class="box w-full h-screen absolute">
    <div class="w-full h-[6%] relative top-0 left-0 z-50 opacity-40">
      <div class="w-full h-full z-50 flex">
        <div class="w-1/6 h-full flex justify-center items-center">
          <div>
            <input type="checkbox" @click="clickhum" id="toggler">
            <label for="toggler">
              <div class="hamburger-container">
                <span :class="spanbg"></span>
                <span :class="spanbg"></span>
                <span :class="spanbg"></span>
              </div>
            </label>
          </div>
        </div>

        <div class="w-full h-full flex justify-end">
          <div class="w-1/6 h-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">-->
              <g fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-width="2">
                <path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"/>
                </path>
                <path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0"/>
                </path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div :class="`w-full ${topincss} z-40 absolute top-0 left-0`">
      <footer ref="inblackbox" v-show="isclick" class="text-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="space-y-8">
              <p class="text-3xl leading-6 ">更多</p>
            </div>
            <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-semibold leading-6">Solutions</h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li>
                      <a href="#" class="text-sm leading-6">Marketing</a>
                    </li>

                    <li>
                      <a href="#" class="text-sm leading-6 hover:text-gray-900">Analytics</a>
                    </li>

                    <li>
                      <a href="#" class="text-sm leading-6 hover:text-gray-900">Commerce</a>
                    </li>

                    <li>
                      <a href="#" class="text-sm leading-6 hover:text-gray-900">Insights</a>
                    </li>
                  </ul>
                </div>
                <div class="mt-10 md:mt-0">
                  <h3 class="text-sm font-semibold leading-6 ">Support</h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li>
                      <a href="#" class="text-sm leading-6  hover:text-gray-900">Pricing</a>
                    </li>

                    <li>
                      <a href="#" class="text-sm leading-6  hover:text-gray-900">Documentation</a>
                    </li>

                    <li>
                      <a href="#" class="text-sm leading-6  hover:text-gray-900">Guides</a>
                    </li>

                    <li>
                      <a href="#" class="text-sm leading-6  hover:text-gray-900">API Status</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-semibold leading-6 ">Company</h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li>
                      <a href="#" class="text-sm leading-6  hover:text-gray-900">About</a>
                    </li>

                    <li>
                      <a href="#" class="text-sm leading-6  hover:text-gray-900">Blog</a>
                    </li>

                    <li>
                      <a href="#" class="text-sm leading-6  hover:text-gray-900">Jobs</a>
                    </li>

                    <li>
                      <a href="#" class="text-sm leading-6  hover:text-gray-900">Press</a>
                    </li>

                    <li>
                      <a href="#" class="text-sm leading-6  hover:text-gray-900">Partners</a>
                    </li>
                  </ul>
                </div>
                <div class="mt-10 md:mt-0">
                  <h3 class="text-sm font-semibold leading-6 ">Legal</h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li>
                      <a href="#" class="text-sm leading-6  hover:text-gray-900">Claim</a>
                    </li>

                    <li>
                      <a href="#" class="text-sm leading-6  hover:text-gray-900">Privacy</a>
                    </li>

                    <li>
                      <a href="#" class="text-sm leading-6  hover:text-gray-900">Terms</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>


    <div class="w-full h-[86%] overflow-hidden overflow-y-scroll top-0 left-0"  style="scroll-behavior: smooth;">
      <router-view></router-view>
    </div>

    <div class="w-full h-[8%] relative z-10">
      <playsings></playsings>
    </div>

  </div>
</template>

<script>
import Playsings from "@/components/pages/playsings.vue";

export default {
  name: "homepage",
  components: {Playsings},
  data() {
    return {
      isclick: false,
      topincss:'h-[6%]',
      spanbg:'bg-black'
    }
  },
  methods: {
    clickhum(){
      this.isclick = !this.isclick
      if (this.isclick===true) {
        this.topincss = 'h-[100%] bg-black opacity-90'
        this.spanbg = 'bg-white'
        this.$refs.inblackbox.style=1;
      } else {
        this.topincss = 'h-[6%]'
        this.spanbg = 'bg-black'
        this.$refs.inblackbox.style=0;
      }
    }
  },
  created() {
    this.$store.dispatch('getlovemassage')
    this.$store.dispatch('getlovemassage')
  }

}
</script>

<style scoped>
*{
transition: 1s;
}

.hamburger-container {
  display: block;
  width: 24px;
  height: 24px;
  margin: auto;
}

.hamburger-container span {
  display: block;
  height: 4px;
  position: relative;
  transition: transform .3s ease-in-out, top .3s ease-in-out .3s, opacity .01s linear .3s;
  top: 0;
  opacity: 1;
}

.hamburger-container span:nth-child(2) {
  margin: 6px 0;
}

#toggler:checked ~ label .hamburger-container span:nth-child(1) {
  transform: rotate(45deg);
  top: 10px;
  transition: top .3s ease-in-out, transform .3s ease-in-out .3s;
}

#toggler:checked ~ label .hamburger-container span:nth-child(3) {
  transform: rotate(-45deg);
  top: -10px;
  transition: top .3s ease-in-out, transform .3s ease-in-out .3s;
}

#toggler:checked ~ label .hamburger-container span:nth-child(2) {
  opacity: 0;
  transition: opacity .01s linear .3s;
}

#toggler {
  display: none;
}
</style>