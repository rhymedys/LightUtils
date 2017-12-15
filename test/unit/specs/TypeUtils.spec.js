import TypeUtils from '../../../src/utils/TypeUtils'

describe('TypeUtils', () => {
  it('can tell if a function _getObjectType pass', () => {
    const obj = { foo: 'bar' }
    const arr = [ 1, 2, 3 ]
    const primary = 123
    const str='123'
    const testFunction=function(){
    }
    expect(TypeUtils._getObjectType(obj)).toBe('[object Object]')
    expect(TypeUtils._getObjectType(arr)).toBe('[object Array]')
    expect(TypeUtils._getObjectType(primary)).toBe('[object Number]')   
    expect(TypeUtils._getObjectType(new Date())).toBe('[object Date]') 
    expect(TypeUtils._getObjectType(true)).toBe('[object Boolean]')
    expect(TypeUtils._getObjectType(str)).toBe('[object String]')
    expect(TypeUtils._getObjectType(testFunction)).toBe('[object Function]')    
  })

  it('can tell if a function _checkObjectType pass', () => {
    const obj = { foo: 'bar' }
    const arr = [ 1, 2, 3 ]
    const primary = 123
    const str='123'
    const testFunction=function(){
    }


    expect(TypeUtils._checkObjectType(str,type=>type.String)).toBe(true)    
    expect(TypeUtils._checkObjectType(obj,type=>type.Object)).toBe(true)
    expect(TypeUtils._checkObjectType(arr,type=>type.Array)).toBe(true)
    expect(TypeUtils._checkObjectType(primary,type=>type.Number)).toBe(true)   
    expect(TypeUtils._checkObjectType(new Date(),type=>type.Date)).toBe(true) 
    expect(TypeUtils._checkObjectType(true,type=>type.Boolean)).toBe(true)
    expect(TypeUtils._checkObjectType(testFunction,type=>type.Function)).toBe(true)
    
  })
})
