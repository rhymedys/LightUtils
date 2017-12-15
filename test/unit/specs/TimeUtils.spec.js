import  TimeUtils from '../../../src/utils/TimeUtils'

describe('TimeUtils',()=>{
  it('can tell if a function _injectDateFormatToDate pass',()=>{
    TimeUtils._injectDateFormatToDate()
    expect(!!window.Date.prototype.format).toBe(true)
  })

  it('can tell if a function _getWeekDayByDate pass',()=>{
    expect(TimeUtils._getWeekDayByDate('2017-12-15')).toBe('周五')
    expect(TimeUtils._getWeekDayByDate('2017-12-15 21:15:28')).toBe('周五')
    
  })

  it('can tell if a function _getDayByDate pass',()=>{
    expect(TimeUtils._getDayByDate('2017-12-16')).toBe('星期六')
    expect(TimeUtils._getDayByDate('2017-12-16 21:15:28')).toBe('星期六')
    
  })

  it('can tell if a function _getDateByTimestamp pass',()=>{
    expect(TimeUtils._getDateByTimestamp(1513343728619)).toBe('2017-12-15 21:15:28')
  })

  it('can tell if a function _getCurrentDate pass',()=>{
    console.log(TimeUtils._getCurrentDate())
  })
})