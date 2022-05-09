# virtual-background-demo

A simple [Twilio Video](https://www.twilio.com/docs/video/overview) app showing how to build a video processor that replaces the background of a video stream.

## Try it out!

[virtual-background-demo.markbrouch.com
![Demo](https://github.com/markbrouch/virtual-background-demo/blob/d0f0351c73b9572f46dcfed85ce40b3f87f5ddc5/demo.gif?raw=true)](https://virtual-background-demo.markbrouch.com)

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## How it works

The virtual background video processor pipes video frames through Google's [MediaPipe Selfie Segmentation](https://google.github.io/mediapipe/solutions/selfie_segmentation.html) model and then uses [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) to composite the virtual background layers.

Check out my upcoming talk at [JSConf Budapest](https://jsconfbp.com/speakers/mark-brouch/) to learn more about how I built this!
