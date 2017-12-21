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

  it('can tell if a function _isColor pass', () => {
    expect(utils._isColor('#000')).toBe(true)
  })

  it('can tell if a function _isIdentity pass', () => {
    expect(utils._isIdentity('#000')).toBe(false)
    expect(utils._isIdentity('210404199901014977')).toBe(true)
    expect(utils._isIdentity('21040419990114977')).toBe(false)
  })

  it('can tell if a function _isPhoneNum pass', () => {
    expect(utils._isPhoneNum('#000')).toBe(false)
    expect(utils._isPhoneNum('13800138000')).toBe(true)
  })
})