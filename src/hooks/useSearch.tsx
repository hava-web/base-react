import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'query-string';
import { useCustomizeQueryString } from 'hooks/useCustomizeQueryString';

export const useSearch = () => {
  const { pathname } = useLocation();
  const { params } = useCustomizeQueryString();
  const navigate = useNavigate();

  const handleSearch = useCallback(
    (searchObject: Record<string, any>) => {
      navigate(
        `${pathname}?${qs.stringify({
          ...params,
          ...searchObject,
        })}`,
        { replace: true },
      );
    },
    [navigate, params, pathname],
  );

  return { handleSearch };
};
