import React from 'react';

export default function Servicio({ servicio }) {

    const { nombre, imagen, descripcion } = servicio;

    return (
        <div className='border p-4 shadow bg-white rounded-md hover:bg-blue-200 cursor-pointer transition-all duration-300 w-full h-52'>
            <img
                alt={`Imagen de ${nombre}`}
                className="w-16 h-16 object-cover mx-auto rounded-full"
                src={`/img/${imagen}`}
            />
            <div className="p-5 text-center">
                <h3 className="text-1xl font-semibold">{nombre}</h3>
                <p className="text-gray-600 ">{descripcion}</p>
                <button
                  type="button"
                  className="bg-indigo-400 hover:bg-indigo-600 text-white w-full mt-2 p-3 font-bold rounded-lg">
                    Agregar Servicio
                </button>
            </div>
        </div>
    );
}
