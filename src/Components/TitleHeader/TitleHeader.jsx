import React from 'react'
import './TitleHeader.css'

function TitleHeader({ componentSrc, text, backgroundImgWidth }) {
    return (
        <div className="titleHeaderComponent py-4 relative">
            <img src={`${componentSrc}TitleBackground.png`} alt="Backgorund titlu" className='titleHeaderImage absolute' style={{ width: `${backgroundImgWidth}px` }} />
            <div className='mx-auto flex justify-center items-center'>
                <span className='titleHeaderDescriptionText text-black'>{text}</span>
            </div>
        </div>
    )
}

export default TitleHeader
