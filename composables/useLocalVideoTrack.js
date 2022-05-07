import { ref } from '@nuxtjs/composition-api'
import TwilioVideo from 'twilio-video'

export default function useLocalVideoTrack() {
  const localVideoTrack = ref(null)

  const getLocalVideoTrack = async () => {
    if (localVideoTrack.value) return localVideoTrack.value

    localVideoTrack.value = await TwilioVideo.createLocalVideoTrack()

    return localVideoTrack.value
  }

  return { localVideoTrack, getLocalVideoTrack }
}
