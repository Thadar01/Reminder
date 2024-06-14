import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const Apple = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Icons"
    x={0}
    y={0}
    style={{
      enableBackground: "new 0 0 32 32",
    }}
    viewBox="0 0 32 32"
    width={35}
    height={35}
    {...props}
  >
    <G id="Apple" transform="translate(1 1)">
      <G id="Stroke-82">
        <Path
          id="id_101"
          d="M10.7 31c-2.6 0-4.4-2.3-5.7-4.3-3.3-5.1-4-11.5-1.6-15.2 1.6-2.5 4.2-4 6.7-4 1.3 0 2.4.4 3.3.7.7.3 1.4.5 2.1.5.6 0 1.1-.2 1.8-.5.9-.3 2-.7 3.5-.7 2.2 0 4.5 1.2 6.1 3.2.2.2.3.5.2.8-.1.3-.2.5-.5.7-1.8 1-2.8 2.8-2.6 4.8.1 2.1 1.4 3.8 3.3 4.5.3.1.5.3.6.6.1.3.1.5 0 .8-.7 1.5-1 2.2-1.9 3.5-1.5 2.2-3.3 4.5-5.7 4.5-1.1 0-1.8-.3-2.4-.6-.6-.3-1.2-.6-2.4-.6-1.1 0-1.7.3-2.4.6-.6.4-1.3.7-2.4.7z"
          style={{
            fill: "#fff",
          }}
        />
      </G>
      <G id="Stroke-83">
        <Path
          id="id_102"
          d="M14.7 7.7h-.2c-.5 0-.9-.4-1-.8-.3-1.7.3-3.7 1.6-5.3 1.2-1.5 3.2-2.5 5-2.7.5 0 1 .3 1.1.9.3 1.8-.3 3.7-1.6 5.3-1.1 1.6-3.1 2.6-4.9 2.6z"
          style={{
            fill: "#fff",
          }}
        />
      </G>
    </G>
  </Svg>
);
export default Apple;
