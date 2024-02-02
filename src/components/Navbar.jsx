import React, { useContext } from 'react'

import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import {CarritoContext} from '../context/CarritoContext'

export const Navbar = () => {
  const { listaCompras } = useContext(CarritoContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to={'/'} className="navbar-brand" href="#">Carrito de Compras</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={'/'} className="nav-link " href="#">Compras</NavLink>
              </li>

            </ul>
            <NavLink to={'/carrito'}>

              <Badge badgeContent={listaCompras.length} color="secondary">
                <ShoppingCart />
              </Badge>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}
