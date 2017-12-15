import PathUtils from '../../../src/utils/PathUtils'

describe('PathUtils',()=>{
  it('can tell if a function _isUrl pass',()=>{
    let test1='https://github.com/karma-runner/karma'
    let test2='http://github.com/karma-runner/karma'
    let test3='github.com/karma-runner/karma'

    
    expect(PathUtils._isUrl(test1)).toBe(true)
    expect(PathUtils._isUrl(test2)).toBe(true)
    expect(PathUtils._isUrl(test3)).toBe(false)
  })

  it('can tell if a function _getUrlPathByGrade pass',()=>{
    let test1='https://github.com/karma-runner/karma'
    expect(PathUtils._getUrlPathByGrade(test1,0)).toBe(undefined)
    expect(PathUtils._getUrlPathByGrade(test1,1)).toBe('https://github.com')
    expect(PathUtils._getUrlPathByGrade(test1,2)).toBe('https://github.com/karma-runner')
    expect(PathUtils._getUrlPathByGrade(test1,3)).toBe('https://github.com/karma-runner/karma')
    
  })

  it('can tell if a function _replaceUrlProtocal2CurrentProtocal pass',()=>{
    let test1='https://github.com/karma-runner/karma'
    expect(PathUtils._replaceUrlProtocal2CurrentProtocal(test1,true)).toBe(`${window.location.protocol}//github.com/karma-runner/karma`)
    expect(PathUtils._replaceUrlProtocal2CurrentProtocal(test1)).toBe(`github.com/karma-runner/karma`)
  })
})