import React from 'react'
import { homeCardStyles } from '../styles/styles'

const Card = ({hideOnSm = false,card}) => {
    return (
        <div className={`text-white shadow-default-card unselectable bg-primary ${homeCardStyles} ${hideOnSm ? 'hidden sm:block' : 'block'}`}>
            <p className='pt-10 pre-line'>
                {card ? card : "Lorem ipsum dolor sit amet"}
            </p>
        </div>
    )
}

export default Card