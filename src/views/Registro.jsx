import React from 'react';
import { Link } from 'react-router-dom';


export default function Registro() {
    return (
        <>
            <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
            <p>Crea tu Cuenta llenando el formulario</p>
            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="name">
                            Nombre:
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border border-gray-300 p-2 rounded-md w-full mt-1"
                            name="name"
                            placeholder="Tu Nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-300 p-2 rounded-md w-full mt-1"
                            name="email"
                            placeholder="Tu Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="password">
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="border border-gray-300 p-2 rounded-md w-full mt-1"
                            placeholder="Tu Contraseña"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="password_confirmation">
                            Repetir Contraseña:
                        </label>
                        <input
                            type="password"
                            id="password_confirmation"
                            className="border border-gray-300 p-2 rounded-md w-full mt-1"
                            placeholder="Repetir Contraseña"
                        />
                    </div>

                    <div>
                        <input
                            type="submit"
                            value="Crear Cuenta"
                            className="bg-indigo-600 text-white p-2 rounded-md w-full mt-4 font-bold cursor-pointer"
                        />
                    </div>
                </form>
            </div>

            <nav className="mt-5">
                <Link to="/auth/login">
                    ¿Ya tienes cuenta? Inicia Sesión
                </Link>
            </nav>

        </>
    );
}
