import {useContext} from 'react';
import ConsultorioContext from '../context/ConsultorioProvider';

const useConsultorio=() =>{
    return useContext(ConsultorioContext)
};

export default useConsultorio;