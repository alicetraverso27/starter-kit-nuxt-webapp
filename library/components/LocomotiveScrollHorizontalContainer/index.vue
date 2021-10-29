<template>
  <div ref="container" class="horizontal-container">
    <div
      ref="wrap"
      class="horizontal-container__wrap"
      :style="{
        '--panels': panels.length,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  props: {
    locomotive: {
      type: Object,
      default: undefined,
    },
    panelClass: {
      type: String,
      default: '.horizontal-container__panel',
    },
  },
  data: () => ({
    panels: [],
  }),
  watch: {
    locomotive: {
      handler() {
        // Horizontal pin setup https://codepen.io/GreenSock/pen/WNjaxKp
        this.panels = gsap.utils.toArray(this.panelClass)

        gsap.to(this.panels, {
          xPercent: -100 * (this.panels.length - 1),
          ease: 'none', // <-- IMPORTANT!
          scrollTrigger: {
            trigger: this.$refs.wrap,
            scroller: this.locomotive.scroll.el,
            pin: true,
            scrub: 0.1,
            // snap: directionalSnap(1 / (sections.length - 1)),
            end: '+=3000',
          },
        })
      },
    },
  },
  mounted() {
    // Update locomotive scroll sizes if nodes are added into the container
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length) {
          this.$nuxt.$emit('update-locomotive')
        }
      }
    })
    observer.observe(this.$refs.container, {
      childList: true,
      subtree: true,
    })
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
