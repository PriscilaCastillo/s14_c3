import React from 'react'

export const Dog = ({ dog }) => {
    return (
        <div >
            <div className='card'>
                <h3>{dog.name}  </h3>
                <p> Teléfono: {dog.telefono} </p>
                <p> País: {dog.pais} </p>
                <div className='img-container'>
                    <img src={dog.img} alt="" />
                </div>
                <p> {dog.descripcion} </p>
            </div>
        </div>

    );
}
