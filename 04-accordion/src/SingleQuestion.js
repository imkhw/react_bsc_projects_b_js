import React, {useState} from 'react'

import { IoAdd, IoRemove } from "react-icons/io5";

import './SingleQuestion.css';

const SingleQuestion = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <div className='SingleQuestion'>
            <div className='showedPart'>
                <p>{title}</p>
                <div>
                    <button onClick={() => {
                        setShowInfo(!showInfo)
                    }}>
                        {showInfo ? 
                            <IoRemove className='IoRemove' /> :
                            <IoAdd className='IoAdd' /> 
                        }
                    </button>
                </div>
            </div>
            {showInfo && <div>{info}</div>}
            <hr />
        </div>
    )
}

export default SingleQuestion