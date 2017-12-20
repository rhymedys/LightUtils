import utils from '../../../src/index'

describe('ApiUtils', () => {
  let domain = 'a'
  let test1 = ['a', 'b']
  it('can tell if a function _generateApiObjFromArr pass', () => {
    expect(utils._generateApiObjFromArr(domain, test1).a).toBe('a/a')
    expect(utils._generateApiObjFromArr(null, test1).a).toBe('a')
  })
})