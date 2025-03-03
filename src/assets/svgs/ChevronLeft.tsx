import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ChevronLeft: React.FC<SvgProps> = props => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#464646"
      d="M15.707 5.293a1 1 0 0 1 0 1.414L10.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0"
    />
  </Svg>
);
export default ChevronLeft;
