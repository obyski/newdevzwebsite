<template>
    <div v-if="showMenu" class="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
        <div class="navbar-backdrop fixed inset-0bg-violet-900 opacity-20"></div>
        <nav class="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
          <div class="flex mb-auto items-center">
            <a class="inline-block mr-auto" href="#">
              <!-- <img class="h-10" src="@/assets/casper-assets/logos/casper-logo.svg" alt=""> -->
              <h1 class="text-2xl text-white font-bold italic">NEWDEV</h1>
            </a>
            <div @click="toggleMenu" class="navbar-close">
              <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </div>
          <div class="py-12 mb-auto">
            <ul class="flex-col">
              <li class="group block w-full mb-6 text-left rounded-3xl">
                <ul>
                  <li><a class="inline-block text-base text-black font-medium uppercase" href="#">FEATURED</a></li>
                  <div class="hidden group-hover:block max-w-xl mt-5 px-8 transition-transform delay-100 ease-in-out">
                    <li><nuxt-link @click="toggleMenu" to="/" class="inline-block text-base text-black font-medium uppercase">HOME</nuxt-link></li>
                    <li><nuxt-link @click="toggleMenu" to="/aboutus" class="inline-block text-base text-black font-medium uppercase mt-5">ABOUT US</nuxt-link></li>
                    <li><nuxt-link @click="toggleMenu" to="/careers" class="inline-block text-base text-black font-medium uppercase mt-5">CAREERS</nuxt-link></li>
                    <li><nuxt-link @click="toggleMenu" to="/portfolio" class="inline-block text-base text-black font-medium uppercase mt-5">PORTFOLIOS</nuxt-link></li>
                    <li><nuxt-link @click="toggleMenu" to="/blog" class="inline-block text-base text-black font-medium uppercase mt-5">BLOG</nuxt-link></li>
                    <li><nuxt-link @click="toggleMenu" to="/terms" class="inline-block text-base text-black font-medium uppercase mt-5">TERMS</nuxt-link></li>
                    <li><nuxt-link @click="toggleMenu" to="/contactus" class="inline-block text-base text-black font-medium uppercase mt-5">CONTACT US</nuxt-link></li>
                  </div>
                </ul>
              </li>
              <li class="mb-6"><a class="inline-block text-base text-black font-medium uppercase" href="#">SOLUTIONS</a></li>
              <li class="mb-6"><a class="inline-block text-base text-black font-medium uppercase" href="#">PRODUCTS</a></li>
              <li><a class="inline-block text-base text-black font-medium uppercase" href="#">ARTICLES</a></li>
            </ul>
          </div>
          <div>
            <NuxtLink to="/signin" class="flex py-2 px-4 mb-4 items-center justify-center text-sm font-medium uppercase text-violet-900 hover:text-violet-500" >SIGN IN</NuxtLink>
            <NuxtLink to="/signup" class="flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase text-black hover:text-white bg-violet-500 hover:bg-violet-600 transition duration-200 rounded-full">SIGN UP</NuxtLink>
          </div>
        </nav>
    </div>
</template>

<script>
 import { ref } from 'vue';

 export default {
  data() {
    return {
      showMenu: true
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>