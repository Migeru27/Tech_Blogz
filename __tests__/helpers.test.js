const {format_date} = require('../utils/helpers');



test('format_date() returns a date string', () => {
    const date = new Date('2023-04-20 00:00:00');
  
    expect(format_date(date)).toBe('4/20/2023');
});