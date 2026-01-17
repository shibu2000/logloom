import Svg, { Line, Polygon } from "react-native-svg";

const FlowArrow = () => (
  <Svg width={20} height={120} viewBox="0 0 20 120">
    <Line
      x1="10"
      y1="0"
      x2="10"
      y2="100"
      stroke="#D0C9BB"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Polygon points="5,100 15,100 10,110" fill="#D0C9BB" />
  </Svg>
);

export default FlowArrow;
