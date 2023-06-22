/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Course(props) {
    return (
        <div css={courseContainerStyles}>
            <p css={courseStyles}>{props.name}</p>
        </div>
    )
}

const courseContainerStyles = css`
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border: 1px solid black;
    margin: 2vh;
    border-radius: 6px;
`

const courseStyles = css`
    font-family: 'Arvo', serif;
    font-weight: bold;
    text-align: center;
`
