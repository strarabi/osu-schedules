/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Cart(props) {

    return (
        <div css={cartStyles}>
            <span css = {cartTextStyles}> Cart </span>
            <i className="fa fa-shopping-cart"></i>
            {props.courses}
        </div>
    )
}

const cartStyles = css`
    margin-top: 6vh;
    margin-left: 20vh;
    width: 50vh;
`
const cartTextStyles = css`
    font-family: 'Arvo', serif;
    font-weight: bold;
    text-align: center;
    margin-left: 5vh;
`
