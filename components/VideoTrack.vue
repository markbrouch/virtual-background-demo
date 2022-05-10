<template>
  <div ref="videoContainer" class="video-container" />
</template>

<script>
export default {
  name: 'VideoTrack',
  props: {
    track: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    const videoElement = this.track.attach()
    videoElement.style.width = '100%'
    this.$refs.videoContainer.appendChild(videoElement)
  },
}
</script>

<style>
.video-container {
  height: 100%;
  width: 100%;
}
</style>
