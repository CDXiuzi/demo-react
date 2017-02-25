/**
 * The action is status bar.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import { STATUS_BAR } from './types';

export const translucentStatusBarSettings = {
  backgroundColor: 'rgba(0, 0, 0, .4)',
  barStyle: 'light-content',
  translucent: true,
  animated: true
};

export const whiteStatusBarSettings = {
  backgroundColor: 'white',
  barStyle: 'dark-content',
  translucent: true,
  animated: true
};

export const statusBarSettings = (props = {}) => ({
  type: STATUS_BAR,
  props
});

export const translucentStatusBar = statusBarSettings(translucentStatusBarSettings);

export const whiteStatusBar = statusBarSettings(whiteStatusBarSettings);
