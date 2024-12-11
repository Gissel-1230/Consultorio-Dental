import React from 'react';
import categorias from "../data/categorias";
import Categoria from './Categoria';

export default function Sidebar() {
    return (
        <aside className="md:w-96 mx-auto">
            <div className="p-4">
                <img
                    className="w-40 mx-auto"
                    src="img/logo.png"
                    alt="Logotipo"
                />
            </div>

            <div className="mt-10 flex flex-col gap-4">
                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        icono={categoria.icono}
                        id={categoria.id}
                        nombre={categoria.nombre}
                        descripcion={categoria.descripcion}
                    />
                ))}
            </div>

            <div className="my-5 px-5">
                <button type="button"
                        className="text-center bg-red-500 w-full p-3 font-bold text-white truncate">
                    Cancelar Cita
                </button>
            </div>
        </aside>
    );
}
