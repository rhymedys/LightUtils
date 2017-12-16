import utils from '../../../src/index'

describe('TypeUtils', () => {
  it('can tell if a function _getObjectType pass', () => {
    const obj = {
      foo: 'bar'
    }
    const arr = [1, 2, 3]
    const primary = 123
    const str = '123'
    const testFunction = function () {}
    expect(utils._getObjectType(obj)).toBe('[object Object]')
    expect(utils._getObjectType(arr)).toBe('[object Array]')
    expect(utils._getObjectType(primary)).toBe('[object Number]')
    expect(utils._getObjectType(new Date())).toBe('[object Date]')
    expect(utils._getObjectType(true)).toBe('[object Boolean]')
    expect(utils._getObjectType(str)).toBe('[object String]')
    expect(utils._getObjectType(testFunction)).toBe('[object Function]')
  })

  it('can tell if a function _checkObjectType pass', () => {
    const obj = {
      foo: 'bar'
    }
    const arr = [1, 2, 3]
    const primary = 123
    const str = '123'
    const testFunction = function () {}

    expect(utils._checkObjectType(str, type => type.String)).toBe(true)
    expect(utils._checkObjectType(obj, type => type.Object)).toBe(true)
    expect(utils._checkObjectType(arr, type => type.Array)).toBe(true)
    expect(utils._checkObjectType(primary, type => type.Number)).toBe(true)
    expect(utils._checkObjectType(new Date(), type => type.Date)).toBe(true)
    expect(utils._checkObjectType(true, type => type.Boolean)).toBe(true)
    expect(utils._checkObjectType(testFunction, type => type.Function)).toBe(true)

  })
})
