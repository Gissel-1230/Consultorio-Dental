import { createContext, useState } from 'react';
import categoriasDB from "../data/categorias";
import { toast } from 'react-toastify';


const ConsultorioContext = createContext();

const ConsultorioProvider = ({ children }) => {
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [servicio, setServicio] = useState({});
    const [cita, setCita] = useState([]);


    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(categoria => categoria.id == id)[0]
        setCategoriaActual(categoria)
    };

    const handleClickModal = () => { //mostrar y quitar modal 
        setModal(!modal)
    }

    const handleSetServicio = servicio => {
        setServicio(servicio);
    }

    const handleAgregarServicio = ({ categoriaId, imagen, descripcion, ...servicio }) => { //sacar elementos de un objeto

        if (cita.some(citaState => citaState.id === servicio.id)) {
            const servicioEdicion = cita.map(citaState => citaState.id ===
                servicio.id ? servicio : citaState);
                setCita(servicioEdicion)
        } else{
            setCita([...cita, servicio]);
            toast.success('Agregado a la Cita')
        }
    }

    const handleEliminarServicioCita = id => {
        const citaActualizada = cita.filter(servicio => servicio.id !== id)
        setCita(citaActualizada)
        toast.success('Eliminado de la Cita')
    }
    


    return (
        <ConsultorioContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            modal,
            handleClickModal,
            servicio,
            handleSetServicio,
            cita,
            handleAgregarServicio,
            handleEliminarServicioCita
        }}>
            {children}
        </ConsultorioContext.Provider>
    );
};

export { ConsultorioProvider };
export default ConsultorioContext;
