import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Heart_i_filled(props) {
  return (
    <Svg
      viewBox="0 0 512 512"
      width={512}
      height={512}
      className="prefix__hovered-paths"
      {...props}
    >
      <Path
        d="M256 481a14.93 14.93 0 01-9.873-3.706c-21.826-19.087-42.583-36.782-62.109-53.423C73.817 329.96 0 267.909 0 177.514 0 93.988 59.037 31 136 31c60.659 0 99.595 42.378 120 80.537C276.405 73.378 315.341 31 376 31c76.963 0 136 62.988 136 146.514 0 90.396-73.817 152.446-184.018 246.357-19.526 16.641-40.283 34.336-62.109 53.423A14.93 14.93 0 01256 481z"
        data-original="#FD3018"
        className="prefix__hovered-path prefix__active-path"
        data-old_color="#FD3018"
        fill="#e74c3c"
      />
      <Path
        d="M265.873 477.294c21.826-19.087 42.583-36.782 62.109-53.423C438.183 329.96 512 267.909 512 177.514 512 93.988 452.963 31 376 31c-60.659 0-99.595 42.378-120 80.537V481c3.53 0 7.046-1.23 9.873-3.706z"
        data-original="#E61E14"
        data-old_color="#E61E14"
        fill="#c0392b"
      />
    </Svg>
  )
}

export default Heart_i_filled
