/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Calendar() {
    return (
        <div css={calendarStyles}>
            <p>calendar here</p>
        </div>
    )
}

const calendarStyles = css`
    border: 1px solid black;
    position: fixed;
    bottom: 22vh;
    margin-left: 60vw;
    width: 20vw;
    height: 50vh;
    overflow: auto;
`
