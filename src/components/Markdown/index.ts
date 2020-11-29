import MarkDownLib from './src/index.vue';

import { withInstall } from '../util';

export * from './src/types';
export { MarkDown };
export default withInstall(MarkDown);

export const MarkDown = withInstall(MarkDownLib);
