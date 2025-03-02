import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SearchSmall: React.FC<SvgProps> = props => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#464646"
      fillRule="evenodd"
      d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SearchSmall;
