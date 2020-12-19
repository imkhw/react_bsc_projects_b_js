import React, { useState, useEffect } from 'react'

import Tour from './Tour'
import Loading from './Loading'

const Tours = () => {
    const url = 'https://course-api.netlify.app/api/react-tours-project'

    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    const removeTour = (id) => {
        const newTour = tours.filter((tour) => {
            return tour.id !== id
        })
        setTours(newTour)
    }

    const fetchTours = async () => {
        setLoading(true)

        try {
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }   
    }

    useEffect(() => {
        fetchTours()
    }, [])

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    if (tours.length === 0) {
        return (
            <div>
                <button onClick={fetchTours}>Refresh tours</button>
            </div>
        )
    }

    return (
        <div>
            {
                tours.map((tour) => {
                    return (
                        <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                    )
                })
            }
        </div>
    )
}

export default Tours
