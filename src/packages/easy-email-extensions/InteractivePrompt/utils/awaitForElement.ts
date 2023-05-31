/* eslint-disable @typescript-eslint/no-shadow */

import { getBlockNodeByIdx } from 'packages/easy-email-editor';

export function awaitForElement<T extends HTMLElement>(idx: string) {
  const promiseObj: { cancel: () => void; promise: Promise<T> } = {
    cancel: () => {},
    promise: Promise.resolve() as any,
  };
  promiseObj.promise = new Promise<T>(resolve => {
    const ele = getBlockNodeByIdx(idx) as T;
    if (ele) {
      resolve(ele);
      return;
    }

    const timer = setInterval(() => {
      const ele = getBlockNodeByIdx(idx) as T;

      if (ele) {
        resolve(ele);
        clearInterval(timer);
      }
    }, 50) as any;

    promiseObj.cancel = () => {
      clearInterval(timer);
    };
  });

  return promiseObj;
}