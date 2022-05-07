import { ref } from '@nuxtjs/composition-api'

import VirtualBackgroundProcessor, {
  createSegmenter,
} from './virtualBackgroundProcessor'

const globalSegmenter = ref(createSegmenter())

export default function useVirtualBackground(track, compositeSteps = 4) {
  const virtualBackgroundProcessor = ref(null)

  const startVirtualBackground = async () => {
    if (!virtualBackgroundProcessor.value) {
      virtualBackgroundProcessor.value = new VirtualBackgroundProcessor({
        segmenter: await globalSegmenter.value,
        compositeSteps,
      })
    }

    if (track.value.processor) {
      track.value.removeProcessor(track.value.processor)
    }

    track.value.addProcessor(virtualBackgroundProcessor.value)
  }

  return { startVirtualBackground }
}
