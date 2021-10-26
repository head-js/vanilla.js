const dayjs = require('dayjs');
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore');
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
require('dayjs/locale/zh-cn');


dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);


dayjs.locale('zh-cn');


Object.defineProperty(exports, '__esModule', {
  value: true
});
module.exports['default'] = dayjs;
