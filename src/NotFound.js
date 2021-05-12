import React from 'react'
import { NavLink } from 'react-router-dom'


const NotFound = () => {
    return (
        <footer>
            <h3>NotFound</h3>
            <p>Esta página não foi encontrada.</p>
            <NavLink to="/" activeStyle={{color: "pink"}} end>Voltar à página principal</NavLink>
            
        </footer>
    )
}

export default NotFound
