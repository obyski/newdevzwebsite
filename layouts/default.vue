<template>
    <div class="">
        <header :class="{ 'sticky': isSticky }" :style="{ backgroundColor: elementColor }"  class="absolute top-0 left-0 w-full z-40 transition-all ease-in-out delay-100 duration-150">
            <navigationComponent  />
        </header>
        <div>
            <slot/>
        </div>
        <footer>
            <footercomponent/>
        </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      elementColor: 'initial', // Initial color for the element
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 200) {
        this.isSticky = true;
        this.elementColor = '#582670'; // Change color when scrolled past 200
      } else {
        this.isSticky = false;
        this.elementColor = 'initial'; // Reset color when scrolled back up
      }
    }
  }
}

</script>

<style scoped>

</style>