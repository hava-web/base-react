/**
 * Trả ra giá trị mặc định nếu param1 (0, null, undefined, false hoặc "")
 *
 * @category all types
 * @param any
 * @param any
 * @returns Returns default value any.
 * @example
 *
 */
function dv(val: any, dVal: any = null) {
  return val || dVal;
}

export { dv };
