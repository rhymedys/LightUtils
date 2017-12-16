import utils from '../../../src/index'

describe('SysUtils', () => {
  it('can tell if a function _getUserAgent pass', () => {
    expect(!!utils._getUserAgent()).toBe(true)
  })
})