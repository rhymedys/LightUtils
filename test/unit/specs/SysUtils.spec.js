import utils from '../../../src/index'

describe('SysUtils', () => {
  it('can tell if a function _getUserAgent pass', () => {
    expect(!!utils._getUserAgent()).toBe(true)
  })

  it('can tell if a function _generateGUID pass', () => {
    expect(!!utils._generateGUID()).toBe(true)
  })

  it('can tell if a function _generateUUID pass', () => {
    expect(!!utils._generateUUID()).toBe(true)
  })
})