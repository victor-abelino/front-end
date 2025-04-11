import { Outlet, Link } from 'react-router-dom'
 
 import style from './NavBar.module.css'
 
 const NavBar = ()=>{
     return(
         <>
 
             <nav className={style.navbar}>
 
                 <ul className={style.list}>
 
                     <Link to='/'>
                         <li className={style.item}><img className={style.logo} src="./book.png" alt="Logotipo" /></li>
                     </Link>
                     
 
                     <Link to='/'>
                         <li className={style.item}>HOME</li>
                     </Link>
                     
                     <Link to='/newBook'>
                         <li className={style.item}>CADASTRAR LIVROS</li>
                     </Link>
                     
 
                     <Link to='/listBook'>
                         <li className={style.item}>LISTAR LIVROS</li>
                     </Link>
 
                 </ul>
 
             </nav>
 
             <Outlet />
 
         </>
 
     )
 }