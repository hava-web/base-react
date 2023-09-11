import { useCallback, useMemo } from 'react';
import qs, { ParsedQuery } from 'query-string';
import { useLocation } from 'react-router';
import { toNumber } from 'lodash';
import {
  PAGE_INDEX_DEFAULT,
  PAGE_SIZE_DEFAULT,
  QUERY_STRING,
} from 'constants/route.const';

export interface DefaultCustomizeParamsProps {
  params: ParsedQuery;

  id: number | string;

  pageIndex?: number;
  pageSize?: number;

  isForceUseDefault?: boolean;
  getValue?: Function;
  getNumberValue?: Function;
}

export const useCustomizeQueryString = (
  props?: Partial<DefaultCustomizeParamsProps>,
): DefaultCustomizeParamsProps => {
  const { search } = useLocation();
  const params = useMemo(() => qs.parse(search), [search]);

  const getValue = useCallback(
    (query: string, defaultVal: string | number = ''): string => {
      if (props?.isForceUseDefault) {
        return `${params?.[query] || (defaultVal ?? '')}`;
      }
      return `${params?.[query] ?? defaultVal ?? ''}`;
    },
    [params, props?.isForceUseDefault],
  );

  const getNumberValue = useCallback(
    (query: string, defaultVal: number = 0): number =>
      toNumber(params?.[query]) || +defaultVal,
    [params],
  );

  const id = useMemo(() => getValue(QUERY_STRING.ID), [getValue]);

  const pageIndex = useMemo(
    () => getNumberValue(QUERY_STRING.PAGE, PAGE_INDEX_DEFAULT),
    [getNumberValue],
  );

  const pageSize = useMemo(
    () => getNumberValue(QUERY_STRING.PAGE_SIZE, PAGE_SIZE_DEFAULT),
    [getNumberValue],
  );

  return {
    params,

    id,

    pageIndex,
    pageSize,

    getValue,
    getNumberValue,
  };
};
