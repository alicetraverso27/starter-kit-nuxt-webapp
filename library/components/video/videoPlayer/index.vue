<template>
  <video ref="videoPlayer" class="video-js" />
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {}
      },
    },
    play: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    player: null,
  }),
  watch: {
    play(val) {
      this.playVideo(val)
    },
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.$emit('ready')
    })
  },
  methods: {
    playVideo(val) {
      if (val) {
        this.player.play()
      } else {
        this.player.pause()
      }
      this.$emit('playing', val)
    },
    mute(val) {
      this.player.muted(val)
      this.$emit('mute', val)
    },
  },
  destroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>
