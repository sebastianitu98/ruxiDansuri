import React, { useCallback, useState, useEffect, useRef } from 'react'

import './opinions.css'
import OpinionCard from './OpinionCard/OpinionCard'

function Opinions() {
    const thumbnailPathStart = 'http://img.youtube.com/vi/'
    const thumbnailPathEnd = '/maxresdefault.jpg'


    let opinions = [{
        opinionLink: "https://www.youtube.com/embed/ujREEgxEP7g?si=TDDiq341eYEhUUPH"
    },
    {
        opinionLink: "https://www.youtube.com/embed/ujREEgxEP7g?si=TDDiq341eYEhUUPH"
    },
    {
        opinionLink: "https://www.youtube.com/embed/ujREEgxEP7g?si=TDDiq341eYEhUUPH"
    },
    {
        opinionLink: "https://www.youtube.com/embed/ujREEgxEP7g?si=TDDiq341eYEhUUPH"
    },
    {
        opinionLink: "https://www.youtube.com/embed/ujREEgxEP7g?si=TDDiq341eYEhUUPH"
    },
    {
        opinionLink: "https://www.youtube.com/embed/ujREEgxEP7g?si=TDDiq341eYEhUUPH"
    },
    {
        opinionLink: "https://www.youtube.com/embed/ujREEgxEP7g?si=TDDiq341eYEhUUPH"
    }
    ]

    const [opinionIndex, setOpinionIndex] = useState(0)

    // const handlers = useSwipeable({
    //     onSwipedLeft: () => scrollPrev(),
    //     onSwipedRight: () => scrollNext(),
    //     ...config,
    // });

    const scrollPrev = () => { if (opinionIndex > 0) { setOpinionIndex(opinionIndex - 1) } }
    const scrollNext = () => { if (opinionIndex + 1 < opinions.length) { setOpinionIndex(opinionIndex + 1) } }



    return (
        <div className='opinionSection flex flex-col mx-auto my-4 w-full mx-auto'>
            <div className='flex carrousel mx-auto embla justify-center items-center'>



                {opinionIndex - 1 == -1 &&
                    <OpinionCard key={opinionIndex - 1} opinionLink={opinions[opinionIndex - 1]?.opinionLink} selected='notSelected' />
                }
                {opinionIndex - 1 >= 0 &&
                    <OpinionCard key={opinionIndex - 1} opinionLink={opinions[opinionIndex - 1]?.opinionLink} selected='notSelected' />
                }

                <OpinionCard key={opinionIndex} opinionLink={opinions[opinionIndex]?.opinionLink} selected='selected' />

                {opinionIndex + 1 < opinions.length &&
                    <OpinionCard key={opinionIndex + 1} opinionLink={opinions[opinionIndex + 1]?.opinionLink} selected='notSelected' />
                }

                {opinionIndex + 1 == opinions.length &&
                    <OpinionCard key={opinionIndex + 1} opinionLink={opinions[opinionIndex + 1]?.opinionLink} selected='notSelected' />
                }
                {/* // opinions.map((el, index) =>
                    //     <OpinionCard key={index} opinionLink={el.opinionLink}/>
                    // ) */}



            </div>
            <div className='flex mx-auto justify-around w-1/4 mb-8'>
                <button onClick={scrollPrev} className={(opinionIndex == 0) ? 'disabled' : ''}><img src="arrowLeft24px.png" alt="Inapoi" /></button>
                <button onClick={scrollNext} className={(opinionIndex == opinions.length - 1) ? 'disasbled ' : ''}><img src="arrowRight24px.png" alt="Inainte" /></button>
            </div>

            <div id='progressBarHomeContactSection'>

            </div>
        </div>
    )
}

export default Opinions
