import React from 'react'
import useConsultorio from '../hooks/useConsultorio';
import ResumenCita from './ResumenCita';


export default function Resumen() {
  const { cita } = useConsultorio();

  const comprobarCita=()=>cita.length===0;


  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black text-center">
        Mi Cita
      </h1>
      <p className='text-lg my-5'>
        Aquí podrás ver el resumen de tus servicios seleccionados para tu cita
      </p>

      <div className="py-10">
        {cita.length === 0 ? (
          <p className="text-center text-2xl">
            No hay elementos en tu cita aún
          </p>
        ) : (
          cita.map(servicio=>(
            <ResumenCita
              key={servicio.id}
              servicio={servicio}
            />
          ))
        )}
      </div>

      <form className="w-full">
        <div className="mt-5">
          <input
            type="submit"
            className={`${comprobarCita() ? 'bg-indigo-100': 
              'bg-indigo-600 hover:bg-indigo-800'} 
              px-5 py-2 rounded font-bold text-white text-center w-full cursor-pointer`}
            value="Agendar Cita"
            disabled={comprobarCita()}
          />
        </div>
      </form>


    </aside>
  );
}
