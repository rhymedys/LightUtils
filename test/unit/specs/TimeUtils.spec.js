import * as utils from '../../../src/utils/TimeUtils'

describe('utils',()=>{
  it('can tell if a function _injectDateFormatToDate pass',()=>{
    utils._injectDateFormatToDate()
    expect(!!window.Date.prototype.format).toBe(true)
  })

  it('can tell if a function _getDateByTimestamp pass',()=>{
    console.log(new Date())
    console.log(utils._getDateByTimestamp(new Date()))
  })
})