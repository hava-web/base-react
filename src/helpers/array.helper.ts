import { forEach, forIn, includes, isArray, isObject, keys } from 'lodash';

/**
 * tìm kiếm đệ quy tồn tại key
 *
 * deepFindKey([{"key1": 1}, {"key2": 1}], "key2") => true
 * deepFindKey([{"key1": 1}, {"key2": 1}], "newKey") => false
 */
function deepFindKey(
  arrayOfObject: any,
  keyWantToFind: string,
  maxDeepLevel: number = 3,
): boolean {
  let isFounded = false;
  function checkExistData(array: any, key: any, level: number = 1) {
    if (level > maxDeepLevel) return;
    if (isFounded) return;
    if (!array) return;
    if (array) {
      if (isObject(array) && !!includes(keys(array), key)) {
        isFounded = true;
        return;
      }
      if (isObject(array)) {
        forIn(array, (item) => checkExistData(item, key, level + 1));
      }
      if (isArray(array)) {
        forEach(array, (item) => checkExistData(item, key, level + 1));
      }
    }
  }
  checkExistData(arrayOfObject, keyWantToFind, 1);
  return isFounded;
}

export { deepFindKey };
