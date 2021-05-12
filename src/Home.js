import React from 'react'
import { NavLink } from 'react-router-dom'
import Head from './Head';



const Home = () => {

    // function handleClick (e) {
    //     e.stopPropagation()
    // }

    return (
        <section>
            <Head title='Home' description="Home page"/>
            
            <h1>Home</h1>
            <p>Essa é a Home</p>
            {/* <a href="contato" onClick={handleClick}>Página de contatos</a> */}
            <NavLink to="contato" activeStyle={{color: "pink"}}>Página de contatos</NavLink>
            <NavLink to="/" activeStyle={{color: "pink"}} end>Voltar à página principal</NavLink>

            <NavLink to="produto">Página de Baralhos</NavLink>
            {/* <NavLink to="produto/cenouras">Página de Cenouras</NavLink> */}
        </section>
    )
}

export default Home
