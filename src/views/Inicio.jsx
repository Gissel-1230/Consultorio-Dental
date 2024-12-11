import React from 'react';
import servicios from '../data/servicios';
import Servicio from '../components/Servicio';

export default function Inicio() {
    return (
        <>
            <h1 className='text-3xl font-black text-center'>
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
