<template>
  <div v-locomotive="{ options }" class="js-locomotive">
    <slot />
  </div>
</template>

<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "LocomotiveScroll",
  directives: {
    locomotive: {
      inserted(el, binding, vnode) {
        vnode.context.locomotive = new vnode.context.LocomotiveScroll({
          el,
          ...binding.value.options,
        });
        vnode.context.locomotive.on("scroll", (e) => {
          vnode.context.onScroll(e);
          vnode.context.$emit("scroll");
        });
        vnode.context.$emit("init");
      },
      unbind(el, binding, vnode) {
        vnode.context.locomotive.destroy();
        vnode.context.locomotive = undefined;
      },
    },
  },
  props: {
    gettedOptions: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    locomotive: undefined,
    defaultOptions: {
      smooth: true,
    },
  }),
  computed: {
    options() {
      return { ...this.defaultOptions, ...this.gettedOptions };
    },
  },
  /**
   *  You can remove mounted hook if you don't needs custom updates
   *  Call this.$nuxt.$emit('update-locomotive') wherever you want
   */
  mounted() {
    this.$nuxt.$on("update-locomotive", () => {
      this?.locomotive?.update();
    });
  },
  methods: {
    onScroll(e) {
      if (typeof this.$store._mutations["app/setScroll"] !== "undefined") {
        this.$store.commit("app/setScroll", {
          isScrolling: this.locomotive.scroll.isScrolling,
          limit: { ...e.limit },
          ...e.scroll, // x, y
        });
      }
    },
  },
  watch: {
    locomotive: {
      handler() {
        this.locomotive.on("scroll", ScrollTrigger.update);
        const locomotive = this.locomotive;
        ScrollTrigger.scrollerProxy(locomotive.el, {
          scrollTop(value) {
            return arguments.length
              ? locomotive.scrollTo(value, 0, 0)
              : locomotive.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: document.querySelector(".js-locomotive").style.transform
            ? "transform"
            : "fixed",
        });
      },
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
