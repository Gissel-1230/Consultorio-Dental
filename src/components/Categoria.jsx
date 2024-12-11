import React from 'react';

export default function Categoria({ icono, id, nombre, descripcion }) {
    return (
        <div className="flex flex-col items-center gap-2 border p-4 shadow bg-white rounded-md hover:bg-blue-100 cursor-pointer transition-all duration-300 w-60 h-60">
            <img
                alt={`Icono de ${nombre}`}
                src={`/img/icono_${icono}.png`}
                className="w-16 h-16 object-cover mx-auto"
            />
            <h3 className="text-center text-lg font-semibold">{nombre}</h3>
            <p className="text-gray-600 text-center text-sm">{descripcion}</p>
        </div>
    );
}
