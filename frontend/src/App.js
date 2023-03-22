import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";

import TopMenu from './components/TopMenu';

import Orders from './pages/Orders';
import OrdersForm from './pages/OrdersForm';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { OrderContainer } from './context/orderContext';

function App() {
  return (
    <div className='min-h-screen'>
      <TopMenu />
      <OrderContainer>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cargar-pedido' element={<OrdersForm />} />
          <Route path='/pedidos' element={<Orders />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </OrderContainer>
    </div>
  );
}

export default App;
