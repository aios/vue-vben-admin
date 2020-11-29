import messages from 'globby?locale!/@/locales/lang/**/*.ts';

import type { DropMenu } from '/@/components/Dropdown';

// locale list
export const localeList: DropMenu[] = [
  {
    text: 'Русский',
    event: 'ru',
  },
  {
    text: 'English',
    event: 'en',
  },
  {
    text: 'Украинский',
    event: 'ua',
  },
];
export default messages;
