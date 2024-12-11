import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Resumen from '../components/Resumen';
import useConsultorio from '../hooks/useConsultorio';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ModalServicio from '../components/ModalServicio';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

Modal.setAppElement('#root')



export default function Layout() {

  const { modal } = useConsultorio();


  return (
    <>

      <div className='md:flex'>
        <Sidebar />
        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
          <Outlet />
        </main>
        <Resumen />
      </div >

     
        <Modal isOpen={modal} style={customStyles}>
          <ModalServicio/>
        </Modal>

        <ToastContainer />
   
    </>

  );
}
