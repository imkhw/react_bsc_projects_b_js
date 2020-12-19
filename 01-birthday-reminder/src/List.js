import React from 'react'

const List = ({name, age, image}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <img src={image} alt={name} style={{width: '150px'}}/>
        </div>
    )
}

export default List
