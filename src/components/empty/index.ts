import { withInstall } from '@/utils';
import _Empty from './Empty';

// Used in projects only
import '@/components/empty/index.less';

const Empty = withInstall<typeof _Empty>(_Empty);

export default Empty;
export { Empty };
