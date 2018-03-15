import utils from '../../../src/index'

describe('PathUtils', () => {
  let test1 = 'https://github.com/karma-runner/karma?abc=123'
  let test2 = 'http://github.com/karma-runner/karma'
  let test3 = 'github.com/karma-runner/karma'

  it('can tell if a function _isUrl pass', () => {
    expect(utils._isUrl(test1)).toBe(true)
    expect(utils._isUrl(test2)).toBe(true)
    expect(utils._isUrl(test3)).toBe(false)
  })

  it('can tell if a function _getUrlPathByGrade pass', () => {
    expect(utils._getUrlPathByGrade(test1, 0)).toBe(undefined)
    expect(utils._getUrlPathByGrade(test1, 1)).toBe('https://github.com')
    expect(utils._getUrlPathByGrade(test1, 2)).toBe('https://github.com/karma-runner')
    expect(utils._getUrlPathByGrade(test1, 3)).toBe('https://github.com/karma-runner/karma')

  })

  it('can tell if a function _replaceUrlProtocal2CurrentProtocal pass', () => {
    expect(utils._replaceUrlProtocal2CurrentProtocal(test1, true)).toBe(`${window.location.protocol}//github.com/karma-runner/karma?abc=123`)
    expect(utils._replaceUrlProtocal2CurrentProtocal(test1)).toBe(`github.com/karma-runner/karma?abc=123`)
  })

  it('can tell if a function _getURLProtocol pass', () => {
    expect(utils._getURLProtocol(test1)).toBe('https')
    expect(utils._getURLProtocol(test2)).toBe('http')
    expect(utils._getURLProtocol(test3)).toBe(null)
  })

  it('can tell if a function _getUrlQuery pass', () => {
    expect(utils._getUrlQuery(test1)).toBe('abc=123')
    expect(utils._getUrlQuery(test2)).toBe(null)
  })

  it('can tell if a function _query2Json pass', () => {
    expect(utils._query2Json(test1).abc).toBe('123')
    expect(utils._query2Json(test2).abc).toBe(undefined)
  })


  it('can tell if a function _removeProtocol pass', () => {
    expect(utils._removeProtocol(test1)).toBe('//github.com/karma-runner/karma?abc=123')
    expect(utils._removeProtocol(test2)).toBe('//github.com/karma-runner/karma')
  })
})