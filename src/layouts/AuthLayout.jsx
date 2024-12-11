import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className='max-w-4xl mx-auto mt-10 md:mt-28 flex flex-col md:flex-row'>
       <div className="flex-shrink-0 flex items-center justify-center">
           <img 
             src='../img/logo.png'
             alt="imagen logotipo"
             className="h-17 w-auto"
           />
       </div>

       <div className="flex-1">
         <Outlet />
       </div>
    </main>
  );
}
