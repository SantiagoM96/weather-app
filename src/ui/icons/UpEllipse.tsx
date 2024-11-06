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
        fill="url(#paint0_radial_12369_12190)"
      />
      <path
        d="M64 79a3 3 0 11-6 0h6zm-5.121-38.121a3 3 0 014.242 0L82.213 59.97a3 3 0 11-4.242 4.242L61 47.243l-16.97 16.97a3 3 0 11-4.243-4.242l19.092-19.092zM58 79V43h6v36h-6z"
        fill="#fff"
      />
      <defs>
        <radialGradient
          id="paint0_radial_12369_12190"
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
