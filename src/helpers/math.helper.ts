import { isNil } from 'lodash';
import numeral from 'numeral';

function generateRandomNumber() {
  return Math.floor(Math.random() * 10 ** 8);
}

function formatCurrency(s: number | string): string {
  if (isNil(s)) return '';

  return numeral(s).format('$0,0');
}

function formatMoneyVN(num: number): string {
  if (isNil(num)) return '0';

  return numeral(num).format('0,0');
}

function mToSec(num: number | undefined): number {
  return (num || 0) / 1000;
}

export { generateRandomNumber, formatCurrency, formatMoneyVN, mToSec };
