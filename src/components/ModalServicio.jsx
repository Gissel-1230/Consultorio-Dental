import useConsultorio from "../hooks/useConsultorio"
import { useEffect } from "react";


export default function ModalServicio() {

    const { servicio, handleClickModal, handleAgregarServicio, cita } = useConsultorio();
  
    return (
        <div className="md:flex items-center gap-10">
            <div className="md:w-1/3">
                <img
                    alt={`Imagen servicio ${servicio.nombre}`}
                    src={`/img/${servicio.imagen}`}
                />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button onClick={handleClickModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
                <h1 className="text-3xl font-bold mt-5">
                    {servicio.nombre}
                </h1>
                <p className="mt-5 font-black text-1xl text-blue-300">
                    {servicio.descripcion}
                </p>
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                    onClick={() => {
                        handleAgregarServicio(servicio)
                        handleClickModal
                    }}
                >
                    Añadir Servicio
                </button>
            </div>
        </div>
    )
}
