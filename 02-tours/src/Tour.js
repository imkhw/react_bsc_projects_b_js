import React, { useState } from 'react'

const Tour = ({id, image, name, price, info, removeTour}) => {
    const [showMore, setShowMore] = useState(false)

    return (
        <div>
            <img src={image} alt={name} style={{width: '400px'}} />
            <p>{name}</p>
            <p>{price}</p>
            <p>{ showMore ? info : `${info.substring(0, 200)}...`}</p>
            <button onClick={() => {
                setShowMore(!showMore)
            }}>{showMore ? 'Show less' : 'Show more'}</button>
            <button onClick={() => {
                removeTour(id)
            }}>Not interested</button>
            <hr />
        </div>
    )
}

export default Tour
