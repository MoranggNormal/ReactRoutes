import React from 'react'
import { useLocation, useParams, Routes, Route, NavLink } from 'react-router-dom'
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';


const Produto = () => {
    const params = useParams();
    const location = useLocation()
   console.log(location);
    return (
        <div>
            <h1>{params.id}</h1>
            <h3>{location.pathname}</h3>

            <nav>
            <NavLink to="">Descrição</NavLink>
            <NavLink to="avaliacao">Avaliação</NavLink>
            <NavLink to="customizado">Customizado</NavLink>
            </nav>

            <Routes>
                <Route to="/" element={<ProdutoDescricao />} />
                <Route to="avaliacao" element={<ProdutoAvaliacao />} />
                <Route to="customizado" element={<ProdutoCustomizado />} />
            </Routes>

        </div>
    )
}

export default Produto