import { Card } from '../components/Card'
import React, { useContext } from 'react'
import {ProductosContext} from '../context/ProductosContext'
import { CarritoContext } from '../context/CarritoContext'

export const ComprasPage = () => {

  const {producto} = useContext( ProductosContext )
  const { listaCompras, agregarCompra, eliminarCompra } = useContext(CarritoContext)

  const handleAgregar = (compra)=>{
    agregarCompra(compra)
  }
  const handleQuitar = (id)=>{
    eliminarCompra(id)
  }

  return (
      <>
      <h1>Productos:</h1>
      <hr />

      {producto.map(producto =>(
        <Card
        key={producto.id}
        imagen= {producto.image}
        titulo= {producto.title}
        precio= {producto.description}
        descripcion={producto.price}
        handleAgregar = {()=>handleAgregar(producto)} 
        handleQuitar = {()=>handleQuitar(producto.id) }
        >
          </Card>
      ))}


      </>
    )
}
