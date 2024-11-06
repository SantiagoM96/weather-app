import * as React from "react"

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#ffea65"
      {...props}
    >
      <path d="M440-760v-160h80v160h-80zm266 110l-55-55 112-115 56 57-113 113zm54 210v-80h160v80H760zM440-40v-160h80v160h-80zM254-652L140-763l57-56 113 113-56 54zm508 512L651-255l54-54 114 110-57 59zM40-440v-80h160v80H40zm157 300l-56-57 112-112 29 27 29 28-114 114zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70z" />
    </svg>
  )
}

export default SvgComponent
