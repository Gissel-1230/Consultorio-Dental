import React from 'react';
import {servicios as data} from '../data/servicios';
import Servicio from '../components/Servicio';
import useConsultorio from '../hooks/useConsultorio';

export default function Inicio() {

  const {categoriaActual } = useConsultorio();
  const servicios=data.filter(servicio=> servicio.categoriaId==categoriaActual.id);

    return (
        <>
            <h1 className='text-4xl font-black text-center'>{categoriaActual.nombre}
            </h1>
            <br></br>
            <h1 className='font-black text-center text-2xl'>
              Agenda Tu Cita
            </h1>
            <br></br>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
                {servicios.map(servicio => (
                    <Servicio
                        key={servicio.id}
                        servicio={servicio}
                    />
                ))}
            </div>
        </>
    );
}
