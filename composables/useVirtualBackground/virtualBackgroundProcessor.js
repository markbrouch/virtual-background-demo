import '@tensorflow/tfjs-core'
import '@tensorflow/tfjs-backend-webgl'
import * as bodySegmentation from '@tensorflow-models/body-segmentation'
import * as mpSelfieSegmentation from '@mediapipe/selfie_segmentation'
import * as fx from 'glfx'

import VirtualBackgroundPath from '~/assets/virtual-background.mp4'

export function drawVideo(canvas, video) {
  const context = canvas.getContext('2d')

  const width = video.videoWidth
  const height = video.videoHeight
  const scale = Math.max(canvas.width / width, canvas.height / height)

  context.setTransform(scale, 0, 0, scale, canvas.width / 2, canvas.height / 2)
  context.drawImage(video, -width / 2, -height / 2, width, height)
  context.resetTransform()
}

export default class VirtualBackgroundProcessor {
  constructor(options) {
    this.segmenter = options.segmenter
    this.fxCanvas = fx.canvas()
    this.fxTexture = this.fxCanvas.texture(new Image())

    this.virtualBackground = document.createElement('video')
    this.virtualBackground.autoplay = true
    this.virtualBackground.loop = true
    this.virtualBackground.src =
      options.virtualBackgroundPath || VirtualBackgroundPath

    this.compositeSteps = options.compositeSteps || 4
  }

  async processFrame(inputFrameBuffer, outputFrameBuffer) {
    const [people] = await this.segmenter.segmentPeople(inputFrameBuffer)
    const { mask } = people.mask

    const context = outputFrameBuffer.getContext('2d')

    context.globalCompositeOperation = 'copy'
    context.drawImage(mask, 0, 0)
    if (this.compositeSteps < 2) return

    this.fxTexture.loadContentsOf(outputFrameBuffer)
    this.fxCanvas.draw(this.fxTexture).denoise(5).update()
    context.drawImage(this.fxCanvas, 0, 0)
    context.globalCompositeOperation = 'destination-in'
    context.drawImage(mask, 0, 0)
    if (this.compositeSteps < 3) return

    context.globalCompositeOperation = 'source-in'
    context.drawImage(inputFrameBuffer, 0, 0)
    if (this.compositeSteps < 4) return

    context.globalCompositeOperation = 'destination-over'
    drawVideo(outputFrameBuffer, this.virtualBackground)
  }
}

export function createSegmenter() {
  return bodySegmentation.createSegmenter(
    bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation,
    {
      runtime: 'mediapipe',
      modelType: 'landscape',
      solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation@${mpSelfieSegmentation.VERSION}`,
    }
  )
}
