/* eslint-disable no-alert */

import { createBrowserHistory } from 'history';
import { ConfirmBeforeLeavePage } from './ConfirmBeforeLeavePage';

export const history = createBrowserHistory({
  // @ts-ignore
  getUserConfirmation(
    message: string | undefined,
    callback: (ok: boolean) => void
  ) {
    if (ConfirmBeforeLeavePage.confirmBeforeLeave) {
      // @ts-ignore
      ConfirmBeforeLeavePage.confirmBeforeLeave(message, callback);
    } else {
      callback(window.confirm(message));
    }
  },
});
