import React, { useCallback, useState, useEffect, useRef } from 'react'

import './opinions.css'
import OpinionCard from './OpinionCard/OpinionCard'

function Opinions() {

    let opinions = [{
        opinion: "BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA"
    },
    {
        opinion: "Cel mai frumos curs! Recomand! Ruxandra m-a invatat sa danses exceptional si ii voi ramane vesnic recunoscatoare!"
    },
    {
        opinion: "Multumesc pentu momentele si realizarile nemaipomenite! Iti doresc mult succes in continuare!"
    },
    {
        opinion: "Multumesc pentu momentele si realizarile nemaipomenite! Iti doresc mult succes in continuare!"
    },
    {
        opinion: "Multumesc pentu momentele si realizarile nemaipomenite! Iti doresc mult succes in continuare!"
    },
    {
        opinion: "Multumesc pentu momentele si realizarile nemaipomenite! Iti doresc mult succes in continuare!"
    },
    {
        opinion: "Multumesc pentu momentele si realizarile nemaipomenite! Iti doresc mult succes in continuare!"
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
            <p className='opinionsDescription my-2'>CE SPUN CURSANTELE MELE?</p>
            <div className='flex carrousel mx-auto embla justify-center items-center'>



                {opinionIndex - 1 == -1 &&
                    <OpinionCard key={opinionIndex - 1} text={opinions[opinionIndex - 1]?.opinion} selected='notSelected' />
                }
                {opinionIndex - 1 >= 0 &&
                    <OpinionCard key={opinionIndex - 1} text={opinions[opinionIndex - 1]?.opinion} selected='notSelected' />
                }

                <OpinionCard key={opinionIndex} text={opinions[opinionIndex]?.opinion} selected='selected' />

                {opinionIndex + 1 < opinions.length &&
                    <OpinionCard key={opinionIndex + 1} text={opinions[opinionIndex + 1]?.opinion} selected='notSelected' />
                }

                {opinionIndex + 1 == opinions.length &&
                    <OpinionCard key={opinionIndex + 1} text={opinions[opinionIndex + 1]?.opinion} selected='notSelected' />
                }
                {/* // opinions.map((el, index) =>
                    //     <OpinionCard key={index} text={el.opinion}/>
                    // ) */}



            </div>
            <div className='flex mx-auto justify-around w-1/4 mb-8'>
                <button onClick={scrollPrev} className={(opinionIndex == 0) ? 'disabled' : ''}><img src="arrowLeft.png" alt="Inapoi" /></button>
                <button onClick={scrollNext} className={(opinionIndex == opinions.length - 1) ? 'disasbled ' : ''}><img src="arrowRight.png" alt="Inainte" /></button>
            </div>
        </div>
    )
}

export default Opinions
