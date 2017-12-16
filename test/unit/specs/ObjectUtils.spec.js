import utils from '../../../src/index'

describe('ObjectUtils', () => {
  let test1={
    a:1,
    b:2
  }
  it('can tell if a function _removeItemFromObject pass', () => {
    expect(utils._removeItemFromObject(test1,'a').a).toBe(undefined)
    expect(utils._removeItemFromObject(test1,['a']).a).toBe(undefined)
    expect(utils._removeItemFromObject(test1,[]).a).toBe(1)
  })
})