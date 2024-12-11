import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <h1 className="text-4xl font-black">Iniciar Sesion</h1>
            <p>Para agendar una cita debes de inicar sesión</p>
            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form>

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
                    <div>
                        <input
                            type="submit"
                            value="Iniciar Sesión"
                            className="bg-indigo-600 text-white p-2 rounded-md w-full mt-4 font-bold cursor-pointer"
                        />
                    </div>
                </form>
            </div>

            <nav className="mt-5">
                <Link to="/auth/registro">
                    ¿No tienes cuenta? Crea una
                </Link>
            </nav>




        </>
    )
}
