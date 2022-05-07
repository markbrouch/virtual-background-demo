import { shallowMount } from '@vue/test-utils'

import IndexPage from '~/pages/index.vue'

jest.mock('~/composables/useLocalVideoTrack', () => ({
  __esModule: true,
  default: () => ({
    localVideoTrack: null,
    getLocalVideoTrack: jest.fn(),
  }),
}))

jest.mock('~/composables/useVirtualBackground', () => ({
  __esModule: true,
  default: () => ({
    startVirtualBackground: jest.fn(),
  }),
}))

describe('Index Page', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(IndexPage)

    expect(wrapper.element).toMatchSnapshot()
  })
})
