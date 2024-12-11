import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Resumen from '../components/Resumen';

export default function Layout() {
  return (
    <div className='md:flex'>
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Resumen />
    </div >
  );
}
