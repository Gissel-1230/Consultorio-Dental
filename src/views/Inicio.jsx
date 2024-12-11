import React from 'react';
import servicios from '../data/servicios';
import Servicio from '../components/Servicio';

export default function Inicio() {
    return (
        <>
            <h1 className='text-4xl font-black'>
                Inicio - Agenda Tu Cita
            </h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
