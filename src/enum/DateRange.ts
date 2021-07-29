export enum DateRange {
  ALL = 'ALL',
  TODAY = 'TODAY',
  RECENT_WEEK = 'RECENT_WEEK',
  RECENT_MONTH = 'RECENT_MONTH'
}

export const DateRangeMethods = {
  getLabel: (key: string) => {
    switch (key) {
      case DateRange.ALL:
        return '전체';
      case DateRange.TODAY:
        return '오늘';
      case DateRange.RECENT_WEEK:
        return '최근 7일';
      case DateRange.RECENT_MONTH:
        return '최근 30일';
      default:
        return '';
    }
  }
};
