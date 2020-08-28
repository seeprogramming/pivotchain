import React from 'react'

const CustomSection = (props) => {
    return(
        <div className="customSectionWrap" style={{background:props.bgColor }}>
            {props.children}
        </div>
    )
}

export default CustomSection;