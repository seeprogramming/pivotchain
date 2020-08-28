import React from 'react'

const CustomImageSection = (props) => {

    const imageStyle = {
        backgroundImage : `url( ${props.bgImage} )`,
        backgroundposition: 'center center',
        backgroundRepeat : 'no-repeat',
        backgroundSize: 'cover'
    }


    return(
        <div className="customImageSectionWrap" style={imageStyle}>
            {props.children}
        </div>
    )
}

export default CustomImageSection;