/**
 * The util of window .
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import { Dimensions } from 'react-native';

// Get the window object.
const _window = Dimensions.get('window');

// Get the window base info.
const { width, height, scale } = _window;

// Scale proportion;
const interScaleProporyion = (value, proportion) => value / 100 * proportion;

export {
  width, height, scale, interScaleProporyion
};

export default {
  ..._window,
  interScaleProporyion
};
