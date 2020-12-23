import { withInstall } from '../util';

import BasicDrawer from './src/BasicDrawer';

export { BasicDrawer };
export * from './src/types';
export { useDrawer, useDrawerInner } from './src/useDrawer';

withInstall(BasicDrawer);
