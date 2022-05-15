import Sidebar from '../Sidebar';
import './index.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
   return (
       <div className='App'>
       <Sidebar /> 
       <div className='page'>
       

           <Outlet />

           <span className='tags bottom-tags'>
               &lt;/body&gt;
               <br />
               
           </span>
       </div>
      </div>
   )
}

export default Layout;