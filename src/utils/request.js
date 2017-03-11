/**
 * The util is request.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import axios from 'axios';

axios.defaults.baseURL = 'http://zank.medz.cn/api';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default axios;
