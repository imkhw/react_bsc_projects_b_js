import React, { useState } from 'react'

import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import people from './data'

const Reviews = () => {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = people[index]
    const checkNumber = (index) => {
        if (index > people.length - 1) {
            return 0
        } 
        if (index < 0) {
            return people.length - 1
        }
        return index
    }
    const nextOne = () => {
        setIndex((currentIndex) => {
            let newIndex = currentIndex + 1
            return checkNumber(newIndex)
        })
    }
    const prevOne = () => {
        setIndex((currentIndex) => {
            let newIndex = currentIndex - 1
            return checkNumber(newIndex)
        })
    }
    const randomOne = () => {
        let randomNum = Math.floor(Math.random() * people.length)
        if (randomNum === index) {
            randomNum = checkNumber(randomNum + 1)
        }
        setIndex(randomNum)
    }
    return (
        <div>
            <img src={image} alt={name} style={{width: '200px'}}/>
            <p>{name}</p>
            <p>{job}</p>
            <p>{text}</p>
            <button onClick={prevOne}>
                <IoIosArrowBack />
            </button>
            <button onClick={nextOne}>
                <IoIosArrowForward />
            </button>
            <button onClick={randomOne}>
                Surprise
            </button>
        </div>
    )
}

export default Reviews
