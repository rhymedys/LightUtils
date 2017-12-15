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
    console.log(utils._getUrlPathByGrade(window.location,0))
    console.log(utils._getUrlPathByGrade(window.location.href,1))
    console.log(utils._getUrlPathByGrade(window.location.href,2))
    console.log(utils._getUrlPathByGrade(window.location.href,3))
  })

  it('can tell if a function _replaceUrlProtocal2CurrentProtocal pass',()=>{
    let test1='https://github.com/karma-runner/karma'
    
    console.log(utils._replaceUrlProtocal2CurrentProtocal(test1,true))
    console.log(utils._replaceUrlProtocal2CurrentProtocal(test1))
  })
})