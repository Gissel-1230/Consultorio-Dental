import { createContext, useState } from 'react';
import categoriasDB from "../data/categorias";

const ConsultorioContext = createContext();

const ConsultorioProvider = ({ children }) => {
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [servicio, setServicio] = useState({});


    const handleClickCategoria = (id) => {
        const categoria=categorias.filter(categoria=> categoria.id==id)[0]
        setCategoriaActual(categoria)
    };

    const handleClickModal=()=>{ //mostrar y quitar modal 
        setModal(!modal)
    }

    const handleSetServicio = servicio =>{
        setServicio(servicio);
    }


    return (
        <ConsultorioContext.Provider value={{ 
            categorias, 
            categoriaActual, 
            handleClickCategoria,
            modal,
            handleClickModal,
            servicio,
            handleSetServicio }}>
            {children}
        </ConsultorioContext.Provider>
    );
};

export { ConsultorioProvider };
export default ConsultorioContext;
