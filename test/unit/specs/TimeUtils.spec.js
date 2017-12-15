import * as utils from '../../../src/utils/TimeUtils'

describe('utils',()=>{
  it('can tell if a function _injectDateFormatToDate pass',()=>{
    utils._injectDateFormatToDate()
    expect(!!window.Date.prototype.format).toBe(true)
  })

  it('can tell if a function _getWeekDayByDate pass',()=>{
    expect(utils._getWeekDayByDate('2017-12-15')).toBe('周五')
    expect(utils._getWeekDayByDate('2017-12-15 21:15:28')).toBe('周五')
    
  })

  it('can tell if a function _getDayByDate pass',()=>{
    expect(utils._getDayByDate('2017-12-16')).toBe('星期六')
    expect(utils._getDayByDate('2017-12-16 21:15:28')).toBe('星期六')
    
  })

  it('can tell if a function _getDateByTimestamp pass',()=>{
    expect(utils._getDateByTimestamp(1513343728619)).toBe('2017-12-15 21:15:28')
  })

  it('can tell if a function _getCurrentDate pass',()=>{
    console.log(utils._getCurrentDate())
  })
})