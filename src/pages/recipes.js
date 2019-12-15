import React from 'react'

function recipes({title, calories, imgUrl}) {
    return (
        <div>
            <h1>{title}</h1>
            <h3>{calories}</h3>
            <img src={imgUrl}></img>
        </div>
    )
}

export default recipes
