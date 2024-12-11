import useConsultorio from '../hooks/useConsultorio';
import React from 'react';

export default function Categoria({ categoria }) {
    const { handleClickCategoria, categoriaActual} = useConsultorio();

    if (!categoria) {
        return null; // Maneja el caso cuando 'categoria' es undefined
    }

    const { icono, id, nombre, descripcion } = categoria;
    const resaltarCategoriaActual=()=> categoriaActual.id==id? 'bg-blue-400': 'bg-white'

    return (
        <div className={`flex flex-col items-center gap-2 border p-4 shadow bg-white rounded-md hover:bg-blue-100 
            cursor-pointer transition-all duration-300 w-60 h-60 ${resaltarCategoriaActual()}`}>
            <img
                alt={`Icono de ${nombre}`}
                src={`/img/icono_${icono}.png`}
                className="w-16 h-16 object-cover mx-auto"
            />
            <button className="text-center text-lg font-semibold"
                type="button"
                onClick={() => handleClickCategoria(id)}
            >{nombre}</button>
            <p className="text-gray-600 text-center text-sm">{descripcion}</p>
        </div>
    );
}
