import React from 'react'
import './OpinionCard.css'

function OpinionCard({ key, text, selected }) {
    return (
        <div className={`opinionCard ${selected}`} key={key} text={text}>
            <p>{text}</p>
        </div>
    )
}

export default OpinionCard
