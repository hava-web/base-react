import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

type Await<T> = T extends Promise<infer A> ? A : never;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type OverwriteBy<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
type ValueOf<T> = T[keyof T];
type AString = undefined | null | string;
type UndefinedAll<T> = {
  [P in keyof T]?: T[P] | undefined;
};
