import { REVERSE_DATE_FORMAT } from 'constants/time.const';
import { reduce } from 'lodash';
import moment from 'moment';
import qs from 'query-string';

/**
 * Xử lý dữ liệu payload trước khi call api
 *
 * @category Object
 * @param object
 * @returns Returns string.
 * @example
 * { a: 1, b: 20 } => a=1&b=20
 *
 */
function preprocessGetQuery(payload: any = {}) {
  reduce(
    payload,
    (oldPayload, item, key) => {
      if (item instanceof Date) {
        return {
          ...oldPayload,
          [key]: item,
        };
      }
      return {
        ...oldPayload,
        [key]: item,
        ...((item instanceof Date || item instanceof Date) && {
          [key]: moment(item).format(REVERSE_DATE_FORMAT),
        }),
      };
    },
    payload,
  );
  return qs.stringify(payload);
}

export { preprocessGetQuery };
