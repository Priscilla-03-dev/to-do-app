import React from 'react'

function Dots() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 23 23"
            width="30px"
            height="30px">
            <g fill="none" fillRule="evenodd" transform="translate(2 2)">
                <circle
                    cx={8.5}
                    cy={8.5}
                    r={8}
                    stroke="#EC407A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    fill="#EC407A"
                    d="M8.5 9.5c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1zm-4 0c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1zm8 0c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1z"
                />
            </g>
        </svg>
    )
}

export default Dots
