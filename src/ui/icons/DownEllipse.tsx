import * as React from "react"

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>= (props) => {
    return (
      <svg
        width={121}
        height={121}
        viewBox="0 0 121 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle
          cx={60.5}
          cy={60.5}
          r={60.5}
          fill="url(#paint0_radial_12369_12189)"
        />
        <path
          d="M58 43a3 3 0 116 0h-6zm5.121 38.121a3 3 0 01-4.242 0L39.787 62.03a3 3 0 114.242-4.242L61 74.757l16.97-16.97a3 3 0 114.243 4.242L63.121 81.121zM64 43v36h-6V43h6z"
          fill="#fff"
        />
        <defs>
          <radialGradient
            id="paint0_radial_12369_12189"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90 0 60.5) scale(60.5)"
          >
            <stop offset={0.579636} stopColor="#FED155" />
            <stop offset={1} stopColor="#FEBA55" />
          </radialGradient>
        </defs>
      </svg>
    )
  }
  
  export default SvgComponent