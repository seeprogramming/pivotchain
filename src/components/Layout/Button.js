import React from 'react'

const Button = (props) => {
    return(
        <div className="btnWrap">
            <button>{props.btnTitle}</button>
        </div>
    )
}

export default Button;