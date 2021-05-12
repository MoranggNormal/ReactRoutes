import React from 'react'
import { NavLink } from 'react-router-dom'


const Contato = () => {
    return (
        <section>
            <h1>Contato</h1>
            <p>Esso é o Contato</p>
            <NavLink to="/" activeStyle={{color: "pink"}} end>Voltar à página principal</NavLink>
            <> </>
            <NavLink to="contato" activeStyle={{color: "pink"}}>Página de contatos</NavLink>

        </section>
    )
}

export default Contato
