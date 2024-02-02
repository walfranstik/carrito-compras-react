import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Carritopage } from './pages/Carritopage'
import { ComprasPage } from './pages/ComprasPage'
import { ProductosProvider } from './context/ProductosProvider'
import { CarritoProvider } from './context/CarritoProvider'

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <Navbar />

        <div className='container'>
          <Routes>
            <Route path='/' element={<ComprasPage />}></Route>
            <Route path='/carrito' element={<Carritopage />}></Route>
            <Route path='/*' element={<Navigate to={'/'} />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>

  )
}
