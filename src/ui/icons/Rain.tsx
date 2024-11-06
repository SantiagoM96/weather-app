import * as React from "react"

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>= (props) => {
    return (
        <svg
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M8.691 19.712a.91.91 0 01-.762.063 1.043 1.043 0 01-.588-.512l-6-12A.91.91 0 011.28 6.5c.091-.258.262-.454.512-.588a.91.91 0 01.763-.062c.258.092.454.262.587.512l6 12a.91.91 0 01.063.763 1.044 1.044 0 01-.513.587zm4.675 0a.91.91 0 01-.762.063 1.043 1.043 0 01-.588-.512l-6-12a.91.91 0 01-.062-.763c.091-.258.262-.454.512-.588.25-.133.5-.154.75-.062s.442.262.575.512l6.025 12a.91.91 0 01.063.763 1.044 1.044 0 01-.513.587zm4.675-.024a.945.945 0 01-.762.075.993.993 0 01-.588-.5l-6-12a.91.91 0 01-.062-.763c.091-.258.262-.454.512-.588.25-.133.5-.154.75-.062s.442.262.575.512l6.025 12c.134.25.154.5.063.75-.092.25-.263.442-.513.576zm4.65.024a.91.91 0 01-.762.063 1.043 1.043 0 01-.588-.512l-6-12a.91.91 0 01-.062-.763c.091-.258.262-.454.512-.588a.91.91 0 01.763-.062c.258.092.454.262.587.512l6 12a.91.91 0 01.063.763 1.044 1.044 0 01-.513.587z"
          />
        </svg>
      )
    }
    
    export default SvgComponent
