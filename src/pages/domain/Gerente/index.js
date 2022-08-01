import React from "react";
import { NavLink } from 'react-router-dom';
import './styles.css';

function Gerente() {
    return (
        <>
            <div id="Gerente">
                <NavLink to='/'>

                </NavLink>

                <ul>
                    <li>
                        <NavLink to="/cadastrar-gerente">Cadastrar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/alterar-gerente">Alterar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/remover-gerente">Remover</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Gerente;