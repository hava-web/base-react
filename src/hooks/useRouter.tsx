import { useCallback } from 'react';
import { matchPath, useLocation } from 'react-router';

export interface UseRouterReturnTypes {
  isMatchPath: (
    pathModel: string,
    pathname?: string,
  ) => ReturnType<typeof matchPath>;
}

export const useRouter = (): UseRouterReturnTypes => {
  const { pathname } = useLocation();

  const isMatchPath = useCallback(
    (pathModel: string, path = pathname) =>
      matchPath(
        {
          path: pathModel,
        },
        path,
      ),
    [pathname],
  );

  return { isMatchPath };
};
