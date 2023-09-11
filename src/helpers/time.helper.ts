import { DATE_FORMAT } from 'constants/time.const';
import moment, { Moment } from 'moment';

/**
 * get date with format 2016-05-06T00:06:00 -> 06/06/2016
 */
function formatDate(
  date: string | Moment | Date | undefined,
  format: string = DATE_FORMAT,
) {
  if (date && moment(date)?.isValid()) {
    return moment(date).locale('vi').format(format);
  }

  return '';
}

export { formatDate };
