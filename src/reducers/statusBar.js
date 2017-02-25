/**
 * The file is defined "statusBar".
 *
 * @author Seven Du shiweidu@outlook.com
 */

import { STATUS_BAR } from '../actions/types';
import { whiteStatusBarSettings } from '../actions/statusBar';

export default function (state = whiteStatusBarSettings, { type, props = {} }) {
  if (type === STATUS_BAR) {
    return props;
  }

  return state;
};
