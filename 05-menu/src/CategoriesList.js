import React from 'react'

const CategoriesList = ({categoryItems, filteredByCategory}) => {
    return (
        <div>
            {
                categoryItems.map((categoryItem, index) => {
                    return (
                        <div key={index}>
                            <button onClick={() => {
                                filteredByCategory(categoryItem)
                            }}>
                                {categoryItem}
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoriesList
