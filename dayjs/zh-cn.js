const dayjs = require('dayjs'); // eslint-disable-line @typescript-eslint/no-var-requires
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore'); // eslint-disable-line @typescript-eslint/no-var-requires
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter'); // eslint-disable-line @typescript-eslint/no-var-requires
require('dayjs/locale/zh-cn');


dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);


dayjs.locale('zh-cn');


Object.defineProperty(exports, '__esModule', {
  value: true
});
module.exports['default'] = dayjs;
