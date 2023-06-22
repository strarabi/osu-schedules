/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

function Navbar() {
    return (
        <div css={divStyles}>
            <li css={navbarElementStyles}>bb</li>
            <li css={navbarElementStyles}>menu</li>
        </div>
    )
}

const divStyles = css`
    background-color: orange;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    height: 4vh;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin: -0.3%;  
`

const navbarElementStyles = css`
    font-family: 'Arvo', serif;
    margin-left: 45%;
    margin-right: 45%;
    font-weight: bold;
`

export default Navbar
