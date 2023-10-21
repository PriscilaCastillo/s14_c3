// import React from 'react'

import { Dog } from "./Dog"

export const Body = ({ dogs }) => {
    return (
        <section className='card-container'>
            {dogs.map((dog) => (
                <Dog key={dog.id} dog={dog} />
            ))}
        </section>
    )
}
