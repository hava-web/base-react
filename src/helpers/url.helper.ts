/**
 * So chuỗi với số
 *
 * @category string, number
 * @param any types to compare
 * @param any types to compare
 * @returns Returns boolean of compare.
 * @example
 *
 * isEqualVal(1, "1") => true
 * isEqualVal(0, "0") => true
 * isEqualVal(0, "") => false
 * isEqualVal(0, "") => false
 * isEqualVal(1, "abc") => false
 * isEqualVal("abc", "abc") => true
 *
 */
function stringifyUrl(obj: any, prefix: string = ''): string {
  const str = [];
  let p;
  for (p in obj) {
    if (obj[p]) {
      const k = prefix ? `${prefix}[${p}]` : p;
      const v = obj[p];
      str.push(
        v !== null && typeof v === 'object'
          ? stringifyUrl(v, k)
          : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`,
      );
    }
  }
  return str.join('&');
}

function aSlash(path: string = '/'): string {
  return path?.[0] === '/' ? path : `/${path}`;
}

export { aSlash, stringifyUrl };
