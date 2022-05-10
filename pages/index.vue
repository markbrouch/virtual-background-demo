<template>
  <div>
    <v-row>
      <v-col>
        <VideoTrack v-if="rawVideoTrack" :track="rawVideoTrack" />
        <h1>Source</h1>
      </v-col>
      <v-col>
        <VideoTrack
          v-if="virtualBackgroundVideoTrack"
          :track="virtualBackgroundVideoTrack"
        />
        <h1>Final</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="toggleCompositeSteps">
          {{ showCompositeSteps ? 'Hide' : 'Show' }} Composite Steps
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="showCompositeSteps">
      <v-col>
        <VideoTrack
          v-if="composite1VideoTrack"
          :track="composite1VideoTrack"
          class="transparent-background"
        />
        <h3>Segmentation mask</h3>
      </v-col>
      <v-col>
        <VideoTrack
          v-if="composite2VideoTrack"
          :track="composite2VideoTrack"
          class="transparent-background"
        />
        <h3>Bilateral filter</h3>
      </v-col>
      <v-col>
        <VideoTrack
          v-if="composite3VideoTrack"
          :track="composite3VideoTrack"
          class="transparent-background"
        />
        <h3>Foreground composite</h3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

import VideoTrack from '~/components/VideoTrack.vue'

import useLocalVideoTrack from '~/composables/useLocalVideoTrack'
import useVirtualBackground from '~/composables/useVirtualBackground'

export default {
  name: 'IndexPage',
  components: {
    VideoTrack,
  },
  middleware: ['checkBrowserSupport'],
  setup() {
    const showCompositeSteps = ref(false)

    const {
      localVideoTrack: rawVideoTrack,
      getLocalVideoTrack: getRawVideoTrack,
    } = useLocalVideoTrack()
    const {
      localVideoTrack: virtualBackgroundVideoTrack,
      getLocalVideoTrack: getVirtualBackgroundVideoTrack,
    } = useLocalVideoTrack()
    const {
      localVideoTrack: composite1VideoTrack,
      getLocalVideoTrack: getComposite1VideoTrack,
    } = useLocalVideoTrack()
    const {
      localVideoTrack: composite2VideoTrack,
      getLocalVideoTrack: getComposite2VideoTrack,
    } = useLocalVideoTrack()
    const {
      localVideoTrack: composite3VideoTrack,
      getLocalVideoTrack: getComposite3VideoTrack,
    } = useLocalVideoTrack()

    const { startVirtualBackground } = useVirtualBackground(
      virtualBackgroundVideoTrack
    )
    const { startVirtualBackground: startComposite1VirtualBackground } =
      useVirtualBackground(composite1VideoTrack, 1)
    const { startVirtualBackground: startComposite2VirtualBackground } =
      useVirtualBackground(composite2VideoTrack, 2)
    const { startVirtualBackground: startComposite3VirtualBackground } =
      useVirtualBackground(composite3VideoTrack, 3)

    Promise.all([
      getRawVideoTrack(),
      getVirtualBackgroundVideoTrack(),
      getComposite1VideoTrack(),
      getComposite2VideoTrack(),
      getComposite3VideoTrack(),
    ]).then(() => {
      startVirtualBackground()
      startComposite1VirtualBackground()
      startComposite2VirtualBackground()
      startComposite3VirtualBackground()
    })

    const compositeVideoTracks = [
      composite1VideoTrack,
      composite2VideoTrack,
      composite3VideoTrack,
    ]

    const toggleCompositeSteps = () => {
      showCompositeSteps.value = !showCompositeSteps.value

      compositeVideoTracks.forEach((track) => {
        if (!showCompositeSteps.value) {
          track.value.stop()
        } else {
          track.value.restart()
        }
      })
    }

    return {
      showCompositeSteps,
      toggleCompositeSteps,
      rawVideoTrack,
      composite1VideoTrack,
      composite2VideoTrack,
      composite3VideoTrack,
      virtualBackgroundVideoTrack,
    }
  },
}
</script>

<style>
.transparent-background video {
  background-image: url('~@/assets/transparent.png');
  background-repeat: repeat;
}
</style>
