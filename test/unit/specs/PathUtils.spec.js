import * as utils from '../../../src/utils/PathUtils'

describe('utils',()=>{
  it('can tell if a function _isUrl pass',()=>{
    let test1='https://github.com/karma-runner/karma'
    let test2='http://github.com/karma-runner/karma'
    let test3='github.com/karma-runner/karma'

    
    expect(utils._isUrl(test1)).toBe(true)
    expect(utils._isUrl(test2)).toBe(true)
    expect(utils._isUrl(test3)).toBe(false)
  })

  it('can tell if a function _getUrlPathByGrade pass',()=>{
    let test1='https://github.com/karma-runner/karma'
    expect(utils._getUrlPathByGrade(test1,0)).toBe(undefined)
    expect(utils._getUrlPathByGrade(test1,1)).toBe('https://github.com')
    expect(utils._getUrlPathByGrade(test1,2)).toBe('https://github.com/karma-runner')
    expect(utils._getUrlPathByGrade(test1,3)).toBe('https://github.com/karma-runner/karma')
    
  })

  it('can tell if a function _replaceUrlProtocal2CurrentProtocal pass',()=>{
    let test1='https://github.com/karma-runner/karma'
    expect(utils._replaceUrlProtocal2CurrentProtocal(test1,true)).toBe(`${window.location.protocol}//github.com/karma-runner/karma`)
    expect(utils._replaceUrlProtocal2CurrentProtocal(test1)).toBe(`github.com/karma-runner/karma`)
  })
})