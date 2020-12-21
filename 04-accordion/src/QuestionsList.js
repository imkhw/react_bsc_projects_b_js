import React, { useState } from 'react'

import data from './data'

import SingleQuestion from './SingleQuestion'

export const QuestionsList = () => {
    const [questions, setQuestions] = useState(data)
    return (
        <div>
            {
                questions.map((question) => {
                    return (
                      <SingleQuestion key={question.id} {...question} />
                    )
                })
            }
        </div>
    )
}
