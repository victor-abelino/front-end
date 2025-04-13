import React from 'react'
 import styles from './Home.module.css';
 
 const Home = ()=>{
     return(
 
         <section className={styles.home_container}>
 
             <h1>Bem Vindo Ao Templo Digital<span>LIBRI</span></h1>
             <p>Comece a gerenciar suas atividades agora mesmo!</p>
             <img className='book_home' src="./Jesus1.jpeg" alt="" />
 
         </section>
 
     );
 }
 
 export default Home;