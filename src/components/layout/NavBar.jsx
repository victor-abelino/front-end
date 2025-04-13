import { Outlet, Link } from 'react-router-dom'
import "./NavBar"  
import style from './NavBar.module.css'
 
 const NavBar = ()=> {
     return(
         <>
 
             <nav className={style.navbar}>
 
                 <ul className={style.list}>
 
                     <Link to='/'>
                         <li className={style.item}><img className={style.logo} src="./Jesus.png" alt="Logotipo" /></li>
                     </Link>
                     
 
                     <Link to='/'>
                         <li className={style.item}>HOME</li>
                     </Link>
                     
                     <Link to='/newBook'>
                         <li className={style.item}>CADASTRAS TAREFAS</li>
                     </Link>
                     
 
                     <Link to='/listBook'>
                         <li className={style.item}>SUAS TAREFAS</li>
                     </Link>
 
                 </ul>
 
             </nav>
 
             <Outlet />
 
         </>
 
     )
    }

    export default NavBar