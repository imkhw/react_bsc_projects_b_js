import React from 'react'

const MenusList = ({menuItems}) => {
    return (
        <div>
            {
                menuItems.map((menuItem) => {
                    const {id, title, category, price, img, desc} = menuItem
                    return (
                        <div key={id}>
                            <img src={img} alt={title} style={{width: '200px'}} />
                            <p>{price}</p>
                            <p>{title}</p>
                            <p>{desc}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenusList
