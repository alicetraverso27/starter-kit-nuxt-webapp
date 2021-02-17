<template>
  <video v-videojs="{ options }" class="video-js" />
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default {
  name: 'VideoPlayer',
  directives: {
    videojs: {
      inserted(el, binding, vnode) {
        vnode.context.player = videojs(el, binding.value.options, () => {
          vnode.context.$emit('init')
        })
      },
      unbind(el, binding, vnode) {
        vnode.context.player.dispose()
        vnode.context.player = undefined
      },
    },
  },
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    player: undefined,
  }),
  methods: {
    play(val) {
      if (val) {
        this.player.play()
      } else {
        this.player.pause()
      }
      this.$emit('play', val)
    },
    mute(val) {
      this.player.muted(val)
      this.$emit('mute', val)
    },
  },
}
</script>
