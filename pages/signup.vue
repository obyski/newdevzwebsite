<template>
  <div class="antialiased bg-body text-body font-body">
    <section class="relative py-16 overflow-hidden">
      <img class="absolute top-0 left-0 w-full h-full object-cover" src="@/assets/casper-assets/sign-in/background.png" alt="">
      <div class="relative container mx-auto px-4">
        <div class="max-w-2xl px-4 mx-auto">
          <div class="relative py-12 px-10 text-center rounded-3xl overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full filter backdrop-blur backdrop-filter bg-black bg-opacity-70"></div>
            <div class="relative">
              <h2 class="font-heading text-4xl font-medium text-white tracking-tight mb-6">Sign up to your account</h2>
              <p class="text-xl text-gray-600 mb-8">Casper is powered by state-of-the-art artificial intelligence and ensuring natural and meaningful interactions</p>
              <div class="max-w-md mx-auto">
                <form action="">
                  <div class="flex flex-col lg:flex-row mb-6 items-center">
                    <a class="inline-flex w-full h-12 mb-4 lg:mb-0 lg:mr-3 px-4 items-center justify-center text-sm font-medium text-gray-400 hover:text-gray-300 border border-gray-800 hover:border-gray-700 rounded-full" href="#">
                      <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.12 5.32H17V2.14C16.0897 2.04535 15.1751 1.99862 14.26 2C11.54 2 9.67999 3.66 9.67999 6.7V9.32H6.60999V12.88H9.67999V22H13.36V12.88H16.42L16.88 9.32H13.36V7.05C13.36 6 13.64 5.32 15.12 5.32Z" fill="white"></path>
                      </svg>
                      <span class="ml-2">Login with Facebook</span>
                    </a>
                    <a class="inline-flex w-full h-12 px-4 items-center justify-center text-sm font-medium text-gray-400 hover:text-gray-300 border border-gray-800 hover:border-gray-700 rounded-full" href="#">
                      <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.94 5.19C15.3181 4.75428 15.6063 4.24817 15.7882 3.70074C15.9701 3.1533 16.0421 2.57533 16 2C14.8394 2.09369 13.762 2.63956 13 3.52C12.6351 3.94198 12.3586 4.43288 12.1868 4.96364C12.0151 5.49441 11.9516 6.05424 12 6.61C12.5662 6.61472 13.1258 6.4891 13.6356 6.24286C14.1454 5.99662 14.5918 5.63637 14.94 5.19ZM17.46 12.63C17.4667 11.8637 17.6686 11.1118 18.0465 10.4452C18.4244 9.77859 18.966 9.21926 19.62 8.82C19.2073 8.22524 18.6616 7.73483 18.0263 7.38767C17.391 7.04052 16.6835 6.84615 15.96 6.82C14.4 6.66 12.96 7.73 12.13 7.73C11.3 7.73 10.13 6.84 8.83003 6.86C7.98016 6.888 7.15205 7.13578 6.42648 7.57919C5.70091 8.02259 5.10264 8.64648 4.69003 9.39C2.93003 12.45 4.24003 17 6.00003 19.47C6.80003 20.68 7.80003 22.05 9.12003 22C10.44 21.95 10.87 21.18 12.4 21.18C13.93 21.18 14.4 22 15.7 21.97C17 21.94 17.92 20.73 18.76 19.52C19.3551 18.6415 19.8199 17.6816 20.14 16.67C19.3475 16.332 18.6714 15.7693 18.1951 15.0513C17.7188 14.3333 17.4633 13.4916 17.46 12.63Z" fill="white"></path>
                      </svg>
                      <span class="ml-2">Login with Apple</span>
                    </a>
                  </div>
                  <div class="flex mb-6 items-center">
                    <div class="h-px w-full">
                      <div class="h-1/2 bg-gray-800"></div>
                    </div>
                    <span class="inline-block mx-4 text-sm text-gray-300">Or</span>
                    <div class="h-px w-full">
                      <div class="h-1/2 bg-gray-800"></div>
                    </div>
                  </div>
                  <div class="text-left">
                    <span class="block mb-2 text-sm font-medium text-white leading-snug">Email</span>
                    <input class="block w-full py-2 px-3 h-11 mb-6 bg-gray-800 border border-gray-700 rounded-lg text-sm placeholder-gray-500 text-white border-none outline-none" type="email" placeholder="casper@shuffle.dev">
                    <span class="block mb-2 text-sm font-medium text-white leading-snug">Password</span>
                    <div class="flex py-2 px-3 h-11 mb-5 bg-gray-800 border border-gray-700 rounded-lg">
                      <input class="w-full bg-transparent text-sm placeholder-gray-500 text-white border-none outline-none" type="email" placeholder="Enter your password">
                      <button class="text-gray-600 hover:text-gray-200">
                        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.9199 11.6C19.8999 6.91 16.0999 4 11.9999 4C7.89994 4 4.09994 6.91 2.07994 11.6C2.02488 11.7262 1.99646 11.8623 1.99646 12C1.99646 12.1377 2.02488 12.2738 2.07994 12.4C4.09994 17.09 7.89994 20 11.9999 20C16.0999 20 19.8999 17.09 21.9199 12.4C21.975 12.2738 22.0034 12.1377 22.0034 12C22.0034 11.8623 21.975 11.7262 21.9199 11.6ZM11.9999 18C8.81994 18 5.82994 15.71 4.09994 12C5.82994 8.29 8.81994 6 11.9999 6C15.1799 6 18.1699 8.29 19.8999 12C18.1699 15.71 15.1799 18 11.9999 18ZM11.9999 8C11.2088 8 10.4355 8.2346 9.77766 8.67412C9.11987 9.11365 8.60718 9.73836 8.30443 10.4693C8.00168 11.2002 7.92246 12.0044 8.0768 12.7804C8.23114 13.5563 8.61211 14.269 9.17152 14.8284C9.73093 15.3878 10.4437 15.7688 11.2196 15.9231C11.9955 16.0775 12.7998 15.9983 13.5307 15.6955C14.2616 15.3928 14.8863 14.8801 15.3258 14.2223C15.7653 13.5645 15.9999 12.7911 15.9999 12C15.9999 10.9391 15.5785 9.92172 14.8284 9.17157C14.0782 8.42143 13.0608 8 11.9999 8ZM11.9999 14C11.6044 14 11.2177 13.8827 10.8888 13.6629C10.5599 13.4432 10.3036 13.1308 10.1522 12.7654C10.0008 12.3999 9.9612 11.9978 10.0384 11.6098C10.1155 11.2219 10.306 10.8655 10.5857 10.5858C10.8654 10.3061 11.2218 10.1156 11.6098 10.0384C11.9977 9.96126 12.3999 10.0009 12.7653 10.1522C13.1308 10.3036 13.4431 10.56 13.6629 10.8889C13.8826 11.2178 13.9999 11.6044 13.9999 12C13.9999 12.5304 13.7892 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 11.9999 14Z" fill="currentColor"></path>
                        </svg>
                      </button>
                    </div>
                    <span class="block mb-2 text-sm font-medium text-white leading-snug">Repeat password</span>
                    <div class="flex py-2 px-3 h-11 mb-5 bg-gray-800 border border-gray-700 rounded-lg">
                      <input class="w-full bg-transparent text-sm placeholder-gray-500 text-white border-none outline-none" type="email" placeholder="Repeat password">
                      <button class="text-gray-600 hover:text-gray-200">
                        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.9199 11.6C19.8999 6.91 16.0999 4 11.9999 4C7.89994 4 4.09994 6.91 2.07994 11.6C2.02488 11.7262 1.99646 11.8623 1.99646 12C1.99646 12.1377 2.02488 12.2738 2.07994 12.4C4.09994 17.09 7.89994 20 11.9999 20C16.0999 20 19.8999 17.09 21.9199 12.4C21.975 12.2738 22.0034 12.1377 22.0034 12C22.0034 11.8623 21.975 11.7262 21.9199 11.6ZM11.9999 18C8.81994 18 5.82994 15.71 4.09994 12C5.82994 8.29 8.81994 6 11.9999 6C15.1799 6 18.1699 8.29 19.8999 12C18.1699 15.71 15.1799 18 11.9999 18ZM11.9999 8C11.2088 8 10.4355 8.2346 9.77766 8.67412C9.11987 9.11365 8.60718 9.73836 8.30443 10.4693C8.00168 11.2002 7.92246 12.0044 8.0768 12.7804C8.23114 13.5563 8.61211 14.269 9.17152 14.8284C9.73093 15.3878 10.4437 15.7688 11.2196 15.9231C11.9955 16.0775 12.7998 15.9983 13.5307 15.6955C14.2616 15.3928 14.8863 14.8801 15.3258 14.2223C15.7653 13.5645 15.9999 12.7911 15.9999 12C15.9999 10.9391 15.5785 9.92172 14.8284 9.17157C14.0782 8.42143 13.0608 8 11.9999 8ZM11.9999 14C11.6044 14 11.2177 13.8827 10.8888 13.6629C10.5599 13.4432 10.3036 13.1308 10.1522 12.7654C10.0008 12.3999 9.9612 11.9978 10.0384 11.6098C10.1155 11.2219 10.306 10.8655 10.5857 10.5858C10.8654 10.3061 11.2218 10.1156 11.6098 10.0384C11.9977 9.96126 12.3999 10.0009 12.7653 10.1522C13.1308 10.3036 13.4431 10.56 13.6629 10.8889C13.8826 11.2178 13.9999 11.6044 13.9999 12C13.9999 12.5304 13.7892 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 11.9999 14Z" fill="currentColor"></path>
                        </svg>
                      </button>
                    </div>
                    <div class="mb-4">
                      <label class="custom-checkbox flex items-center relative h-8 cursor-pointer">
                        <span class="inline-block ml-6 text-sm text-gray-400">Remember for 30 days</span>
                        <input class="absolute top-0 left-0 transform translate-y-1/2 w-4 h-4 opacity-0" type="checkbox" checked>
                        <span class="custom-check absolute top-0 left-0 transform translate-y-1/2 flex h-4 w-4 items-center justify-center bg-violet-400 border border-violet-700 rounded">
                          <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4733 4.80667C12.4114 4.74418 12.3376 4.69458 12.2564 4.66074C12.1752 4.62689 12.088 4.60947 12 4.60947C11.912 4.60947 11.8249 4.62689 11.7436 4.66074C11.6624 4.69458 11.5886 4.74418 11.5267 4.80667L6.56001 9.78L4.47334 7.68667C4.40899 7.62451 4.33303 7.57563 4.2498 7.54283C4.16656 7.51003 4.07768 7.49394 3.98822 7.49549C3.89877 7.49703 3.8105 7.51619 3.72844 7.55185C3.64639 7.58751 3.57217 7.63898 3.51001 7.70333C3.44785 7.76768 3.39897 7.84364 3.36617 7.92688C3.33337 8.01011 3.31728 8.099 3.31883 8.18845C3.32038 8.2779 3.33953 8.36618 3.37519 8.44823C3.41085 8.53028 3.46233 8.60451 3.52667 8.66667L6.08667 11.2267C6.14865 11.2892 6.22238 11.3387 6.30362 11.3726C6.38486 11.4064 6.472 11.4239 6.56001 11.4239C6.64802 11.4239 6.73515 11.4064 6.81639 11.3726C6.89763 11.3387 6.97137 11.2892 7.03334 11.2267L12.4733 5.78667C12.541 5.72424 12.595 5.64847 12.632 5.56414C12.6689 5.4798 12.688 5.38873 12.688 5.29667C12.688 5.2046 12.6689 5.11353 12.632 5.02919C12.595 4.94486 12.541 4.86909 12.4733 4.80667Z" fill="currentColor"></path>
                          </svg>
                        </span>
                      </label>
                    </div>
                    <div>
                      <button class="flex w-full h-14 py-2 px-4 mb-5 items-center justify-center text-base font-medium uppercase text-black hover:text-white bg-violet-500 hover:bg-violet-600 transition duration-200 rounded-full" type="submit">
                        <span class="mr-2">LOGIN NOW</span>
                        <svg width="25" height="24" viewbox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.4199 6.62C18.3185 6.37565 18.1243 6.18147 17.8799 6.08C17.7597 6.02876 17.6306 6.00158 17.4999 6H7.49994C7.23472 6 6.98037 6.10536 6.79283 6.29289C6.6053 6.48043 6.49994 6.73478 6.49994 7C6.49994 7.26522 6.6053 7.51957 6.79283 7.70711C6.98037 7.89464 7.23472 8 7.49994 8H15.0899L6.78994 16.29C6.69621 16.383 6.62182 16.4936 6.57105 16.6154C6.52028 16.7373 6.49414 16.868 6.49414 17C6.49414 17.132 6.52028 17.2627 6.57105 17.3846C6.62182 17.5064 6.69621 17.617 6.78994 17.71C6.8829 17.8037 6.9935 17.8781 7.11536 17.9289C7.23722 17.9797 7.36793 18.0058 7.49994 18.0058C7.63195 18.0058 7.76266 17.9797 7.88452 17.9289C8.00638 17.8781 8.11698 17.8037 8.20994 17.71L16.4999 9.41V17C16.4999 17.2652 16.6053 17.5196 16.7928 17.7071C16.9804 17.8946 17.2347 18 17.4999 18C17.7652 18 18.0195 17.8946 18.207 17.7071C18.3946 17.5196 18.4999 17.2652 18.4999 17V7C18.4984 6.86932 18.4712 6.74022 18.4199 6.62Z" fill="currentColor"></path>
                        </svg>
                      </button>
                      <p class="text-sm font-medium text-white">
                        <span>Already have an account?</span>
                        <a class="inline-block text-sky-900 hover:text-sky-600" href="#">Sign in</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink to="/" class="absolute top-12 right-20 z-30 border-white">
        <svg width="36" height="36" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </NuxtLink>
    </section>    
  </div>
</template>

<script setup>
  definePageMeta({
  layout: "signup-layout",
});
</script>