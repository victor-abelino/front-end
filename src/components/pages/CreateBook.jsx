import React from "react";
import style from "./CreateBook.module.css"

import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button"; 

 const CreateBook = ()=>{
     return(
        <section className={style.create_book_container}>

        <Input
            text='Nome Do Lider'
            type='text'
            name='txt_livro'
            id='txt_livro'
            placeholder='Digite Aqui'
        />

        <Input
            text='Tipo De Tarefa'
            type='text'
            name='txt_autor'
            id='txt_autor'
            placeholder='Digite Aqui'
        />

        <Input
            text='Horario'
            type='text'
            name='txt_descricao'
            id='txt_descricao'
            placeholder='Digite Aqui'
        />

        <Select 
            name='slc_categoria'
            id='slc_categoria'
            text='Nome Do Integrante'
        />

        <Button
            label='CADASTRAR'
        />

    </section>

)
}

export default CreateBook